var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  console.log('post 请求')
  res.send('Hello Post')
})

app.get('/del_user', (req, res) => {
  console.log('delete 请求')
  res.send('删除页面')
})

app.get('/list_user', (req, res) => {
  res.send('用户列表')
})

app.get('/ab*cd', (req, res) => {
  res.send('正则')
})

var server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})