module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("courses", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      category_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      type: Sequelize.ENUM("live", "recorded"),
      price: Sequelize.DOUBLE,
      thumbnail: Sequelize.STRING
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("courses");
  }
};
