// Importa los módulos necesarios
const express = require('express');
const { registerUser, loginUser, deleteProduct, deleteCart } = require('../controllers/user.controller');
const route = express();

// Ruta para registrar un usuario
route.post('/register', registerUser)
// Ruta para registrar un usuario
route.post('/login', loginUser)

// Eliminar Favorito
route.delete('/deleteFavorite/:userId/:productId', deleteProduct);
// Eliminar carrito
route.delete('/deleteCart/:userId/:productId', deleteCart);

//Exportando rutas
module.exports = route;
