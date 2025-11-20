module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: Sequelize.INTEGER,
      course_id: Sequelize.INTEGER,
      order_id: Sequelize.STRING,
      amount: Sequelize.DOUBLE,
      status: Sequelize.STRING,
      invoice_url: Sequelize.STRING
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("orders");
  }
};
