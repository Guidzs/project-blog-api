const postService = require('../services/post.service');
const { SUCESS_CODE } = require('../utils/statusMenssage');

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  return res.status(SUCESS_CODE).json(posts);
};

module.exports = {
  findAll,
};
