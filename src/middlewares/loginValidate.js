const {
  INVALID_CODE,
  INVALID_MESSAGE,
} = require('../utils/statusMenssage');

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(INVALID_CODE)
      .json({ message: INVALID_MESSAGE });
  }

  return next();
};

module.exports = {
  loginValidate,
};
