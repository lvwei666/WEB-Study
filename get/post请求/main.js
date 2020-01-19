var http = require('http')
var url = require('url')
var util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  var params = url.parse(req.url, true).query
  res.write('网站名：' + params.name)
  res.write('网站 URL: ' + params.url)
  res.write('\n')
  res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)