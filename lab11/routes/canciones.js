const express = require('express');

const router = express.Router();

const musica = [];

router.get('/agregar', (request, response, next) => {
    response.send('<h1>Ingresa el nombre de una cancion que te guste</h1><form action="agregar" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar cancion"></form>'); 
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body.nombre);
    musica.push(request.body.nombre);
    response.redirect('/musica'); 
});

router.get('/', (request, response, next) => {
    let html = "<h1>Canciones</h1><ul>";
    for(let cancion of musica){
        html = html + '<li>' + cancion + '</li>';
    }
    html = html + '</ul><button><a href="/musica/agregar">Agregar mas canciones</a></button>'
    response.send(html); 
});

module.exports = router;