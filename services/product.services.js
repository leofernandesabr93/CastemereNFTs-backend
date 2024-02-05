// Importa los módulos necesarios
const Product = require('../models/product.model');
const User = require('../models/user.model');

// Servicio para crear nuevos productos
const createProductsService = async ({ name, price }, filename) => {
  // Crea un nuevo objeto Product con los datos proporcionados
  const newProduct = await Product.create({ name, price, image:'/uploads/'+filename  });
  // Verificar si la creación del producto fue exitosa
	if (!newProduct) throw new Error('Hubo un error al crear el nuevo Product');
	return newProduct;
}

const getProductsService = async ({ name, page, _id }) => {
  // Se convierte el número de página a un entero, o se establece en 1 si no se proporciona ningún número de página.
  const pagination = parseInt(page) || 1;
  const perPage = 20; // Número de productos por página

  let query = {}; // Objeto para almacenar los filtros de búsqueda
  // Si se proporciona un nombre, se crea una expresión regular insensible a mayúsculas y minúsculas para buscar productos que coincidan
  if (_id) {
    query._id = _id
  }
  if (name) {
    query.name = { $regex: new RegExp(name, 'i') };
  }
  // Se cuenta el número total de productos que coinciden con la consulta
  const totalProducts = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalProducts / perPage); // Se calcula el número total de páginas necesarias

  // Se buscan los productos en la base de datos, se omiten los productos de las paginas anteriores y se limita la cantidad de productos por página
  const products = await Product.find(query)
    .skip((pagination - 1) * perPage)
    .limit(perPage);
  // Si no se encuentran productos, se lanza un error
  if (products.length === 0) {
    throw new Error("No se encontraron productos");
  }

  return {
    products,
    totalPages
  };
};

// Servicio para marcar como favoritos un producto
const markAsFavoriteService = async ({userId, productId}) => {
  // Comprobamos si el id del usuario y del producto es correcto
  const user =  await User.findById(userId)
  if (!user) throw new Error("Usuario no existente");
  const product =  await Product.findById(productId)
  if (!product) throw new Error("Producto no existente");

  user.favorite.push(product)
  await user.save()

  return {
    user
  };
}

//Eliminar usuario
const deleteProductService = async (productId) => {
  const productRemoved = await Product.findByIdAndDelete(productId)
  if(!productRemoved) throw new Error('no se pudo eliminar el producto')
  return productRemoved;
}

module.exports = {
  createProductsService,
  getProductsService,
  markAsFavoriteService,
  deleteProductService
}