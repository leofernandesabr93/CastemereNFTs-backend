//Importando productServices
const { createProductsService, getProductsService, markAsFavoriteService } = require("../services/product.services");

// controlador para crear nuevos productos
const createProductController = async (req, res) => {
  try {
    const newProduct = await createProductsService(req.body, req.file.filename);
    res.status(201).json({ newProduct });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Controlador para traer usuarios
const getProducts = async (req, res) => {
  try {
    const info = await getProductsService(req.query);
    res.status(200).json({ info });
  } catch (error) {
    res.status(500).json( error.message );
  }
};

// Controlador para marcar como favorito un producto
const markAsFavorite = async (req, res) => {
  try {
    const info = await markAsFavoriteService(req.body);
    res.status(200).json({ info });
  } catch (error) {
    res.status(500).json( error.message );
  }
};

module.exports = {
  createProductController,
  getProducts,
  markAsFavorite
};
