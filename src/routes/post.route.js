const express = require('express');
const postController = require('../controllers/post.controller');
const { tokenValidate } = require('../middlewares/tokenValidate');
const { postValidate, postUpdateValidate } = require('../middlewares/postValidate');

const router = express.Router();

router.post('/', tokenValidate, postValidate, postController.createdPost);

router.get('/', tokenValidate, postController.findAll);
router.get('/:id', tokenValidate, postController.findById);
// router.get('/search', tokenValidate, postController.findByText);

router.put('/:id', tokenValidate, postUpdateValidate, postController.postUpdate);

router.delete('/:id', tokenValidate, postController.postDelete);

module.exports = router;