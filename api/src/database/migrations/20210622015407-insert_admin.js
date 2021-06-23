require('dotenv').config();

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('admins', [
      {
        email: process.env.ADMIN1_EMAIL,
        password: process.env.ADMIN1_PASSWORD,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: process.env.ADMIN2_EMAIL,
        password: process.env.ADMIN2_PASSWORD,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
};
