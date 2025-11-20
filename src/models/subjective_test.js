module.exports = (sequelize, DataTypes) => {
  return sequelize.define('subjective_tests', {
    test_id: DataTypes.BIGINT.UNSIGNED,
    pdf_url: DataTypes.STRING
  }, { tableName: 'subjective_tests' });
};
