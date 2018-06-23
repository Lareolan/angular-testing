// content of server.js
const express = require('express');
const app = express();
//const router = express().Router();
const path = require('path');
const port = 4200;
const ip = '0.0.0.0';

/*
app.get('/', (request, response) => {
//  response.send('Hello from Express!')
  response
})
*/
/*
router.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/dist/test-project/index.html'));
});
router.get('(.*)', (req, res) => {
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});
*/
//app.use('/', router);

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/dist/test-project/index.html'));
});
//app.use('/', express.static('/dist/test-project'));
app.use(express.static(path.join(__dirname, '/dist/test-project/')));

app.listen(port, ip, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
