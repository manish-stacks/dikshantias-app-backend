'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('downloads', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    userId: {
      type: Sequelize.INTEGER
    },

    resourceType: {
      type: Sequelize.STRING
    },

    resourceId: {
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
    await queryInterface.dropTable('downloads');
  }
};
