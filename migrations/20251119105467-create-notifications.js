module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("notifications", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: Sequelize.STRING,
      message: Sequelize.TEXT,
      target_type: Sequelize.STRING,
      target_id: Sequelize.INTEGER,
      created_at: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("notifications");
  }
};
