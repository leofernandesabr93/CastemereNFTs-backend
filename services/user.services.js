// Importa los módulos necesarios
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

//Loguear Usuarios
const loginUserService = async ({ email, password}) => {
	//Definimos una variable auxiliar
  let userFounded;
	//Importamos variable de entorno
  const secretKey = process.env.SECRET_KEY;
	//Verificamos si el email ingresado existe y en caso de que si buscamos en nuestra base de datos
  if (email) {
    userFounded = await User.findOne({ email }).lean()
  }
	//En caso de que el email no exista devolvemos un error
  if (!userFounded) throw new Error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
	//Comparamos el password ingresado con el password del usuario encontrado
  const passwordMatch = await bcrypt.compare(password, userFounded.password);
	//En caso de no coincidir devolvemos un error
  if (!passwordMatch) throw new Error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
  // Eliminamos la propiedad 'password' del objeto 'userFounded' ya que no es buena practica devolverlo
  delete userFounded.password;

  const payload = {
    userFounded,
  }
  const token = await jwt.sign(payload, secretKey, {
    expiresIn: '10h'
  });

  return { token, userFounded }
};


module.exports = {
  registerUserService,
	loginUserService
}
