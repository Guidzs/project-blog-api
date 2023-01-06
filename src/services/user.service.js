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

const findAll = async () => {
  const result = await User.findAll();
  const users = result.map((r) => {
    const { password: _, ...user } = r.dataValues;
    return user;
  });
  return users;
};

const getById = async (id) => {
  if (!id) { return { error: true }; }
  const [result] = await User.findAll({
    where: { id },
  });
  console.log(result);
  if (!result) { return { error: true }; }
  const { password: _, ...user } = result.dataValues;
  return user;
};

const userDelete = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  userRegister,
  findAll,
  getById,
  userDelete,
};
