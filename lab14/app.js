const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

var cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(session({
    secret: 'Xhscoiuwibuviubrovibwouvrbibeiywu',
    resave: false,
    saveUninitialized: false,
}))

app.use(express.static(path.join(__dirname, 'public')));

const rutaMusica = require('./routes/canciones');
const rutaTienda = require('./routes/tienda');

app.use('/musica', rutaMusica);
app.use('/tienda', rutaTienda);

app.get('/', (request, response, next) => {
    response.render('joaquin'); 
});

app.use( (request, response, next) => {
    response.send('<h1>Error 404</h1>'); 
});

app.listen(3000);