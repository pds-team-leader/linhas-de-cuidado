import express from 'express';
import TagController from './controllers/TagController';
import PublicationsController from './controllers/PublicationsController';
import DiabetesController from './controllers/DiabetesController';
import HipertensaoController from './controllers/HipertensaoController';
import AdminController from './controllers/AdminController';

const routes = express.Router();
const authMiddleware = require('./config/authMiddleware');

routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));
routes.get('/login', (req, res) => res.json({ message: 'login page' }));

// rotas protegidas
routes.get('/administrador', authMiddleware, (req, res) => res.json({ message: 'admin page' }));

routes.post('/admin', authMiddleware, AdminController.store);
routes.get('/admin', AdminController.indexAll);
routes.get('/admin/:id', AdminController.indexOne);
routes.put('/admin/:id', authMiddleware, AdminController.update);
routes.delete('/admin/:id', authMiddleware, AdminController.delete);

routes.post('/diabetes', authMiddleware, DiabetesController.store);
routes.get('/diabetes', DiabetesController.indexAll);
routes.get('/diabetes/:id', DiabetesController.indexOne);
routes.put('/diabetes/:id', authMiddleware, DiabetesController.update);
routes.delete('/diabetes/:id', authMiddleware, DiabetesController.delete);

routes.post('/publications', authMiddleware, PublicationsController.store);
routes.get('/publications', PublicationsController.indexAll);
routes.get('/publications/dir/:id', PublicationsController.indexAllFromDir);
routes.get('/publications/:id', PublicationsController.indexOne);
routes.put('/publications/:id', authMiddleware, PublicationsController.update);
routes.delete('/publications/:id', authMiddleware, PublicationsController.delete);

routes.post('/hipertensao', authMiddleware, HipertensaoController.store);
routes.get('/hipertensao', HipertensaoController.indexAll);
routes.get('/hipertensao/:id', HipertensaoController.indexOne);
routes.put('/hipertensao/:id', authMiddleware, HipertensaoController.update);
routes.delete('/hipertensao/:id', authMiddleware, HipertensaoController.delete);

routes.post('/tag', authMiddleware, TagController.store);
routes.get('/tag', TagController.indexAll);
routes.get('/tag/:id', TagController.indexOne);
routes.put('/tag/:id', authMiddleware, TagController.update);
routes.delete('/tag/:id', authMiddleware, TagController.delete);

export default routes;
