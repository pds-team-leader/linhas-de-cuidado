module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('publications', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    directory: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    is_from_guide: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    image_type: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    image_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    image_data: {
      type: Sequelize.BLOB,
      allowNull: true,
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

  down: async (queryInterface) => queryInterface.dropTable('publications'),
};
