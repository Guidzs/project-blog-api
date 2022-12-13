module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,

  }, {
    sequelize,
    underscored: true,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
    })
  };
  
  return blogPost;
};