module.exports = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
  });

  postsCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  
  return postsCategory;
};