const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const connection = require('../database/index');

const Admin = connection.define('Admin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "admin@admin.com"
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
    {
        hooks: {
            beforeCreate: async function(admin) {
                const salt = await bcrypt.genSalt(10); 
                admin.password = await bcrypt.hash(admin.password, salt);
            }
        }
    }
);

module.exports = Admin;