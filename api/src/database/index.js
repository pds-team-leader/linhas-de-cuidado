const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const connection = new Sequelize(databaseConfig);

connection.sync();

module.exports = connection;
