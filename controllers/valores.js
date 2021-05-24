const Valores = require('../models/Valores');

const getValores = async ( req, res ) => {
    const valores = await Valores.find();
    res.status(200).json({
        status : true,
        data: {
            valores
        }
    });
}

const newValores = async ( req, res ) => {
    const valores = new Valores (req.body);
    try {
        const valoresSave = await valores.save();
        res.status(200).json({
            status : true,
            data: {
                valores : valoresSave
            }
        });
    } catch (error) {
        res.status(500).json({
            status : false,
            error: {
                message : 'Error Interno'
            }
        });
    }
}

module.exports = {
    getValores,
    newValores
}