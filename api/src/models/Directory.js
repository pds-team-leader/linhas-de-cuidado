const {Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const connection = require('../database/index');
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
    });
 
module.exports = Directory;