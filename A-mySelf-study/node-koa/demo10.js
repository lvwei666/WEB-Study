const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'MyName', 'lv', {
        domain: 'localhost',
        // path: '/index',
        maxAge: 1000*60*60*24,
        expires: new Date('2019-7-21'),
        httpOnly: false,
        overwrite: false
      }
    );
    ctx.body = "cookies is ok!"
  } else {
    if (ctx.cookies.get('MyName')) {
      ctx.body = ctx.cookies.get('MyName');
    } else {
      ctx.body = "Cookies is none";
    }
  }
});

app.listen(3000, () => {
  console.log('server is running at port 3000');
})