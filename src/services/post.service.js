const {
  BlogPost,
  User,
  Category,
  // PostCategory,
  // sequelize,
} = require('../models');

const createdPost = async (userId, post, categoryIds) => {
  const categories = await Category.findAll();
  const isCategoriesValid = categoryIds
    .every((id) => categories
      .some((category) => category.id === id));
  if (!isCategoriesValid) { return { error: true }; }

  const newPost = await BlogPost.create({
    title: post.title,
    content: post.content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  // const t = await sequelize.transaction();

  // await Promise.all(
  //   categoryIds.map(async (categoryId) => PostCategory.create(
  //     { postId: newPost.id, categoryId },
  //     { transaction: t },
  //   )),
  // );

  return newPost;
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

module.exports = {
  createdPost,
  findAll,
};
