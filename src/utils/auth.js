const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '5min',
};

const createToken = (user) => jwt.sign(user, SECRET, JWT_CONFIG);

module.exports = {
  createToken,
};
