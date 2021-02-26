const http = require('http');
const server = http.createServer((request, response) => {
    console.log("Hola mundo");
    response.setHeader('Content-Type', 'text.html');
    response.write("<h1>Hola desde el servidor</h1>");
    response.end();
});

server.listen(3000);
