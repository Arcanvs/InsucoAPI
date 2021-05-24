const Usuario = require('../models/Usuarios');
const { generarJWT } = require('../helpers/jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginUsuario = async (req, res) => {
    const { rut, password } = req.body;
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

    try {
        const usuario = await Usuario.findOne({ rut: rut }).populate( popPerfil ).populate( popComuna );
        console.log(usuario);
        if( !usuario ){
            return res.status(400).json({
                status: false,
                error:{
                    message: 'No Existe el Usuario'
                }                
            });
        }
        // Validar Password
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if( !validPassword ){
            return res.status(400).json({
                status: false,
                error: {
                    message: 'Password Incorrecto'
                }
            });
        }
        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.nombres );
        res.json({
            status: true,
            data: {
                userId: usuario.id,
                nombre: usuario.nombres.split(' ')[0],
                menu: usuario._perfilId.menu,
                comuna: usuario._comunaId.comuna,
                perfil: usuario._perfilId.perfil,
                token
            }
        });
    } catch ( error ) {
        res.status(500).json({
            status: false,
            error: {
                message: 'Problemas con el servidor'
            }
        });
    }
}

module.exports = {
    loginUsuario
}