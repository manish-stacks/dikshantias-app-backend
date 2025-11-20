module.exports = (sequelize, DataTypes) => {
  return sequelize.define('batches', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, { tableName: 'batches' });
};
