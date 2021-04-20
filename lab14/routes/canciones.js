const express = require('express');

const path = require('path')

const router = express.Router();

const musicaController = require('../controllers/musica_controller')

const musica = [];

router.get('/agregar', musicaController.getNuevaCancion);

router.post('/agregar', musicaController.postNuevaCancion);

router.get('/', musicaController.getMusica);

module.exports = router;