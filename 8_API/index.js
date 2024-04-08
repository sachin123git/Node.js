
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/9_API_Data/data.json`, 'utf-8');
const my_data = JSON.stringify(data)
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello from this side");
  } else if (req.url === "/api") { 
    res.writeHead(200 , {'Content-Type':'application/json'});
    res.end(JSON.parse(my_data));
  } else {
    res.statusCode = 404
    res.end("error 404 found"); 
  }
});

server.listen(4000, '127.0.0.1', () => {
  console.log("Server is listening at http://127.0.0.1:4000");
});
