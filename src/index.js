const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.end('Hello World');
});

httpServer.listen(8080, () => console.log('Listening on PORT 8080'));
