import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
require('./controllers/AuthController')(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
  });
} 

export default app;
