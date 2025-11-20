module.exports = (sequelize, DataTypes) => {
  return sequelize.define('subjective_answers', {
    test_id: DataTypes.BIGINT.UNSIGNED,
    user_id: DataTypes.BIGINT.UNSIGNED,
    answer_pdf_url: DataTypes.STRING,
    checked_pdf_url: DataTypes.STRING,
    marks: DataTypes.INTEGER
  }, { tableName: 'subjective_answers' });
};
