var express = require('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser')
var multer = require('multer')

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/' }).array('image'))

app.get('/upload.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html')
})

app.post('/file_upload', (req, res) => {
  console.log(req.files[0])

  var des_file = __dirname + '/' + req.files[0].originalname
  fs.readFile(req.files[0].path, (err, data) => {
    fs.writeFile(des_file, data, err => {
      if (err) {
        console.log(err)
      } else {
        response = {
          message: 'File iploaded successfully',
          filename: req.files[0].originalname
        }
      }
      console.log(response)
      res.end(JSON.stringify(response))
    })
  })
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})