var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '643398289',
  database: 'trip'
})
// 定义接口
router.post('/', function(req, res, next) {
  let userName = req.body.userName
  let passWord = req.body.passWord
  pool.query(`SELECT * FROM user where userName=${userName}`, function(err, results, fields) {
    if (err) {
      data.code = 500
      data.msg = err
    }
    if (results[0].passWord === passWord) {
      selectUser(results[0].userId)
    } else {
      data.code = 400
      data.msg = '账号或密码输入有误'
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Content-Type', 'application/json')
      res.json(data)
    }
  })
  function selectUser(id) {
    pool.query(`SELECT * FROM user_info where userId=${id}`, function(err, results, fields) {
      if (err) {
        data.code = 500
        data.msg = err
      }
      data.code = 200
      data.msg = 'success'
      data.data = results[0]
      res.statusCode = 200
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Content-Type', 'application/json')
      res.json(data)
    })
  }
})

module.exports = router