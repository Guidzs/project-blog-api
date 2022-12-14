const userService = require('../services/user.service');
const {
  CREATED_CODE,
  CONFLICT_CODE,
  USER_ALREADY_REGISTERED,
  SUCESS_CODE,
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

module.exports = {
  userRegister,
  findAll,
};
