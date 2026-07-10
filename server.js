const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from v2.0!\n');
}).listen(port);
console.log(`Server running on port ${port}`);