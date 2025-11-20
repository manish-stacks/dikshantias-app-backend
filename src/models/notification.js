module.exports = (sequelize, DataTypes) => {
  return sequelize.define('notifications', {
    title: DataTypes.STRING,
    message: DataTypes.TEXT,
    target_type: DataTypes.ENUM('all','batch','course','user'),
    target_id: DataTypes.BIGINT.UNSIGNED
  }, { tableName: 'notifications' });
};
