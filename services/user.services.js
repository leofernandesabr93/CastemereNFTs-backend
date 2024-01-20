// Importa los módulos necesarios
const User = require('../models/user.model');

//Servicio para obtener todos los usuarios
const getAllusersService = async () => {
  const users = await User.find() //Usamos el metodo find para buscar en el modelo de usuarios 
  if (!users) throw new Error('No se encontraron usuarios');//En caso de no encontrar nada devolvemos un error
  return users;
}

module.exports = {
	getAllusersService
}
