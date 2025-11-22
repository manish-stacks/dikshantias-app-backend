'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mcqresults', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    userId: {
      type: Sequelize.INTEGER
    },

    testSeriesId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'testseriess',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },

    score: {
      type: Sequelize.INTEGER
    },

    total: {
      type: Sequelize.INTEGER
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
    await queryInterface.dropTable('mcqresults');
  }
};
