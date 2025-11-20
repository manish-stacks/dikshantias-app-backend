module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pdf_notes", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      course_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      file_url: Sequelize.STRING,
      is_downloadable: Sequelize.BOOLEAN
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("pdf_notes");
  }
};
