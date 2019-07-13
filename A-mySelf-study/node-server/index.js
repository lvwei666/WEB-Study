const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
	if (req.url == '/') {
	  const indexFile = fs.createReadStream('./index.html')
	  res.writeHead(200,{'context-Type':'text/html;charset = utf8'})
	  indexFile.pipe(res)
  }
})
server.listen(8080)