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

const postUpdate = async (id, userId, post) => {
  const { user } = await findById(id);
  console.log(user);
  if (user.id !== userId) { return { error: true }; }

  await BlogPost.update(post, {
    where: {
      id,
    },
  });
  return {};
};

const postDelete = async (id, userId) => {
  const post = await findById(id);
  if (post.error) { return post; }
  if (post.user.id !== userId) { return { err: true }; }

  await BlogPost.destroy({
    where: {
      id,
    },
  });
  return {};
};

module.exports = {
  createdPost,
  findAll,
  findById,
  postUpdate,
  postDelete,
};
