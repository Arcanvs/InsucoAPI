const { Schema, model } = require('mongoose');

const ProvinciasSchema = Schema({
    region_id: {
        type: Schema.ObjectId, ref:'regiones'
    },
    provincia : {
        type: String,
        required: true
    }
});

module.exports = model( 'provincias', ProvinciasSchema );