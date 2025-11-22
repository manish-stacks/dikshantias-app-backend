'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('testseriess', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    title: {
      type: Sequelize.STRING
    },

    description: {
      type: Sequelize.TEXT
    },

    programId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'programs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('testseriess');
  }
};
