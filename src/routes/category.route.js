const express = require('express');
const categoryController = require('../controllers/category.controller');
const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', tokenValidate, categoryController.createdCategory);

router.get('/', tokenValidate, categoryController.findAll);

module.exports = router;
