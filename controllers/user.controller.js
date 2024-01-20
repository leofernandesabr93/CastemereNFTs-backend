//Importando userServices
const { getAllusersService, registerUserService } = require('../services/user.services');

// Controlador para registrar un usuario nuevo
const registerUser = async (req, res) => {
  try {
    const newUser = await registerUserService(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
}
// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await getAllusersService();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error)
    res.status(500).json( error.message );
  }
};

//Exportando controladores de usuarios
module.exports = {
  getAllUsers,
  registerUser
};