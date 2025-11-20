module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("subjective_tests", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      test_id: Sequelize.INTEGER,
      pdf_url: Sequelize.STRING
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("subjective_tests");
  }
};
