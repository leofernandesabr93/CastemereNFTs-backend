// Importa los módulos necesarios
const express = require('express');
const { getAllUsers, registerUser, loginUser } = require('../controllers/user.controller');
const { jwtValidator } = require('../middlewares/jwtValidator');
const route = express();

// Ruta para registrar un usuario
route.post('/register', registerUser)
// Ruta para registrar un usuario
route.post('/login', loginUser)
// Ruta para obtener todos los usuarios
route.get('/', jwtValidator, getAllUsers);

//Exportando rutas
module.exports = route;
