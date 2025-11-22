'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mcqquestions', {

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

    subjectId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'subjects',
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
    await queryInterface.dropTable('mcqquestions');
  }
};
