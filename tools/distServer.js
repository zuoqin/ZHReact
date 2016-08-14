import express from 'express';
import path from 'path';
import open from 'open';
import colors from 'colors';
import compression from 'compression'
/* eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();


app.use(express.static('dist'));

require('./config/routes')(app);

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    /* eslint-disable no-console */

    console.log('Listening server....'.green);
    open(`http://localhost:${port}`);
  }
});
