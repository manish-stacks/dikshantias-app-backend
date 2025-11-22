'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      name: DataTypes.STRING,
  description: DataTypes.TEXT,
  programId: DataTypes.INTEGER,
  }, {
    tableName: 'subjects',
    timestamps: true
  });


  Subject.associate = function(models) {
    Subject.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
    Subject.hasMany(models.MCQQuestion, { foreignKey: 'subjectId', as: 'mcqQuestions' });
  };


  return Subject;
};
