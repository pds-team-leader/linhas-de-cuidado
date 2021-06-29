import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

require('./database');

const app = express();

const corsOptions = {
  origin: 'https://linhas-de-cuidado.vercel.app/',
  optionsSuccessStatus: 200
}

// app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use('../uploads', express.static('uploads'));
require('./controllers/AuthController')(app);

module.exports = app;
