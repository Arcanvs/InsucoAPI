const { Schema, model } = require('mongoose');

const PerfilesSchema = Schema({
    perfil: {
        type: String,
        required: true
    },
    menu:[{ type: Schema.ObjectId, ref:'menus' }]    
});

module.exports = model( 'perfiles', PerfilesSchema );