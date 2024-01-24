//Importamos multer
const multer = require('multer');

// Configuramos el almacenamiento de los archivos utilizando diskStorage de Multer
const save = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, './uploads') //indicamos en que directorio vamos a guardar la img
  },
  // Configuramos el nombre del archivo que se guardará
  filename: (req,file,cb) => { //incicamos el nombre de la extencion de ese archivo
    if( file !== null){  
      const ext = file.originalname.split('.').pop() 
      cb(null,Date.now()+"."+ext)
    }
  }
})

// Configuramos una función de filtrado para aceptar solo ciertos tipos de archivos (jpg, jpeg, png)
const filter = (req,file,cb) => {
  if (file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

// Creamos un middleware de Multer con la configuración de almacenamiento y filtrado
const subirImagen = multer({storage: save, fileFilter: filter})

module.exports = {
  subirImagen
}