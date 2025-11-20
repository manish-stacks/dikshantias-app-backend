module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mcq_results", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: Sequelize.INTEGER,
      test_id: Sequelize.INTEGER,
      score: Sequelize.INTEGER,
      accuracy: Sequelize.FLOAT
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("mcq_results");
  }
};
