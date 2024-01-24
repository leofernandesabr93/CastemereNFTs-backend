// Importa los módulos necesarios
const express = require('express');
const { getAllUsers, registerUser } = require('../controllers/user.controller');
const route = express();

// Ruta para obtener todos los usuarios
route.get('/', getAllUsers);
// Ruta para registrar un usuario
route.post('/register', registerUser)

//Exportando rutas
module.exports = route;
