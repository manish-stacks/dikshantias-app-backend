module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      mobile: Sequelize.STRING,
      password: Sequelize.STRING,
      batch_id: Sequelize.INTEGER,
      role: { type: Sequelize.ENUM("student", "instructor", "admin"), defaultValue: "student" },
      otp: Sequelize.STRING,
      otp_expiry: Sequelize.DATE,
      is_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  }
};
