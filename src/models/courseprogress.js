'use strict';

module.exports = (sequelize, DataTypes) => {
  const CourseProgress = sequelize.define("CourseProgress", {

    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    userId: DataTypes.INTEGER,
    batchId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,

    itemId: DataTypes.INTEGER,
    itemType: DataTypes.ENUM("video", "pdf"),

    progress: DataTypes.FLOAT,
    completed: DataTypes.BOOLEAN,

    lastAccessedAt: DataTypes.DATE

  }, {
    tableName: "courseprogresses",
    timestamps: true
  });

  CourseProgress.associate = function (models) {
    CourseProgress.belongsTo(models.VideoCourse, { foreignKey: 'courseId', as: 'course' });
  };
  
  return CourseProgress;
};
