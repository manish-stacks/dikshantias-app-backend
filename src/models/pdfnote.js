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
  programId: DataTypes.INTEGER,
  }, {
    tableName: 'pdfnotes',
    timestamps: true
  });


  PDFNote.associate = function(models) {
    PDFNote.belongsTo(models.Program, { foreignKey: 'programId', as: 'program' });
  };


  return PDFNote;
};
