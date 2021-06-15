import express from 'express';

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

routes.post('/hipertensao', authMiddleware, HipertensaoController.store); 
routes.get('/hipertensao', authMiddleware, HipertensaoController.indexAll);
routes.get('/hipertensao/:id', authMiddleware, HipertensaoController.indexOne);
routes.put('/hipertensao/:id', authMiddleware, HipertensaoController.update);
routes.delete('/hipertensao/:id', authMiddleware, HipertensaoController.delete);

export default routes;
