'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      title: DataTypes.STRING,
  slug: DataTypes.STRING,
  content: DataTypes.TEXT,
  }, {
    tableName: 'blogs',
    timestamps: true
  });


  Blog.associate = function(models) {
    // define associations here
  };


  return Blog;
};
