//Importando userServices
const { getAllusersService } = require('../services/user.services');

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
};