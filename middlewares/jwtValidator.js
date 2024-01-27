//Importamos modulos necesarios
const jwt = require("jsonwebtoken");

const jwtValidator = async (req, res, next) => {
  //Verificamos si nuestro token existe
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "El token es invalido" });
  }
  //Separamos el token en dos constantes y verificamos que sean correctas
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "El token es invalido" });
  }
  //Importamos la variable de entorno
  const secretKey = process.env.SECRET_KEY;
  //Utilizamos el metodo "verify" para verificar si nuestro token es valido y no fue modificado
  jwt.verify(token, secretKey, (error) => {
    if (error) {
      return res.status(401).json({ message: "El token es invalido", error });
    }
    next();
  });
};

module.exports = {
  jwtValidator,
};
