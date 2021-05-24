const Usuario = require('../models/Usuarios');
const Perfiles = require('../models/Perfiles'); // Al usar populate Add Model
const Menus = require('../models/Menus');
const Comunas = require('../models/ubicaciones/Comunas');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jsonwebtoken');

const getUsuarios = async ( req, res ) => {
    const popPerfil = {
        path: '_perfilId',
        populate: {
            path: 'menu', 
            model: 'menus'
        }
    }
    const popComuna = {
        path: '_comunaId', 
        select: 'comuna', 
        model: 'comunas'
    }
    const usuarios = await Usuario.find().populate( popPerfil ).populate( popComuna );
    res.status(200).json({
        status : true,
        data: {
            usuarios
        }
    });
}

const newUsuario = async ( req, res ) => {
    const { rut, password } = req.body;
    try {
        // Validar si existe usuario
        usuario = new Usuario( req.body );
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
        await usuario.save();
        res.status(201).json({
            status: true,
            data: {
                usuario
            }
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            error: {
                message: "Error con el Servidor"
            }
        });
    }
}

const editUsuario = async ( req, res ) => {
    const _userId = req.params.id;
    try {
        const usuario = await Usuario.findById(_userId);
        if( !usuario ){
            return res.status(404).json({
                status: false,
                data: {
                    message: "El usuario no existe por ese ID"
                }
            })
        }
        
        if( req.body.password ){
            const salt = bcrypt.genSaltSync();
            req.body.password = bcrypt.hashSync( req.body.password, salt );
        }
        const editUsuario = {
            ...req.body,
            _id: _userId
        }
        
        const usuarioActualizado = await Usuario.findByIdAndUpdate(_userId, editUsuario, {new: true});
        res.status(200).json({
            status: true,
            data: {
                message: "Usuario Actualizado Correctamente",
                usuario: usuarioActualizado
            }
        });
    } catch (error) {
        res.status(500).json({
            status: true,
            data: {
                _userId
            }
        })
    }
}

const deleteUsuario = async ( req, res ) => {
    const _userId = req.params.id;
    try {
        await Usuario.findByIdAndDelete(_userId);
        res.status(200).json({
            status: true,
            message: "Usuario Eliminado Correctamente."
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            error: {
                message: "Error del Servidor"
            }
        });
    }
}

module.exports = {
    getUsuarios,
    newUsuario,
    editUsuario,
    deleteUsuario
}