const cancion = require('../models/canciones_model');

exports.getNuevaCancion = (request, response, next) =>{
    response.render('agregar', {
        titulo : 'Agregar cancion'
    });
};

exports.postNuevaCancion = (request, response, next) =>{
    console.log(request.body.nombre);
    const nuevacancion = new cancion(request.body.nombre);
    nuevacancion.save();
    response.redirect('/musica');
};

exports.getMusica = (request, response, next) =>{
    const musica = cancion.fetchAll();
    response.render('musica', {
        titulo: 'Canciones',
        canciones: musica
    }); 
};