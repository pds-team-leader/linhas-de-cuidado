import Sequelize from 'sequelize';
import connection from '../database/index';

const Publication = connection.define('Publication', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  directory: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Publicação',
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'Descrição da publicação',
  },
  isFromGuide: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  imageType: {
    type:Sequelize.STRING,
    allowNull: true
  },
  imageName:{
    type: Sequelize.STRING,
     allowNull: true
  },
  imagePath: {
    type: Sequelize.STRING, 
    allowNull: true
  }
});

export default Publication;
