const postService = require('../services/post.service');
const { vevifyToken } = require('../utils/auth');
const {
  SUCESS_CODE,
  CREATED_CODE,
  INVALID_CODE,
  UNAUTHORIZED_CODE,
  NOT_FOUND,
  CATEGORY_NOT_FOUND,
  POST_NOT_FOUND,
  UNAUTHORIZED_USER,
} = require('../utils/statusMenssage');

const createdPost = async (req, res) => {
  const { authorization } = req.headers;
  const { categoryIds, ...post } = req.body;

  const { id } = vevifyToken(authorization);
  const newPost = await postService.createdPost(id, post, categoryIds);

  if (newPost.error) {
    return res.status(INVALID_CODE).json({ message: CATEGORY_NOT_FOUND });
  }
  return res.status(CREATED_CODE).json(newPost);
};

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  return res.status(SUCESS_CODE).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.findById(Number(id));
  if (post.error) {
    return res.status(NOT_FOUND).json({ message: POST_NOT_FOUND });
  }
  return res.status(SUCESS_CODE).json(post);
};

const postUpdate = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const post = req.body;

  const token = vevifyToken(authorization);
  if (Number(id) !== token.id) {
    return res.status(UNAUTHORIZED_CODE).json({ message: UNAUTHORIZED_USER });
  }
  await postService.postUpdate(Number(id), post);
  const updatedPost = await postService.findById(Number(id));

  return res.status(SUCESS_CODE).json(updatedPost);
};

module.exports = {
  createdPost,
  findAll,
  findById,
  postUpdate,
};
