const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home.get('/lv', async(ctx) => {
  ctx.body = "home lv page"
}).get('/todo', async(ctx) => {
  ctx.body = "Home todo page"
})

let page = new Router();
page.get('/lv', async(ctx) => {
  ctx.body = "page lv page"
}).get('/todo', async(ctx) => {
  ctx.body = "page todo page"
})

// 父级路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is runing at port 3000');
})