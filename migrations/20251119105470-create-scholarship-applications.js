module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("scholarship_applications", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      scholarship_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      document_url: Sequelize.STRING,
      status: Sequelize.STRING
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("scholarship_applications");
  }
};
