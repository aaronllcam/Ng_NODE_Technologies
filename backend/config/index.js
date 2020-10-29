if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();  // ESTO HACE QUE TODAS LAS VARIABLES DE ENTORNO DEFINIDAS EN EL ARCHIVO .ENV ESTEN DISPONIBLES PARA USAR EN EL
     //ENTORNO DE NODEJS
}

module.exports = {
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI
}