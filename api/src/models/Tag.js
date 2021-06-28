const { Model, DataTypes } = require('sequelize');

class Tag extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Tag',
      },
    }, {
      sequelize,
      tableName: 'tags',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Directory, { foreignKey: 'id_tag', through: 'directories_tags', as: 'directories' });
  }
}

module.exports = Tag;
