const { User } = require('../models');
const { createToken } = require('../utils/auth');

const loginRegister = async ({ email, password }) => {
  const [user] = await User.findAll({
    where: { email },
  });

  if (user === undefined) {
    return { error: true };
  }

  if (user.dataValues.password !== password) {
    return { error: true };
  }
  const token = createToken({ email, id: user.dataValues.id });
  return { token };
};

module.exports = {
  loginRegister,
};
