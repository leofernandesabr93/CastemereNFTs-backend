// Importa los módulos necesarios
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

//Registrar Usuarios
const registerUserService = async ({ userName, email, password, admin }) => {
	const emailExist = await User.findOne({ email }) //Verificamos si el email que va a ser registrado ya existe, en caso de no existir devolvemos un error
	if (emailExist) throw new Error("El correo electrónico ingresado ya está en uso, por favor ingrese otro.");

	const saltRounds = 10; 	//Configuramos la cantidad de saltRounds de nuestro password, esto indica el nivel de seguridad, por convencion es 10, ya que si es mayor va a tardar mucho tiempo en descifrarse

	const hashedPassword = await bcrypt.hash(password, saltRounds);

	const newUser = await User.create({ userName, email, password: hashedPassword, admin });
	if (!newUser) throw new Error('Hubo un error al crear el nuevo usuario');
	return newUser;
};

//Servicio para obtener todos los usuarios
const getAllusersService = async () => {
  const users = await User.find() //Usamos el metodo find para buscar en el modelo de usuarios 
  if (!users) throw new Error('No se encontraron usuarios');//En caso de no encontrar nada devolvemos un error
  return users;
}

module.exports = {
	getAllusersService,
  registerUserService
}
