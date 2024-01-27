//Importando userServices
const { registerUserService, loginUserService } = require('../services/user.services');

// Controlador para registrar un usuario nuevo
const registerUser = async (req, res) => {
  try {
    await registerUserService(req.body);
    res.status(201).json({ message:'Usuario registrado con exito' });
  } catch (error) {
    res.status(500).json(error.message);
  }
}
// Controlador para loguear un usuario
const loginUser = async (req, res) => {
  try {
    const loguedUser = await loginUserService(req.body)
    res.status(201).json({ loguedUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//Exportando controladores de usuarios
module.exports = {
  registerUser,
  loginUser,
};