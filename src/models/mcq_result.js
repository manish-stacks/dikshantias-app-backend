module.exports = (sequelize, DataTypes) => {
  return sequelize.define('mcq_results', {
    user_id: DataTypes.BIGINT.UNSIGNED,
    test_id: DataTypes.BIGINT.UNSIGNED,
    score: DataTypes.DECIMAL(10,2),
    accuracy: DataTypes.DECIMAL(5,2)
  }, { tableName: 'mcq_results' });
};
