// Importa los módulos necesarios
const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.controller');
const route = express();

// Ruta para registrar un usuario
route.post('/register', registerUser)
// Ruta para registrar un usuario
route.post('/login', loginUser)

//Exportando rutas
module.exports = route;
