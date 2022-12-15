const express = require('express');
const userController = require('../controllers/user.controller');
const { tokenValidate } = require('../middlewares/tokenValidate');
const { userValidate } = require('../middlewares/userRegisterValidate');

const router = express.Router();

router.post('/', userValidate, userController.userRegister);

router.get('/', tokenValidate, userController.findAll);

router.get('/:id', tokenValidate, userController.getById);

module.exports = router;
