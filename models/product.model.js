const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,  //La imagen va a ser de tipo string ya que va a guardar una ruta
    required: true
  },
  destacado: {
    type: Boolean,
    default: false
  }
});

module.exports = model("products", productSchema);
