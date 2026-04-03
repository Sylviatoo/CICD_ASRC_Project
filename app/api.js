const http = require('http');

const server = http.createServer((req, res)=> {
    res.end("My API is working");
});

server.listen(3000);
