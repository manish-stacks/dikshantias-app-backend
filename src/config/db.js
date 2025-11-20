const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'dikshant_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    define: { underscored: true, timestamps: true },

    // 🔥 FIX TIMEZONE
    timezone: "+05:30",
    dialectOptions: {
      useUTC: false,          // do not convert dates to UTC
      dateStrings: true,      // return DATETIME as string (important)
      typeCast: function (field, next) {
        // Convert DATETIME fields to local timezone
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      }
    },
  }
);

module.exports = sequelize;
