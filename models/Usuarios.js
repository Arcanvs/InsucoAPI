const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    rut: {
        type: String,
        required: true,
        unique: true        
    },
    password: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    direccion: {
        type: String
    },
    _comunaId: {
        type: Schema.ObjectId, ref:'comunas'
    },
    _perfilId: {
        type: Schema.ObjectId, ref:'perfiles'
    }    
});

module.exports = model( 'usuarios', UsuariosSchema );