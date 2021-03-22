const express = require('express');

const path = require('path')

const router = express.Router();

const musica = [];

router.get('/agregar', (request, response, next) => {
    response.send('<form action="agregar" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar cancion'); 
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body.nombre);
    musica.push(request.body.nombre);
    response.send('<h1>Cancion guardada</h1>'); 
});

router.get('/', (request, response, next) => {
    let html = "<h1>Canciones</h1><ul>";
    for(let cancion of musica){
        html = html + '<li>' + cancion + '</li>';
    }
    html = html + '</ul>'
    response.send(html); 
});

module.exports = router;