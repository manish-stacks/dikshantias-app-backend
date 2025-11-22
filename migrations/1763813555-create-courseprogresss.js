'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courseprogresss', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    userId: {
      type: Sequelize.INTEGER
    },

    courseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'videocourses',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },

    progressPercent: {
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
    await queryInterface.dropTable('courseprogresss');
  }
};
