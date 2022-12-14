const { vevifyToken } = require('../utils/auth');
const { UNAUTHORIZED_CODE, TOKEN_NOT_FOUND, TOKEN_INVALID } = require('../utils/statusMenssage');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(UNAUTHORIZED_CODE).json({ message: TOKEN_NOT_FOUND });
  }
  
  try {
    vevifyToken(authorization);
  } catch (err) {
    return res.status(UNAUTHORIZED_CODE).json({ message: TOKEN_INVALID });
  }

  return next();
};

module.exports = {
  tokenValidate,
};
