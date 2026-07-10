const http = require('http');
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200);
<<<<<<< HEAD
  res.end('Hello from v1.8!\n');
=======
  res.end('Hello from v1.6!\n');
>>>>>>> bb0ff727e85e6339500100a039962bf402f9f086
}).listen(port);

console.log(`Server running on port ${port}`);
