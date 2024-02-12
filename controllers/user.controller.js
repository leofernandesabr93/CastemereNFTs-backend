//Importando userServices
const { registerUserService, loginUserService, deleteProductService, deleteCartService } = require('../services/user.services');

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

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.params.userId;
    const products = await deleteProductService( userId, productId );
    res.status(200).json({products});
  } catch (error) {
    res.status(500).json( error.message );
  }
}

const deleteCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.params.userId;
    const products = await deleteCartService( userId, productId );
    res.status(200).json({products});
  } catch (error) {
    res.status(500).json( error.message );
  }
}

//Exportando controladores de usuarios
module.exports = {
  registerUser,
  loginUser,
  deleteProduct,
  deleteCart
};