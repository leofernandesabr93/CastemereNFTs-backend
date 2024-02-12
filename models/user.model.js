const { Schema, model } = require("mongoose");

//Creamos el schema
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  favorite: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
  ],
});
//Importamos y guardamos el modelo en nuestra base de datos como "users"
module.exports = model("users", userSchema); 
