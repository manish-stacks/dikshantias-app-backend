module.exports = (sequelize, DataTypes) => {
  return sequelize.define('course_categories', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, { tableName: 'course_categories' });
};
