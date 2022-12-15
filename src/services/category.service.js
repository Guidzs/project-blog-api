const { Category } = require('../models');

const createdCategory = async (name) => {
  if (!name) { return { error: true }; }

  const { id } = await Category.create({
    name,
  });

  return { id, name };
};

const findAll = async () => {
  const result = await Category.findAll();
  console.log(result);
  const categories = result.map((r) => r.dataValues);
  return categories;
};

module.exports = {
  createdCategory,
  findAll,
};
