module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('directories', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    guide: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('directories'),
};
