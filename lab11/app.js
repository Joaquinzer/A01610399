console.log("Hola");
console.log("gente");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutaMusica = require('./routes/canciones');

app.use('/musica', rutaMusica);

app.get('/', (request, response, next) => {
    response.send('<h1>Joaquin</h1>'); 
});

app.use( (request, response, next) => {
    response.send('<h1>Error 404</h1>'); 
});



app.listen(3000);