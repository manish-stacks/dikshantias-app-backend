'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coupon = sequelize.define('Coupon', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      code: DataTypes.STRING,
  discountPercent: DataTypes.INTEGER,
  validTill: DataTypes.DATE,
  }, {
    tableName: 'coupons',
    timestamps: true
  });


  Coupon.associate = function(models) {
    // define associations here
  };


  return Coupon;
};
