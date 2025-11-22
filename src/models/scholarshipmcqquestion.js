'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScholarshipMCQQuestion = sequelize.define('ScholarshipMCQQuestion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      question: DataTypes.TEXT,
  options: DataTypes.JSON,
  correctOption: DataTypes.STRING,
  scholarshipId: DataTypes.INTEGER,
  }, {
    tableName: 'scholarshipmcqquestions',
    timestamps: true
  });


  ScholarshipMCQQuestion.associate = function(models) {
    ScholarshipMCQQuestion.belongsTo(models.Scholarship, { foreignKey: 'scholarshipId', as: 'scholarship' });
  };


  return ScholarshipMCQQuestion;
};
