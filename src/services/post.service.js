const { BlogPost, User, Category } = require('../models');

const createdPost = async (userId, post, _categoryIds) => {
  // const isCategoriesValid = categoryIds.some(async(id) => {
  //   const category = await Category.findByPk(id);
  //   if (!category) { return false; }
  //   return true;
  // });
  // await Promise.all(isCategoriesValid);

  // if (!isCategoriesValid) { return { error: true }; }

  const newPost = await BlogPost.create({
    title: post.title,
    content: post.content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  // const result = categoryIds.map((id) => PostsCategory.create({
  //   postId: newPost.id,
  //   categoryId: id,
  // }, {
  //   include: [
  //     { association: BlogPost, name: 'postId', },
  //     { association: Category, name: 'categoryId', },
  //   ]
  // }));
  // await Promise.all(result);

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
