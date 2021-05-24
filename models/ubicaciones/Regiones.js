const { Schema, model } = require('mongoose');

const RegionesSchema = Schema({
    region : {
        type: String,
        required: true
    }
});

module.exports = model( 'regiones', RegionesSchema );