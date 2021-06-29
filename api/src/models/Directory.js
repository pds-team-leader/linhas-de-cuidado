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
        defaultValue: 3,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Tag, { foreignKey: 'id_directory', through: 'directories_tags', as: 'tags' });
    this.hasMany(models.Publication, { foreignKey: 'directory', as: 'publications' });
  }
}

module.exports = Directory;
