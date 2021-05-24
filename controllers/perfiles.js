const Perfil = require('../models/Perfiles');

const getPerfiles = async ( req, res ) => {
    const perfiles = await Perfil.find();
    res.status(200).json({
        status : true,
        data: {
            perfiles
        }
    });
}

const newPerfil = async ( req, res ) => {
    const perfil = new Perfil ( req.body );
    try {
        const perfilSave = await perfil.save();
        res.status(200).json({
            status : true,
            data: {
                perfil : perfilSave
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
    getPerfiles,
    newPerfil
}