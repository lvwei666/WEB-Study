const Emitter = require('events');
const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
const compose = require('./compose');
module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.middleware = [];
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }
  use(fn) {
    this.middleware.push(fn);
    return this;
  }
  listen(...args) {
    const server = http.createServer(this.callback())
    server.listen(...args);
  }
  createContext(req, res) {
    const context = Object.create(this.context);
    const request = 
    context.request = Object.create(this.request);
    const response = 
    context.response = Object.create(this.response);
    context.req = request.req = req;
    context.res = response.req = res;
    return context;
  }
  callback() {
    const fn = compose(this.middleware);
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      // console.log(ctx.url, ctx.url === ctx.request.url)
      // ctx.body middle
      // res.end('hello koa');
      this.handleRequest(ctx, fn);
    }
    return handleRequest;
  }
  handleRequest(ctx, fnMiddleWare) {
    const handleResponse = () => {
      return respond(ctx);
    }
    return fnMiddleWare(ctx).then()
  }
}
function respond(ctx) {
  const res = ctx.res;
  const body = ctx.body;
  res.end(body)
}