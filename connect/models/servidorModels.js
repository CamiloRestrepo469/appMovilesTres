const express = require('express');

const rutas = require('../routes/rutasHotel')

const { conectarBD } = require('../database/conexion')

class ServidorModelo{

    constructor() {
        this.app = express();
        this.BaseDatos();
        this.crearMiddlewares();
        this.rutasApi();
        
    }

    activarPuerto() {
        this.app.listen(process.env.PORT,
            function() {
                console.log(`estoy conectado al puerto ${process.env.PORT}`);
            })
    }

    rutasApi() {
        this.app.use('/', rutas);
    }
    BaseDatos(){
        conectarBD();
    }
    crearMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true })); //x www
        

    }



}
module.exports = ServidorModelo;