var webpack = require("webpack") ;
var webpackConfig = require("../webpack.config.prod") ;
var colors = require("colors");


process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production via Webpack. This will take some time...'.blue);

webpack(webpackConfig).run((err, stats) =>{
  if(err){
    console.log(err.bold.red);
    return 1;    
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error =>console.log(error.red));
  }

  if(jsonStats.hasWarnings){
    console.log('Webpack generated the following warnings: '.bold.yellow);
    return jsonStats.warnings.map(warning =>console.log(warning.yellow));
  }


  console.log('Webpack stats: ${stats}');

  console.log('Application has been compiled in production mode and written to /dist. It is ready to start!'.green);


  return 0;
});


