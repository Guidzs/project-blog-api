const { INVALID_CODE, FIELDS_MISSING } = require('../utils/statusMenssage');

const postValidate = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(INVALID_CODE).json({ message: FIELDS_MISSING });
  }
  return next();
};

module.exports = {
  postValidate,
};
