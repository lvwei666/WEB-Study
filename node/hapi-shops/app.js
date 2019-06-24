const hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routesShops = require('./routes/shops');

const server = new hapi.Server();
server.connection({
  port: config.port,
  host: config.host
});
const init = async () => {
  server.route([
    ...routesShops
  ])
  await server.start();
}
init();