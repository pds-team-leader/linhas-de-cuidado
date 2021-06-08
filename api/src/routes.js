import express from 'express';
import TagController from './controllers/TagController';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));

routes.post('/tag', TagController.store);
routes.get('/tag', TagController.indexAll);
routes.get('/tag/:id', TagController.indexOne);
routes.put('/tag/:id', TagController.update);
routes.delete('/tag/:id', TagController.delete);

export default routes;
