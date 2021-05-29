const {model, Schema}=require('mongoose');

const ReservaInterna= Schema ({

    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})
module.exports=model('reserva',ReservaInterna);