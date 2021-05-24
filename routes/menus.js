/*
    /api/menus
*/

const { Router } = require('express');
const router = Router();
const {
    getMenus,
    newMenu
} = require('../controllers/menus');

router.use( comprobarJWT );
router.get( '/', getMenus );
router.post( '/', newMenu );

module.exports = router;