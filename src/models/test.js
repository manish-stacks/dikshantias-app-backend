module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tests', {
    title: DataTypes.STRING,
    type: DataTypes.ENUM('mcq','subjective'),
    duration_minutes: DataTypes.INTEGER
  }, { tableName: 'tests' });
};
