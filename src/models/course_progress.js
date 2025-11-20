module.exports = (sequelize, DataTypes) => {
  return sequelize.define('course_progress', {
    user_id: DataTypes.BIGINT.UNSIGNED,
    video_id: DataTypes.BIGINT.UNSIGNED,
    progress_percent: DataTypes.INTEGER
  }, { tableName: 'course_progress' });
};
