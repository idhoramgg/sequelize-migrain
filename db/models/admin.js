'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING
  },
   {});
  admin.associate = function(models) {
    // associations can be defined here
    admin.hasOne(models.blog)
  };
  return admin;
};