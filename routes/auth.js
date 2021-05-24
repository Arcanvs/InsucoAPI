const { Router } = require('express');
const { check } = require('express-validator');
const { comprobarJWT, comprobarCampos } = require('../middlewares/validaciones');
const router = Router();
const {
    loginUsuario
} = require('../controllers/auth');

router.post(
    '/',
    [
        check('rut', 'El Rut es Obligatorio').not().isEmpty(),
        check('password', 'El Password es Obligatorio').not().isEmpty(),
        comprobarCampos
    ],
    loginUsuario
);

module.exports = router;