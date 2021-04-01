const express = require('express');

const path = require('path')

const router = express.Router();

const tiendaController = require('../controllers/tienda_controller')

router.get('/login', tiendaController.getLogin);

router.post('/login', tiendaController.postLogin); 

router.get('/', tiendaController.getTienda);

module.exports = router;