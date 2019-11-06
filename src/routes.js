// IMPORTS NODE
const express = require('express');

// IMPORTS MEUS
// método para lidar com as rotas
const routes = express.Router();
const UserController = require('./Controllers/UserController');
const ContentController = require('./Controllers/ContentController');

// USER CONTROLLER
routes.post('/user/create', UserController.store);
routes.post('/user/check', UserController.checkUser);

//CONTENT CONTROLLER
// routes.post('/content/create', ContentController.store);
module.exports = routes;