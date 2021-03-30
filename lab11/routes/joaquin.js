const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('<h1>Joaquin Zermeno</h1><h4>A01610399</h4><h4>A01610399@itesm.mx</h4></head> <hr/><body><h3>Hobbys y Gustos</h3><p><strong>La musica</strong> es uno de mis hobbys principales,tanto escucharla como estudiar acerca de ella. <br/> <br/><strong>El alpinismo</strong> es otro de mis hobbys, siempre meha gustado explorar y caminar. <br/> <br/>Mi banda favorita es radiohead <br/> <br/>Mi deporte favorito son las carreras <br/></p></body>')
});

router.get('/preguntas', (request, response, next) =>{
    response.send('<h1>Dsecribe el package.json</h1><div>El package json incluye todos los paquetes usados para la aplicacion facilitando su descarga y el inicio de la aplicacion</div>')
});

module.exports = router;