'use strict';
module.exports = (sequelize, DataTypes) => {
  const MCQQuestion = sequelize.define('MCQQuestion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      question: DataTypes.TEXT,
  options: DataTypes.JSON,
  correctOption: DataTypes.STRING,
  subjectId: DataTypes.INTEGER,
  }, {
    tableName: 'mcqquestions',
    timestamps: true
  });


  MCQQuestion.associate = function(models) {
    MCQQuestion.belongsTo(models.Subject, { foreignKey: 'subjectId', as: 'subject' });
  };


  return MCQQuestion;
};
