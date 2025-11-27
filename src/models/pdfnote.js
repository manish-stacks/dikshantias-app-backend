'use strict';
module.exports = (sequelize, DataTypes) => {
  const PDFNote = sequelize.define('PDFNote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    fileUrl: DataTypes.STRING,
    batchId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
  }, {
    tableName: 'pdfnotes',
    timestamps: true
  });


  PDFNote.associate = function (models) {
    PDFNote.belongsTo(models.Batch, { foreignKey: 'batchId', as: 'batchs' });
  };


  return PDFNote;
};
