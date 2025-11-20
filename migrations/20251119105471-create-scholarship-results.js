module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("scholarship_results", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      scholarship_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      marks: Sequelize.INTEGER,
      rank: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("scholarship_results");
  }
};
