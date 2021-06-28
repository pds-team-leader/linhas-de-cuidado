const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Admin = require('../models/Admin');
const Directory = require('../models/Directory');
const Publication = require('../models/Publication');
const Tag = require('../models/Tag');

const connection = new Sequelize(databaseConfig);

connection.sync();

Admin.init(connection);
Directory.init(connection);
Tag.init(connection);
Publication.init(connection);

Directory.associate(connection.models);
Tag.associate(connection.models);

module.exports = connection;
