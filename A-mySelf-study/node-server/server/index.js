const http = require('http');

http.createServer((req, res) => {
  res.end('Hello World!')
})
.listen(7070, () => {
  console.log('server is running 7070')
})