const { User } = require('../models');
const { createToken } = require('../utils/auth');

const userRegister = async (user) => {
  const users = await User.findAll({
    where: { email: user.email },
  });
  if (users.length > 0) { return { error: true }; }

  const { id } = await User.create({
    displayName: user.displayName,
    email: user.email,
    password: user.password,
    image: user.image,
  });

  const token = createToken({ email: user.email, id });
  return { token };
};

module.exports = {
  userRegister,
};
