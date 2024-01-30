// Importar modulos necesarios
const express = require('express');
const { createProductController, getProducts, markAsFavorite } = require('../controllers/product.controller');
const { subirImagen } = require('../middlewares/storage');
const route = express();

// Ruta para crear nuevos productos
route.post('/newProduct', subirImagen.single('image'), createProductController)
// Ruta para obtener todos los productos
route.get('/', getProducts);
// Ruta para marcar como favoritos
route.post('/favorite', markAsFavorite);

module.exports = route;
