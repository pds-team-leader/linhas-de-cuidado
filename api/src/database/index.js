import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const connection = new Sequelize(databaseConfig);

export default connection;
