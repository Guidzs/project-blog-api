module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  });
  
  return category;
};