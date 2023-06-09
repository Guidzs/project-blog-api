// STATUS CODE's

const SUCESS_CODE = 200;
const CREATED_CODE = 201;
const DELETE_CODE = 204;
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
const NAME_REQUIRED = '"name" is required';
const CATEGORY_NOT_FOUND = 'one or more "categoryIds" not found';
const FIELDS_MISSING = 'Some required fields are missing';
const POST_NOT_FOUND = 'Post does not exist';
const UNAUTHORIZED_USER = 'Unauthorized user';

module.exports = {
  // STATUS CODE's
  SUCESS_CODE,
  CREATED_CODE,
  DELETE_CODE,
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
  NAME_REQUIRED,
  CATEGORY_NOT_FOUND,
  FIELDS_MISSING,
  POST_NOT_FOUND,
  UNAUTHORIZED_USER,
};
