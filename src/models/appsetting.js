'use strict';
module.exports = (sequelize, DataTypes) => {
  const AppSetting = sequelize.define('AppSetting', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    key: DataTypes.STRING,
    value: DataTypes.TEXT,
  }, {
    tableName: 'appsettings',
    timestamps: true
  });


  AppSetting.associate = function (models) {
    // define associations here
  };


  return AppSetting;
};
