module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scholarships', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    eligibility: DataTypes.TEXT,
    last_date: DataTypes.DATE
  }, { tableName: 'scholarships' });
};
