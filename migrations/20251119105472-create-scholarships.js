module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("scholarships", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      eligibility: Sequelize.STRING,
      last_date: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("scholarships");
  }
};
