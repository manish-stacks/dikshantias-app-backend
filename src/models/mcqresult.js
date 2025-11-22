'use strict';
module.exports = (sequelize, DataTypes) => {
  const MCQResult = sequelize.define('MCQResult', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      userId: DataTypes.INTEGER,
  testSeriesId: DataTypes.INTEGER,
  score: DataTypes.INTEGER,
  total: DataTypes.INTEGER,
  }, {
    tableName: 'mcqresults',
    timestamps: true
  });


  MCQResult.associate = function(models) {
    MCQResult.belongsTo(models.TestSeries, { foreignKey: 'testSeriesId', as: 'testSeries' });
  };


  return MCQResult;
};
