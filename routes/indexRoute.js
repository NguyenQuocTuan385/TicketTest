const express = require('express');
const Router = express.Router();
const controller = require('../controllers/indexController')

Router.get('/', controller.show);

module.exports = Router;