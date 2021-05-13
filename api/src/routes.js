const express = require('express');
const DiabetesController = require('./controllers/DiabetesController');
const HipertensaoController = require('./controllers/HipertensaoController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));

routes.post('/diabetes', DiabetesController.store); 
routes.get('/diabetes', DiabetesController.indexAll);
routes.get('/diabetes/:id', DiabetesController.indexOne);
routes.put('/diabetes/:id', DiabetesController.update);
routes.delete('/diabetes/:id', DiabetesController.delete);

routes.post('/hipertensao', HipertensaoController.store); 
routes.get('/hipertensao', HipertensaoController.indexAll);
routes.get('/hipertensao/:id', HipertensaoController.indexOne);
routes.put('/hipertensao/:id', HipertensaoController.update);
routes.delete('/hipertensao/:id', HipertensaoController.delete);

module.exports = routes;
