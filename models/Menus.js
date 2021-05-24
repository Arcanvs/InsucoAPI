const { Schema, model } = require('mongoose');

const MenusSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: [
        {
            titulo: {
                type: String
            },
            url: {
                type: String
            },
            ico: {
                type: String
            }
        }
    ]
});

module.exports = model('menus', MenusSchema);