require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env === 'production'
    ? process.env.PG_URL
    : process.env.PG_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: 'linhas-de-cuidado-db',
  define: {
    timestamps: true,
    underscored: true,
  },
};
