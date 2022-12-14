const {
  INVALID_CODE,
  NAME_MUST_SHORT,
  EMAIL_INVALID,
  PASSWORD_MUST_SHORT,
} = require('../utils/statusMenssage');

const userValidate = (req, res, next) => {
  const { body } = req;
  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  if (body.displayName.length < 8) {
    return res.status(INVALID_CODE).json({ message: NAME_MUST_SHORT });
  }

  if (!EMAIL_REGEX.test(body.email.toLowerCase())) {
    return res.status(INVALID_CODE).json({ message: EMAIL_INVALID });
  }

  if (body.password.length < 6) {
    return res.status(INVALID_CODE).json({ message: PASSWORD_MUST_SHORT });
  }

  return next();
};

module.exports = {
  userValidate,
};
