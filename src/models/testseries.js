'use strict';
module.exports = (sequelize, DataTypes) => {
  const TestSeries = sequelize.define('TestSeries', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      title: DataTypes.STRING,
  description: DataTypes.TEXT,
  programId: DataTypes.INTEGER,
  }, {
    tableName: 'testseriess',
    timestamps: true
  });


  TestSeries.associate = function(models) {
    TestSeries.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
    TestSeries.hasMany(models.MCQResult, { foreignKey: 'testSeriesId', as: 'results' });
  };


  return TestSeries;
};
