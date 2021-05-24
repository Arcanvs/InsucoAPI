/*
    /api/valores
*/

const { Router } = require('express');
const router = Router();
const {
    getValores,
    newValores
} = require('../controllers/valores');

router.use( comprobarJWT );
router.get( '/', getValores );
router.post( '/', newValores );

module.exports = router;