module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scholarship_applications', {
    scholarship_id: DataTypes.BIGINT.UNSIGNED,
    user_id: DataTypes.BIGINT.UNSIGNED,
    document_url: DataTypes.STRING,
    status: { type: DataTypes.ENUM('pending','approved','rejected'), defaultValue: 'pending' }
  }, { tableName: 'scholarship_applications' });
};
