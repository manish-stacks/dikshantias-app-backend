'use strict';
module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define('Batch', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      name: DataTypes.STRING,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  programId: DataTypes.INTEGER,
  }, {
    tableName: 'batchs',
    timestamps: true
  });


  Batch.associate = function(models) {
    Batch.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
  };


  return Batch;
};
