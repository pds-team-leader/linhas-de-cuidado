module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('directories_tags', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_tag: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'tags', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    id_directory: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'directories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('directories_tags'),
};
