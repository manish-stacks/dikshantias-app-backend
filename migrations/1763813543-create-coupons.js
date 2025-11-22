'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coupons', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    code: {
      type: Sequelize.STRING
    },

    discountPercent: {
      type: Sequelize.INTEGER
    },

    validTill: {
      type: Sequelize.DATE
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
    await queryInterface.dropTable('coupons');
  }
};
