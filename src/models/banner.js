'use strict';

module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define("Banner", {

    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    linkUrl: DataTypes.STRING

  }, {
    tableName: "banners",
    timestamps: true
  });

  return Banner;
};
