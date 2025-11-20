module.exports = (sequelize, DataTypes) => {
  return sequelize.define('courses', {
    subcategory_id: DataTypes.BIGINT.UNSIGNED,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.ENUM('live','recorded'),
    price: DataTypes.DECIMAL(10,2),
    thumbnail: DataTypes.STRING
  }, { tableName: 'courses' });
};
