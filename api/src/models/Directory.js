import {Model, DataTypes } from 'sequelize';
import Sequelize from 'sequelize';
import connection from '../database/index';
/*
class Directory extends Model {
    static init(connection){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull:false,
            }
        },{
            sequelize: connection,
            tableName:'directory'
        });
    }
}
*/
 const Directory = connection.define('Directory', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Diretório"
        },
        guide: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    });
 
module.exports = Directory;