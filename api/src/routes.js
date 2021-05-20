import express from 'express';
import PublicationsController from './controllers/PublicationsController';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));

routes.post('/publications', PublicationsController.store);
routes.get('/publications', PublicationsController.indexAll);
routes.get('/publications/:id', PublicationsController.indexOne);
routes.put('/publications/:id', PublicationsController.update);
routes.delete('/publications/:id', PublicationsController.delete);

export default routes;
