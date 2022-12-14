const loginService = require('../services/login.service');
const { SUCESS_CODE, INVALID_CODE, INVALID_USER_MESSAGE } = require('../utils/statusMenssage');

const loginRegister = async (req, res) => {
  const { body } = req;

  const user = await loginService.loginRegister(body);
  if (user.error) {
    return res.status(INVALID_CODE).json({ message: INVALID_USER_MESSAGE });
  }
  return res.status(SUCESS_CODE).json(user);
};

module.exports = {
  loginRegister,
};
