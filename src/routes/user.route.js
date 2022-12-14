const express = require('express');
const userController = require('../controllers/user.controller');
const { userValidate } = require('../middlewares/userRegisterValidate');

const router = express.Router();

router.post('/', userValidate, userController.userRegister);

module.exports = router;
