const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const rutaMusica = require('./routes/canciones');

app.use('/musica', rutaMusica);

app.get('/', (request, response, next) => {
    response.send('<h1>Joaquin</h1>'); 
});

app.use( (request, response, next) => {
    response.send('<h1>Error 404</h1>'); 
});

app.listen(3000);