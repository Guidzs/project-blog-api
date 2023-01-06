const userService = require('../services/user.service');
const { vevifyToken } = require('../utils/auth');
const {
  CREATED_CODE,
  DELETE_CODE,
  CONFLICT_CODE,
  USER_ALREADY_REGISTERED,
  SUCESS_CODE,
  NOT_FOUND,
  USER_NOT_FOUND,
} = require('../utils/statusMenssage');

const userRegister = async (req, res) => {
  const { body } = req;

  const user = await userService.userRegister(body);

  if (user.error) {
    return res.status(CONFLICT_CODE).json({ message: USER_ALREADY_REGISTERED });
  }
  
  return res.status(CREATED_CODE).json(user);
};

const findAll = async (_req, res) => {
  const users = await userService.findAll();
  return res.status(SUCESS_CODE).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(Number(id));

  if (user.error) {
    return res.status(NOT_FOUND).json({ message: USER_NOT_FOUND });
  }

  return res.status(SUCESS_CODE).json(user);
};

const userDelete = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = vevifyToken(authorization);
  
  await userService.userDelete(id);
  
  return res.status(DELETE_CODE).send();
};

module.exports = {
  userRegister,
  findAll,
  getById,
  userDelete,
};
