module.exports = {
  dialect: 'postgres',
  host: db,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};
