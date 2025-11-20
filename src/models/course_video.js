module.exports = (sequelize, DataTypes) => {
  return sequelize.define('course_videos', {
    course_id: DataTypes.BIGINT.UNSIGNED,
    title: DataTypes.STRING,
    video_url: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    encrypted: { type: DataTypes.BOOLEAN, defaultValue: false },
    watermark_text: DataTypes.STRING
  }, { tableName: 'course_videos' });
};
