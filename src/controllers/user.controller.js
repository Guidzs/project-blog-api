const userService = require('../services/user.service');
const { CREATED_CODE, CONFLICT_CODE, USER_ALREADY_REGISTERED } = require('../utils/statusMenssage');

const userRegister = async (req, res) => {
  const { body } = req;

  const user = await userService.userRegister(body);

  if (user.error) {
    return res.status(CONFLICT_CODE).json({ message: USER_ALREADY_REGISTERED });
  }
  return res.status(CREATED_CODE).json(user);
};

module.exports = {
  userRegister,
};
