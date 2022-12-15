// STATUS CODE's

const SUCESS_CODE = 200;
const CREATED_CODE = 201;
const INVALID_CODE = 400;
const UNAUTHORIZED_CODE = 401;
const NOT_FOUND = 404;
const CONFLICT_CODE = 409;

// STATUS MESSAGE's

const INVALID_MESSAGE = 'Some required fields are missing';
const INVALID_USER_MESSAGE = 'Invalid fields';
const USER_ALREADY_REGISTERED = 'User already registered';
const NAME_MUST_SHORT = '"displayName" length must be at least 8 characters long';
const EMAIL_INVALID = '"email" must be a valid email';
const PASSWORD_MUST_SHORT = '"password" length must be at least 6 characters long';
const TOKEN_NOT_FOUND = 'Token not found';
const TOKEN_INVALID = 'Expired or invalid token';
const USER_NOT_FOUND = 'User does not exist';

module.exports = {
  // STATUS CODE's
  SUCESS_CODE,
  CREATED_CODE,
  INVALID_CODE,
  UNAUTHORIZED_CODE,
  NOT_FOUND,
  CONFLICT_CODE,

  // STATUS MESSAGE's
  INVALID_MESSAGE,
  INVALID_USER_MESSAGE,
  USER_ALREADY_REGISTERED,
  EMAIL_INVALID,
  NAME_MUST_SHORT,
  PASSWORD_MUST_SHORT,
  TOKEN_NOT_FOUND,
  TOKEN_INVALID,
  USER_NOT_FOUND,
};
