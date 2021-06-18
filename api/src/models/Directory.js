import Sequelize from 'sequelize';

import connection from '../database/index';

const Directory = connection.define('Directory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Diretório',
  },
  guide: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Directory;
