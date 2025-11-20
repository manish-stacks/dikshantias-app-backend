module.exports = (sequelize, DataTypes) => {
  return sequelize.define('mcq_questions', {
    test_id: DataTypes.BIGINT.UNSIGNED,
    question: DataTypes.TEXT,
    option_a: DataTypes.TEXT,
    option_b: DataTypes.TEXT,
    option_c: DataTypes.TEXT,
    option_d: DataTypes.TEXT,
    correct_answer: DataTypes.STRING
  }, { tableName: 'mcq_questions' });
};
