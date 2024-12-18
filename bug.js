const http = require('http');

const server = http.createServer((req, res) => {
  // The following line is missing a call to `res.end()`
  res.write('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});