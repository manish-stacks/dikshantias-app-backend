'use strict';
module.exports = (sequelize, DataTypes) => {
  const Download = sequelize.define('Download', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      userId: DataTypes.INTEGER,
  resourceType: DataTypes.STRING,
  resourceId: DataTypes.INTEGER,
  }, {
    tableName: 'downloads',
    timestamps: true
  });


  Download.associate = function(models) {
    // define associations here
  };


  return Download;
};
