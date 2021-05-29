const { request, response } =require('express');

const servidorModels= require('../models/servidorModels')

async function buscarReserva(peticion = request, respuesta = response) {
    let buscarReserva=await servidorModels.find();
    respuesta.json({

        estado: true,
        mensaje: buscarReserva
    });

}

async function agregarReservacion(peticion = request, respuesta = response) {
    
    let datosReserva=peticion.body;
    let reserva=new servidorModels(datosReserva);
    await reserva.save();

    respuesta.json({
        estado: true,
        mensaje: 'Agregar Reservacion correctamente'
    });

}

async function editarReservacion(peticion = request, respuesta = response) {
    let id=peticion.params.id;
    let datosReserva=peticion.body;

    await servidorModels.findByIdAndUpdate(id,datosReserva);
    respuesta.json({
        estado: true,
        mensaje: 'Se actualizo la  reservacion'
    });

}

function eliminarReservacion(peticion = request, respuesta = response) {

    let id=peticion.params.id;
    await servidorModels.findByIdAndDelete(id);

    respuesta.json({
        estado: true,
        mensaje: 'Eliminada la reservacion'
    });

}

//exporto todas las funciones hacia el archivo rutas
module.exports = {
    buscarReserva,
    agregarReservacion,
    editarReservacion,
    eliminarReservacion
}