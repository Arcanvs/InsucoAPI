const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

comprobarJWT = ( req, res, next ) => {
    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            status: false,
            error: {
                message: 'No Existe Token'
            } 
        });
    }
    try {
        const { userId, nombre } = jwt.verify(
            token,
            process.env.SECRET_WORD
        );
        req.userId = userId;
        req.nombre = nombre;
    } catch ( error ) {
        return res.status(401).json({
            status: false,
            error: {
                message: 'Token No Valido'
            }
        });
    }
    next();
}

const comprobarCampos = ( req, res, next ) => {
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        return res.status(400).json({
            status: false,
            error: {
                errors: errors.mapped()
            }
        })
    }
    next();
}

module.exports = {
    comprobarJWT,
    comprobarCampos
}