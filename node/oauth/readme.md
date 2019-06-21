oauth 用于第三方登录

- 后端开发很简易，new Koa()就好;
  其他语言好复杂
- 显示首页
  暴露资源
  1. .html .css .js
    静态资源
    /public 公开 不需要登录
    koa-static 静态资源的加持
    http://localhost:8080/{path}
  2. 动态资源，async Model(数据库)
    Controller(控制器) View(视图)
    URL Universal Resourse Location
    url -> 查找相应的控制器(路由) -> Model -> View
  3. koa的思维
    极简
    app.use(callback);
    callback 中间件
    请求(ctx.request)  中间件   response(响应)
  4. ctx 上下文环境
    ctx.request, ctx.response
    async 支持  数据库查询  远程调用java服务
    客户端发起请求(用户代理浏览器) -> node
    (koa 8080) -> route(中间件 相应的资源，显示页面) -> java远程处理(rpc) -> database
    koa koa-static koa-route

- oauth
  第三方登录
  A  Github/微信/QQ  用户
  A  要拿用户的信息，在第三方有，授权
  第三方网站就通过  下发一个令牌环 token A
  A  每次带上这个令牌去第三方网站上取数据
  1. 到第三方网站去登记一下
  2. 如果用户同意，第三方网站会通过callback
  访问你的call地址 /oauth/redirect
    code  换一个token