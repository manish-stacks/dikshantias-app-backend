'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scholarshipresults', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    userId: {
      type: Sequelize.INTEGER
    },

    scholarshipId: {
      type: Sequelize.INTEGER,
      // references: {
      //   model: 'scholarships',
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },

    result: {
      type: Sequelize.STRING
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
    await queryInterface.dropTable('scholarshipresults');
  }
};
