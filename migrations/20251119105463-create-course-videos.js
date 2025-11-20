module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course_videos", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      course_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      video_url: Sequelize.STRING,
      duration: Sequelize.STRING,
      encrypted: Sequelize.BOOLEAN,
      watermark_text: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("course_videos");
  }
};
