module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pdf_notes', {
    course_id: DataTypes.BIGINT.UNSIGNED,
    title: DataTypes.STRING,
    file_url: DataTypes.STRING,
    is_downloadable: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, { tableName: 'pdf_notes' });
};
