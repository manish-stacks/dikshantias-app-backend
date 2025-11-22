'use strict';
module.exports = (sequelize, DataTypes) => {
  const VideoCourse = sequelize.define('VideoCourse', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      title: DataTypes.STRING,
  type: DataTypes.STRING,
  url: DataTypes.STRING,
  programId: DataTypes.INTEGER,
  }, {
    tableName: 'videocourses',
    timestamps: true
  });


  VideoCourse.associate = function(models) {
    VideoCourse.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
    VideoCourse.hasMany(models.CourseProgress, { foreignKey: 'courseId', as: 'progress' });
  };


  return VideoCourse;
};
