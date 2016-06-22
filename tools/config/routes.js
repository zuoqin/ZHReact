
let theStories = {};

module.exports = function(app) {

let http = require("http");


  // Utility function that downloads a URL and invokes
  // callback with the data.
  function download(req, url, callback) {
   let pos1 = url.indexOf("www.zerohedge.com");
    let opt = {};
    if ( pos1 > 0 ){
      pos1 = pos1 + 17;
      let pos2 = url.length;
      let path = url.slice(pos1,pos2);
      opt = {
            port: '80',
            host: 'www.zerohedge.com',
            //host: '127.0.0.1',
            path: path,
            //path: '/zerohedge.html',
            headers: {
             'Connection': 'keep-alive',
             'Cache-Control': 'no-cache',
             'Accept' :
                 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
             'User-Agent':
                 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
             'Accept-Encoding': '',
             'Accept-Language': 'ru,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4,zh;q=0.2'
           }
         };

    }
    else
    {
      opt = {
            port: '80',
            host: '127.0.0.1',
            path: '/zerohedge.html',
            headers: {
             'Connection': 'keep-alive',
             'Cache-Control': 'no-cache',
             'Accept' :
                 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
             'User-Agent':
                 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
             'Accept-Encoding': '',
             'Accept-Language': 'ru,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4,zh;q=0.2'
           }
         };
    }



    http.get(opt, function(res) {
      let data = "";
      let request = req;
      res.on('data', function (chunk) {
        data += chunk;
        //console.log("1");
      });
      res.on("end", function() {
        //console.log("end: " + url);
        callback(request, data);
      });
    }).on("error", function() {
      //console.log("error: " + url);
      callback(null);
    });
  } // download

  let cheerio = require("cheerio");

  //var url = "http://www.echojs.com/";
  //var url = "http://127.0.0.1/zerohedge.html";
  let url = "http://www.zerohedge.com";


  app.get('/api/page/:id', function(req, res, next){
      let key = req.params.id;
      if(key == undefined)
        key = 0;
      //let _id = req.params.id;
      if( theStories === null || theStories === undefined || !theStories[key] )
      {
           theStories[key] = [];
      }
      if(theStories[key].length === 0){
        console.log("key: " + key);
        download( req, "http://www.zerohedge.com/?page="+key, function(req1, data) {
          if (!data) {
            res.send("");
          } else {
            console.log("Downloaded some data from zerohedge");
            let ind1 = data.indexOf("view view-zh-frontpage view-id-zh_frontpage view-display-id-page_1 view-dom-id-1", 0);
            let ind5 = 0;
            let j;
            for( j = 0; j < 50; j++) {
              ind1 = data.indexOf("<article class=\"node", ind5);
              if(ind1 > 0){
                let ind2 = data.indexOf("<h2 class=\"title teaser-title\"><a href=\"", ind1);
                ind2 = (ind2 + 40);
                let ind3 = data.indexOf("\">", ind2);
                let ref = data.substring(ind2, ind3);
                ind3 = (ind3 + 2);
                let ind4 = data.indexOf("</a>", ind3);

                let title = data.substring(ind3, ind4);

                ind5 = data.indexOf("<span class=\"teaser-text\">", ind4);
                ind5 = ind5 + 27;
                let ind6 = data.indexOf("</span>", ind5);


                let body = "";
                if (ind5 > 0 && ind6 > 0) {
                  body = data.substring(ind5, ind6);
                }
                else
                  body = "";

                ind5 = data.indexOf("<li class=\"link-created\">", ind6);
                ind5 = ind5 + 25;
                ind6 = data.indexOf("</li>", ind5);
                let published = data.substring(ind5, ind6);

                theStories[key].push({
                  Introduction: body,
                  Reference: new Buffer(ref).toString('base64'),
                  Title: title,
                  Published: published,
                  id: j,
                  pageId: key
                });
              }
            }
            res.send(theStories[key]);
          }
        });
      }
      else{
        console.log("Found theer are stories: " + theStories[key].length);
        res.send(theStories[key]);
      }

  }
  );


  app.get('/api/item/:id', function(req, res, next){
    //console.log( "pageId: " + req.params.pageId);
    //console.log( "Id: " + req.params.id);

    //let story = theStories[req.params.id];
    let ref = "http://www.zerohedge.com" + new Buffer(req.params.id, 'base64').toString('ascii');
    let Reference = req.params.id;
    console.log( "Reference for a story: " + ref);
    download( req, ref, function(req, data) {
      if (data) {
        let pos1 = data.indexOf("<title>");
        pos1 = pos1 + 7;
        let pos2 = data.indexOf("| Zero Hedge") - 1;
        let title = data.substring(pos1, pos2);


        pos1 = data.indexOf("<div class=\"submitted_datetime\">", pos1);
        pos1 = data.indexOf("<span title", pos1 + 10);
        pos1 = data.indexOf(">", pos1 + 10);
        pos1 = pos1 + 1;
        pos2 = data.indexOf("</span>", pos1 + 5);
        let published = data.substring(pos1, pos2);

        pos1 = data.indexOf("<main>", 0);
        pos1 = pos1 + 10;
        pos1 = data.indexOf("<div class=\"content\">", pos1);
        pos1 = pos1 + 21;

        pos2 = data.indexOf("<div class=\"taxonomy\"", pos1);
        if(pos2 === -1){
          pos2 = data.indexOf("<div class=\"node-links\">", pos1);
        }

        console.log( "Getting content between " + pos1 + " and " + pos2);
        let content = data.substring(pos1, pos2);
        let item = {
          Published:published,
          Title:title,
          Body:content,
          Reference: Reference
        };
        res.send(item);
       }
      else{
        res.send("No data found");
      }

    });
  });


  app.all('/api/*', function(req, res) {
    res.send(404);
  });
};
