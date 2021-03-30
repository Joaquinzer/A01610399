const musica = [];
const filesystem = require('fs');
const requestHandler = (request, response) => {
    console.log("Servidor iniciado");
    console.log(request.url);
    if(request.url === "/"){
        response.setHeader('Content-Type', 'text.html');
        response.write("<head><title>Joaquin</title><h1>Joaquin Zermeno</h1><h4>A01610399</h4><h4>A01610399@itesm.mx</h4></head> <hr/><body><h3>Hobbys y Gustos</h3><p><strong>La musica</strong> es uno de mis hobbys principales,tanto escucharla como estudiar acerca de ella. <br/> <br/><strong>El alpinismo</strong> es otro de mis hobbys, siempre meha gustado explorar y caminar. <br/> <br/>Mi banda favorita es radiohead <br/> <br/>Mi deporte favorito son las carreras <br/></p></body>");
        response.end();
    } else if (request.url === "/agregarMusica" && request.method === "GET"){
        response.setHeader('Content-Type', 'text.html');
        response.write("<html>");
        response.write("<head><title>Agregar musica</title></head>");
        response.write("<body><h1>Ingresa el nombre de una cancion que te guste</h1>");
        response.write('<form action="agregarMusica" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar cancion"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    }else if (request.url === "/agregarMusica" && request.method === "POST"){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato)
            datos.push(dato);
        });
        request.on('end', () => {
            const datoString = Buffer.concat(datos).toString();
            console.log(datoString);
            const nueva_cancion = datoString.split('=')[1];
            musica.push(nueva_cancion);
            console.log(nueva_cancion);
            response.statusCode = 302;
            response.setHeader('Location', '/musica');
            let canstring = "";
            for(let can of musica){
                canstring += can + " "; 
            }
            filesystem.writeFileSync('canciones.txt', canstring);
            return response.end();
        });
    }else if (request.url === "/musica"){
        response.setHeader('Content-Type', 'text.html');
        response.write("<html>");
        response.write("<head><title>Musica</title></head>");
        response.write("<body><h1>Lista de canciones</h1>");
        if (musica.length == 0) {
            response.write("<h2>No hay canciones que mostrar</h2>");
            } else {
                response.write("<ul>");
                for (let cancion of musica) {
                    response.write("<li>");
                    response.write(cancion);
                    response.write("</li>");
                }
                response.write("</ul>");  
            }
        response.write('<button><a href="/agregarMusica">Agregar mas canciones</a></button>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text.html');
        response.write("<html>");
        response.write("<head><title>404</title></head>");
        response.write("<body><h1>Pagina no encontrada</h1></body>");
        response.write("</html>");
        response.end();
    }
}
module.exports = requestHandler;