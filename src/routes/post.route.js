const express = require('express');
const postController = require('../controllers/post.controller');
const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', postController.createdPost);

router.get('/', tokenValidate, postController.findAll);

module.exports = router;