'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('batchs', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: Sequelize.STRING
    },

    startDate: {
      type: Sequelize.DATE
    },

    endDate: {
      type: Sequelize.DATE
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
    await queryInterface.dropTable('batchs');
  }
};
