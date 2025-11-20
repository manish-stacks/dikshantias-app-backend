module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course_categories", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      image: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("course_categories");
  }
};
