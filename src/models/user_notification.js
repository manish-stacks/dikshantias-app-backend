module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user_notifications', {
    user_id: DataTypes.BIGINT.UNSIGNED,
    notification_id: DataTypes.BIGINT.UNSIGNED,
    is_read: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, { tableName: 'user_notifications' });
};
