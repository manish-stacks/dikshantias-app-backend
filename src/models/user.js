module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true, allowNull: true },
    mobile: { type: DataTypes.STRING, unique: true, allowNull: true },
    password: DataTypes.STRING,
    // batch_id: DataTypes.BIGINT.UNSIGNED,
    role: { type: DataTypes.ENUM('student','admin','instructor'), defaultValue: 'student' },
    otp: DataTypes.STRING,
    otp_expiry: DataTypes.DATE,
    is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, { tableName: 'users' });
};
