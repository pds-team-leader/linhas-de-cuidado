module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('admins', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(15),
      allowNull: false,
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

  down: async (queryInterface) => queryInterface.dropTable('admins'),
};
