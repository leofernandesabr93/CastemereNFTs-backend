// Importa los módulos necesarios
const Product = require('../models/product.model');

// Servicio para crear nuevos productos
const createProductsService = async ({ name, price }, filename) => {
  // Crea un nuevo objeto Product con los datos proporcionados
  const newProduct = await Product.create({ name, price, image:'/uploads'+filename  });
  // Verificar si la creación del producto fue exitosa
	if (!newProduct) throw new Error('Hubo un error al crear el nuevo Product');
	return newProduct;
}

module.exports = {
  createProductsService
}