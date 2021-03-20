console.log("saludos");
const http = require('http');
const requestHandler = require('./lab10');
const server = http.createServer( requestHandler ); 
server.listen(3000);