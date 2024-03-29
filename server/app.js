// Importa los módulos necesarios
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connection } = require('../db/connection');
const cors = require('cors')
//Importando rutas
const userRoutes = require('../routes/user.routes');
const productRoutes = require('../routes/product.routes')


// Middlewares
dotenv.config(); //Nos permite trabajar con las variables de entorno
const app = express(); //Instancia de express
app.use(express.json()); //Este middleware permite a la aplicación interpretar los datos del cuerpo de las solicitudes con formato JSON
app.use(morgan('dev')); //registra información sobre cada solicitud que llega al servidor y la muestra en la consola
app.use(cors());

const port = process.env.PORT; //importando variable de entorno

// Inicia el servidor de Express y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`)
});

//definiendo rutas 
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use(express.static('public'))

// Inicia la conexión a la base de datos
connection();
