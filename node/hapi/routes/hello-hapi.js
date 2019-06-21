module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello hapi');
    },
    config: {
      // 登录？
      // swagger API文档
      tags: ['api', 'tests'],
      description: '测试 hello-api'
    }
  }
]