/*
    /api/perfiles
*/

const { Router } = require('express');
const { comprobarJWT, comprobarCampos } = require('../middlewares/validaciones');
const router = Router();
const {
    getPerfiles,
    newPerfil
} = require('../controllers/perfiles');

router.use( comprobarJWT );
router.get( '/', getPerfiles );
router.post( '/', newPerfil );

module.exports = router;