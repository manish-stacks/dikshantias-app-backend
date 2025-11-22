'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      title: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  linkUrl: DataTypes.STRING,
  }, {
    tableName: 'banners',
    timestamps: true
  });


  Banner.associate = function(models) {
    // define associations here
  };


  return Banner;
};
