module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tests", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: Sequelize.STRING,
      type: Sequelize.ENUM("mcq", "subjective"),
      duration_minutes: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("tests");
  }
};
