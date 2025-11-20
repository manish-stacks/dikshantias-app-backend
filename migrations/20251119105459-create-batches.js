module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("batches", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("batches");
  }
};
