import express from 'express';
import TagController from './controllers/TagController';
import PublicationsController from './controllers/PublicationsController';
import DiabetesController from './controllers/DiabetesController';
import HipertensaoController from './controllers/HipertensaoController';

const DiabetesController = require('./controllers/DiabetesController');
const HipertensaoController = require('./controllers/HipertensaoController');
const AdminController = require('./controllers/AdminController');

const routes = express.Router();
const authMiddleware = require('./config/authMiddleware');


routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));
routes.get('/login', (req, res) => res.json({message: 'login page'}));

// rotas protegidas
routes.get('/administrador', authMiddleware,(req, res) => res.json({message: 'admin page'}));

routes.post('/admin', authMiddleware,AdminController.store); 
routes.get('/admin', authMiddleware, AdminController.indexAll);
routes.get('/admin/:id', authMiddleware, AdminController.indexOne);
routes.put('/admin/:id', authMiddleware, AdminController.update);
routes.delete('/admin/:id', authMiddleware, AdminController.delete);

routes.post('/diabetes', authMiddleware, DiabetesController.store); 
routes.get('/diabetes', authMiddleware, DiabetesController.indexAll);
routes.get('/diabetes/:id', authMiddleware, DiabetesController.indexOne);
routes.put('/diabetes/:id', authMiddleware, DiabetesController.update);
routes.delete('/diabetes/:id', authMiddleware, DiabetesController.delete);

routes.get('/', (req, res) => res.json({ message: 'Sorry, Mario! Your home page is another castle' }));
routes.post('/publications', PublicationsController.store);
routes.get('/publications', PublicationsController.indexAll);
routes.get('/publications/dir/:id', PublicationsController.indexAllFromDir);
routes.get('/publications/:id', PublicationsController.indexOne);
routes.put('/publications/:id', PublicationsController.update);
routes.delete('/publications/:id', PublicationsController.delete);

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

routes.post('/tag', TagController.store);
routes.get('/tag', TagController.indexAll);
routes.get('/tag/:id', TagController.indexOne);
routes.put('/tag/:id', TagController.update);
routes.delete('/tag/:id', TagController.delete);

export default routes;
