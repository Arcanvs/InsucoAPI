const {response} = require('express');
const Menu = require('../models/Menus');

const getMenus = async (req, res = response) => {
    const menus = await Menu.find();
    res.status(200).json({
        status : true,
        menus
    });
}

const newMenu = async (req, res = response) => {
    const menu = new Menu (req.body);
    try {
        const menuSave = await menu.save();
        res.status(200).json({
            status : true,
            menu : menuSave
        });
    } catch (error) {
        res.status(500).json({
            status : false,
            message : 'Error Interno'
        });
    }
}

module.exports = {
    getMenus,
    newMenu
}