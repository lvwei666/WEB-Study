// 引入资源文件
var createError = require('http-errors');
var express = require('express'); //1
var path = require('path'); //
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //引入index.js路由配置文件
var userRouter = require('./routes/user'); //引入user.js路由配置文件
// var tripRouter = require('./routes/trip');

var app = express(); // 用express创建一个app应用

// view engine setup
app.set('views', path.join(__dirname, 'views')); //指定视图文件夹 views/
app.set('view engine', 'pug'); // 指定视图引擎 pug

// 使用刚刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //使用cookie
app.use(express.static(path.join(__dirname, 'public'))); //指定公共资源文件夹 为public/

app.use('/', indexRouter); //当路径为'/'，即'http://localhost:3000/'时，匹配index.js
app.use('/user', userRouter); //当路径为'/use',即'http://localhost:3000/user'时，匹配use.js
// app.use('/trip', tripRouter);

// 匹配404，即路径未匹配时
app.use(function(req, res, next) {
  next(createError(404));
});

// 当路径匹配错误时
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
console.log('跑起来了')
module.exports = app;