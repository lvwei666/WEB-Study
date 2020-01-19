var http = require('http')

var options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
}

var callback = function(res) {
  var body = ''
  res.on('data', data => {
    body += data
  })
  res.on('end', () => {
    console.log(body)
  })
}

var req = http.request(options, callback)
req.end()