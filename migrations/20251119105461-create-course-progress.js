module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course_progress", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: Sequelize.INTEGER,
      video_id: Sequelize.INTEGER,
      progress_percent: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("course_progress");
  }
};
