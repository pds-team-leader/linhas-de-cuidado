const express = require('express');
const DirectoryController = require('./controllers/DirectoryController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));

routes.get('/hipertensao', (req, res) => res.json({ message: 'Guia: Hipertensão Arterial' }));
routes.post('/hipertensao', DirectoryController.store); 

module.exports = routes;
