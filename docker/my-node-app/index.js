var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('hello world')
})

app.listen(8081, function() {
  console.log('app listening on port 8081');
})