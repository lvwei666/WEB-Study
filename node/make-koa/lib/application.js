const Emitter = require('events');
const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }
  use() {

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
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      console.log(ctx.url, ctx.url === ctx.request.url)
      // ctx.body middle
      res.end('hello koa');
    }
    return handleRequest;
  }
}
