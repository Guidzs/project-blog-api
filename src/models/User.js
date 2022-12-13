'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
  });
  
  return user;
};