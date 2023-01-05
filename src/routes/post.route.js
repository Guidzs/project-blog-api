const express = require('express');
const postController = require('../controllers/post.controller');
const { tokenValidate } = require('../middlewares/tokenValidate');
const { postValidate } = require('../middlewares/postValidate');

const router = express.Router();

router.post('/', tokenValidate, postValidate, postController.createdPost);

router.get('/', tokenValidate, postController.findAll);
router.get('/:id', tokenValidate, postController.findById);

module.exports = router;