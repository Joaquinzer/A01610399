const express = require('express');

const path = require('path')

const router = express.Router();

router.get('/login', (request, response, next) => {
    response.render('login', {
        titulo: 'Login'
    }); 
});

router.post('/login', (request, response, next) => {
    response.redirect('/tienda'); 
});

router.get('/', (request, response, next) => {
    response.render('tienda', {
        titulo: 'La tienda de joako',
    }); 
});

module.exports = router;