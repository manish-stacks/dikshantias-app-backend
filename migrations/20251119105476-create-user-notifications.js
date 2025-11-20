module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_notifications", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: Sequelize.INTEGER,
      notification_id: Sequelize.INTEGER,
      is_read: Sequelize.BOOLEAN
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("user_notifications");
  }
};
