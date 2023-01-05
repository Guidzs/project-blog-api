const {
  BlogPost,
  User,
  Category,
  PostCategory,
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

  await Promise.all(
    categoryIds.map(async (categoryId) => PostCategory.create(
      { postId: newPost.id, categoryId },
    )),
  );

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

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) { return { error: true }; }

  return post;
};

module.exports = {
  createdPost,
  findAll,
  findById,
};
