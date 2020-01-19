var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'))

app.get('/post.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'post.html')
})

app.post('/process_post', urlencodeParser, (req, res) => {
  var response = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

var server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})