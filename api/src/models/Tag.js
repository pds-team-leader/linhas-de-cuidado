import Sequelize from 'sequelize';
import connection from '../database/index';

const Tag = connection.define('Tag', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Tag',
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '/',
  },
});

export default Tag;
