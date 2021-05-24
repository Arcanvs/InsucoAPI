const { Schema, model } = require('mongoose');

const ValoresSchema = Schema({
    tipo: {
        type: String,
        required: true
    },
    datos: Schema.Types.Mixed
});

module.exports = model( 'valores', ValoresSchema );

/*
Insert Data
{
    "tipo": "Periodo",
    "datos": [
        {
            "anio": "2021",
            "vigente":true
        },
        {
            "anio": "2020",
            "vigente":false
        }
    ]
}

{
    "tipo": "Fotocopiado",
    "datos": {
        "fotocopias": "1000",
        "impresionColor":"30",
        "impresionNegro":"100"
    }
}

{
    "tipo": "horario",
    "datos": {
        "dias":[
            {
                "dia":"Lunes",
                "abrev":"Lu"
            },
            {
                "dia":"Martes",
                "abrev":"Ma"
            },
            {
                "dia":"Miercoles",
                "abrev":"Mi"
            },
            {
                "dia":"Jueves",
                "abrev":"Ju"
            },
            {
                "dia":"Viernes",
                "abrev":"Vi"
            }
        ],
        "bloques":[
            {
                "bloque":"8:00 - 9:00",
                "abrev": "1"
            },
            {
                "bloque":"9:00 - 10:00",
                "abrev": "2"
            },
            {
                "bloque":"10:00 - 11:00",
                "abrev": "3"
            },
            {
                "bloque":"11:00 - 12:00",
                "abrev": "4"
            },
            {
                "bloque":"12:00 - 13:00",
                "abrev": "5"
            },
            {
                "bloque":"13:00 - 14:00",
                "abrev": "6"
            },
            {
                "bloque":"14:00 - 15:00",
                "abrev": "7"
            },
            {
                "bloque":"15:00 - 16:00",
                "abrev": "8"
            },
            {
                "bloque":"16:00 - 17:00",
                "abrev": "9"
            },
            {
                "bloque":"17:00 - 18:00",
                "abrev": "10"
            }
        ]
    }
}

*/