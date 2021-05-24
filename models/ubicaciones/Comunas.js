const { Schema, model } = require('mongoose');

const ComunasSchema = Schema({
    provincia_id: {
        type: Schema.ObjectId, ref:'provincias'
    },
    comuna : {
        type: String,
        required: true
    }
});

module.exports = model( 'comunas', ComunasSchema );