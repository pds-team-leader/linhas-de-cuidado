const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

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

module.exports = app;