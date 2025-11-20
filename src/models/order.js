module.exports = (sequelize, DataTypes) => {
  return sequelize.define('orders', {
    user_id: DataTypes.BIGINT.UNSIGNED,
    course_id: DataTypes.BIGINT.UNSIGNED,
    order_id: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2),
    status: DataTypes.STRING,
    invoice_url: DataTypes.STRING
  }, { tableName: 'orders' });
};
