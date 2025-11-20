module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("subjective_answers", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      test_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      answer_pdf_url: Sequelize.STRING,
      checked_pdf_url: Sequelize.STRING,
      marks: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("subjective_answers");
  }
};
