'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scholarshipmcqquestions', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    question: {
      type: Sequelize.TEXT
    },

    options: {
      type: Sequelize.JSON
    },

    correctOption: {
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
    await queryInterface.dropTable('scholarshipmcqquestions');
  }
};
