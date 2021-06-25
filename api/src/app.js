import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
require('./controllers/AuthController')(app);

module.exports = app;
