
const ServidorModelo = require('./models/servidorModels')

require('dotenv').config()

let servidor = new ServidorModelo();

servidor.activarPuerto();