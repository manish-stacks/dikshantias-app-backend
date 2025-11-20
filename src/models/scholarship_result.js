module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scholarship_results', {
    scholarship_id: DataTypes.BIGINT.UNSIGNED,
    user_id: DataTypes.BIGINT.UNSIGNED,
    marks: DataTypes.DECIMAL(6,2),
    rank: DataTypes.INTEGER
  }, { tableName: 'scholarship_results' });
};
