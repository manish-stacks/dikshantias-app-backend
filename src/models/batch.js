'use strict';

module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define('Batch', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    name: DataTypes.STRING,
    slug: DataTypes.STRING,

    imageUrl: DataTypes.STRING,

    displayOrder: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,
    subjectId: DataTypes.JSON, // [1,2,3]
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
    Batch.hasMany(models.CourseProgress, { foreignKey: 'batchId', as: 'progress' });
    Batch.belongsTo(models.Batch, { foreignKey: 'batchId', as: 'batchs' });
    Batch.belongsToMany(models.Subject, { through: 'batch_subjects' });
    // Batch.hasMany(models.BatchApplication, { foreignKey: 'batchId', as: 'applications' });

  };

  return Batch;
};
