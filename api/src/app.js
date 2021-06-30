import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

require('./database');

const app = express();

app.use(cors({"Access-Control-Allow-Origin": 'https://linhas-de-cuidado.vercel.app/'}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use('../uploads', express.static('uploads'));
require('./controllers/AuthController')(app);

module.exports = app;
