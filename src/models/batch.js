'use strict';

module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define('Batch', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    name: DataTypes.STRING,
    slug: DataTypes.STRING,

    imageUrl: DataTypes.STRING,

    displayOrder: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,

    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,

    registrationStartDate: DataTypes.DATE,
    registrationEndDate: DataTypes.DATE,

    status: DataTypes.ENUM('active', 'inactive'),

    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.TEXT,

    batchPrice: DataTypes.FLOAT,
    batchDiscountPrice: DataTypes.FLOAT,
    gst: DataTypes.FLOAT,
    offerValidityDays: DataTypes.INTEGER

  }, {
    tableName: 'batchs',
    timestamps: true
  });

  Batch.associate = function (models) {
    Batch.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
  };

  return Batch;
};
