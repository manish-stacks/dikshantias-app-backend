module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mcq_questions", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      test_id: Sequelize.INTEGER,
      question: Sequelize.TEXT,
      option_a: Sequelize.STRING,
      option_b: Sequelize.STRING,
      option_c: Sequelize.STRING,
      option_d: Sequelize.STRING,
      correct_answer: Sequelize.STRING
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("mcq_questions");
  }
};
