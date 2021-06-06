import express from 'express';
import DiabetesController from './controllers/DiabetesController';
import HipertensaoController from './controllers/HipertensaoController';
import PublicationsController from './controllers/PublicationsController';
import TagController from './controllers/TagController';

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

routes.post('/publications', PublicationsController.store);
routes.get('/publications', PublicationsController.indexAll);
routes.get('/publications/:id', PublicationsController.indexOne);
routes.put('/publications/:id', PublicationsController.update);
routes.delete('/publications/:id', PublicationsController.delete);

routes.post('/tag', TagController.store);
routes.get('/tag', TagController.indexAll);
routes.get('/tag/:id', TagController.indexOne);
routes.put('/tag/:id', TagController.update);
routes.delete('/tag/:id', TagController.delete);

export default routes;
