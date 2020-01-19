var express = require('express')
var app = express()
var fs = require('fs')

app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
    console.log(data)
    res.end(data)
  })
})

var user = {
  "user4" : {
    "name" : "mohit",
    "password" : "password4",
    "profession" : "teacher",
    "id": 4
 }
}

app.get('/addUser', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    data['user4'] = user['user4']
    res.end(JSON.stringify(data))
  })
})

app.get('/:id', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    var user = data['user' + req.params.id]
    console.log(user)
    res.end(JSON.stringify(user))
  })
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})