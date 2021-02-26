const http = require('http');
const server = http.createServer((request, response) => {
    console.log("Hola mundo");
    response.setHeader('Content-Type', 'text.html');
    response.write("<head><title>Joaquin</title><h1>Joaquin Zermeno</h1><h4>A01610399</h4><h4>A01610399@itesm.mx</h4></head> <hr/><body><h3>Hobbys y Gustos</h3><p><strong>La musica</strong> es uno de mis hobbys principales,tanto escucharla como estudiar acerca de ella. <br/> <br/><strong>El alpinismo</strong> es otro de mis hobbys, siempre meha gustado explorar y caminar. <br/> <br/>Mi banda favorita es radiohead <br/> <br/>Mi deporte favorito son las carreras <br/></p></body>");
    response.end();
});

server.listen(3000);