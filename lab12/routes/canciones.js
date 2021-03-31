const express = require('express');

const path = require('path')

const router = express.Router();

const musica = [];

router.get('/agregar', (request, response, next) => {
    response.render('agregar', {
        titulo: 'Agregar cancion'
    }); 
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body.nombre);
    musica.push(request.body.nombre);
    response.redirect('/musica'); 
});

router.get('/', (request, response, next) => {
    response.render('musica', {
        titulo: 'Canciones',
        canciones: musica
    }); 
});

module.exports = router;