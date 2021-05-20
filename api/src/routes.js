import express from 'express';
import PublicationsController from './controllers/PublicationsController';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));

routes.get('/publications', PublicationsController.indexAll);
routes.get('/publications', PublicationsController.indexAllFromDirectory);
routes.get('/publications/:id', PublicationsController.indexOne);
routes.post('/publications', PublicationsController.store);
routes.post('/publications/:id', PublicationsController.update);
routes.delete('/publications/:id', PublicationsController.delete);

export default routes;
