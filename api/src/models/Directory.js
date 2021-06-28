const { Model, DataTypes } = require('sequelize');

class Directory extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Diretório',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Diretório',
      },
      guide: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Tag, { foreignKey: 'id_directory', through: 'directories_tags', as: 'tags' });
  }
}

module.exports = Directory;
