const { Category } = require('../models');

const createdCategory = async (name) => {
  if (!name) { return { error: true }; }

  const { id } = await Category.create({
    name,
  });

  return { id, name };
};

module.exports = {
  createdCategory,
};
