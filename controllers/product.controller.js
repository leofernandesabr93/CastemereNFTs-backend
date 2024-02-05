//Importando productServices
const { createProductsService, getProductsService, markAsFavoriteService, deleteProductService } = require("../services/product.services");

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

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const products = await deleteProductService(productId);
    res.status(200).json({message: "producto eliminado con exito",products});
  } catch (error) {
    res.status(500).json( error.message );
  }
}

module.exports = {
  createProductController,
  getProducts,
  markAsFavorite,
  deleteProduct
};
