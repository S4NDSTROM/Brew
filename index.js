const serverPort = 8000;
const http = require('http');

const app = require('./server/app');

const server = http.createServer(app);

server.listen(serverPort, () =>
  console.debug(`Server listening on port: ${serverPort}`),
);

module.exports = server;
