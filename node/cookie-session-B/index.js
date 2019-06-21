const koa = require('koa');
const Router = require('koa-router');
const koaSession = require('koa-session');
const staticServer = require('koa-static');
const path = require('path');
const app = new koa();
const router = new Router();
const session_signed_key = ['secret'];

app.keys = session_signed_key;
const sessionConfig = {
  key: 'sid', //放到 cookie 里面 name
  maxAge: 10000
}
app.use(koaSession(sessionConfig, app));
app.use(staticServer(path.join(__dirname, './static')));

// router.get('/', async (ctx) => {
//   ctx.cookies.set('fromserver1', 'fromserver1', {
//     maxAge: 5000
//   });
//   ctx.cookies.set('user', 'user', {
//     path: '/user',
//     httpOnly: false
//   });
//   ctx.cookies.set('post', 'post', {
//     path: '/post',
//   });
//   ctx.cookies.set('user-abc', 'user-abc', {
//     path: '/user/abc',
//   });
//   ctx.type = 'html';
//   ctx.body = `
//     <a href="/user">-> user</a>
//     <a href="/post">-> post</a>
//   ` 
// })
router.get('/user', async (ctx) => {
  ctx.body = 'user page';
})
router.get('/post', async (ctx) => {
  ctx.body = 'post page';
})
router.get('/user/abc', async (ctx) => {
  ctx.body = 'user/abc page';
})
router.get('/login', async (ctx) => {
  const { name, password } = ctx.query;
  if (name === 'test' && password === 'test') {
    // 写到 session
    ctx.session.login = true;
    ctx.type = 'html';
    ctx.body = '登录成功' + '<a href="/testlogin">测试登录</a>';
  } else {
    ctx.session.login = false;
    ctx.body = '账户错误';
  }
})
router.get('/testlogin', async (ctx) => {
  if (ctx.session.login) {
    ctx.body = '成功登录'
  } else {
    ctx.redirect('/');
  }
})
app.use(router.routes())
app.listen(7878, () => {
  console.log('server is running 7878');
})