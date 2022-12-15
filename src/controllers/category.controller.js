const categoryService = require('../services/category.service');
const {
  INVALID_CODE,
  NAME_REQUIRED,
  CREATED_CODE,
  SUCESS_CODE,
} = require('../utils/statusMenssage');

const createdCategory = async (req, res) => {
  const { name } = req.body;
  const user = await categoryService.createdCategory(name);
  if (user.error) {
    return res.status(INVALID_CODE).json({ message: NAME_REQUIRED });
  }
  return res.status(CREATED_CODE).json(user);
};

const findAll = async (_req, res) => {
  const categories = await categoryService.findAll();
  return res.status(SUCESS_CODE).json(categories);
};

module.exports = {
  createdCategory,
  findAll,
};
