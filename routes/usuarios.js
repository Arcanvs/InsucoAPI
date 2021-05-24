/*
    /api/usuarios
*/

const { Router } = require('express');
const router = Router();
const {
    getUsuarios,
    newUsuario,
    editUsuario,
    deleteUsuario
} = require('../controllers/usuarios');

router.use( comprobarJWT );
router.get( '/', getUsuarios );
router.post( '/', newUsuario );
router.put( '/:id', editUsuario );
router.delete( '/:id', deleteUsuario );

module.exports = router;