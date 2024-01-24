//Importando productServices
const { createProductsService } = require("../services/product.services");

// controlador para crear nuevos productos
const createProductController = async (req, res) => {
  try {
    const newProduct = await createProductsService(req.body, req.file.filename);
    res.status(201).json({ newProduct });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createProductController,
};
