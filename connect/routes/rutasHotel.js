 const { Router } = require('express');

//importar traer los controladores
const { buscarReserva } = require('../controllers/controladorHotel')

const { agregarReservacion } = require('../controllers/controladorHotel')

const { editarReservacion } = require('../controllers/controladorHotel')

const { eliminarReservacion } = require('../controllers/controladorHotel')

//personalizo mis rutas 
const rutas = Router();
//listado de rutas
rutas.get('/buscarReserva', buscarReserva);
rutas.post('/agregarReservacion/nuevo', agregarReservacion);
rutas.put('/editarReservacion/actualizar/:id', editarReservacion);
rutas.delete('/eliminarReservacion/eliminar/:id', eliminarReservacion);


//exporto la rutas
module.exports = rutas


