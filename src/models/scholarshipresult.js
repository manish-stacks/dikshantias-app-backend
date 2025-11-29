'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScholarshipResult = sequelize.define('ScholarshipResult', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: DataTypes.INTEGER,
    scholarshipId: DataTypes.INTEGER,
    result: DataTypes.STRING,
  }, {
    tableName: 'scholarshipresults',
    timestamps: true
  });


  ScholarshipResult.associate = function (models) {
    ScholarshipResult.belongsTo(models.Scholarship, { foreignKey: 'scholarshipId', as: 'scholarship' });
  };


  return ScholarshipResult;
};
