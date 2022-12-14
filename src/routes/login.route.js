const express = require('express');
const { loginRegister } = require('../controllers/login.controller');
const { loginValidate } = require('../middlewares/loginValidate');

const router = express.Router();

router.post('/', loginValidate, loginRegister);

module.exports = router;