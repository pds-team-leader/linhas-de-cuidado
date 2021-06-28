const { Model, DataTypes } = require('sequelize');

class Publication extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      directory: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Publicação',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Descrição da publicação',
      },
      isFromGuide: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, {
      sequelize,
    });
  }
}

module.exports = Publication;
