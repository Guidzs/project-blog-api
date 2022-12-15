module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  postCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  
  return postCategory;
};