module.exports = {
  dialect: 'postgres',
  host: process.env === 'development' ? 'db' : process.env.PG_HOST,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};
