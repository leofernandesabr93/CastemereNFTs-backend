// Importa los módulos necesarios
const express = require('express');
const { getAllUsers } = require('../controllers/user.controller');
const route = express();

// Ruta para obtener todos los usuarios
route.get('/', getAllUsers);

//Exportando rutas
module.exports = route;
