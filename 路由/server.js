var http = require('http')
var url = require('url')

function start(route) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname
    console.log('Request for' + pathName + 'received')

    route(pathName)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }

  http.createServer(onRequest).listen(8888)
  console.log('Server has started.')
}

exports.start = start