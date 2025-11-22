'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseProgress = sequelize.define('CourseProgress', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      userId: DataTypes.INTEGER,
  courseId: DataTypes.INTEGER,
  progressPercent: DataTypes.INTEGER,
  }, {
    tableName: 'courseprogresss',
    timestamps: true
  });


  CourseProgress.associate = function(models) {
    CourseProgress.belongsTo(models.VideoCourse, { foreignKey: 'courseId', as: 'course' });
  };


  return CourseProgress;
};
