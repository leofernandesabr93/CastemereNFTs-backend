// Importar modulos necesarios
const express = require('express');
const { createProductController, getProducts } = require('../controllers/product.controller');
const { subirImagen } = require('../middlewares/storage');
const route = express();

// Ruta para crear nuevos productos
route.post('/newProduct', subirImagen.single('image'), createProductController)

route.get('/', getProducts);

module.exports = route;
