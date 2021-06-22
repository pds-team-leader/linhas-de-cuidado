module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('admins', [
      {
        email: 'admin1', password: 'admin1', created_at: new Date(), updated_at: new Date(),
      },
      {
        email: 'admin2', password: 'admin2', created_at: new Date(), updated_at: new Date(),
      },
    ]);
  },
};
