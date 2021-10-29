"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordFailure = exports.resetPasswordSuccess = exports.resetPasswordStart = exports.clearState = exports.clearErrors = exports.logOut = exports.registerFailure = exports.registerSuccess = exports.registerStart = exports.forgetPasswordFailure = exports.forgetPasswordSuccess = exports.forgetPasswordStart = exports.logInFailure = exports.logInSuccess = exports.logInStart = void 0;

var _authActionTypes = _interopRequireDefault(require("./authActionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logInStart = function logInStart(credentials) {
  return {
    type: _authActionTypes["default"].LOG_IN_START,
    payload: credentials
  };
};

exports.logInStart = logInStart;

var logInSuccess = function logInSuccess(user) {
  return {
    type: _authActionTypes["default"].LOG_IN_SUCCESS,
    payload: user
  };
};

exports.logInSuccess = logInSuccess;

var logInFailure = function logInFailure(error) {
  return {
    type: _authActionTypes["default"].LOG_IN_FAILURE,
    payload: error
  };
};

exports.logInFailure = logInFailure;

var forgetPasswordStart = function forgetPasswordStart(credentials) {
  return {
    type: _authActionTypes["default"].FORGOT_PASSWORD_START,
    payload: credentials
  };
};

exports.forgetPasswordStart = forgetPasswordStart;

var forgetPasswordSuccess = function forgetPasswordSuccess(email) {
  return {
    type: _authActionTypes["default"].FORGOT_PASSWORD_SUCCESS,
    payload: email
  };
};

exports.forgetPasswordSuccess = forgetPasswordSuccess;

var forgetPasswordFailure = function forgetPasswordFailure(error) {
  return {
    type: _authActionTypes["default"].FORGOT_PASSWORD_FAILURE,
    payload: error
  };
};

exports.forgetPasswordFailure = forgetPasswordFailure;

var registerStart = function registerStart(credentials) {
  return {
    type: _authActionTypes["default"].REGISTER_START,
    payload: credentials
  };
};

exports.registerStart = registerStart;

var registerSuccess = function registerSuccess(user) {
  return {
    type: _authActionTypes["default"].REGISTER_SUCCESS,
    payload: user
  };
};

exports.registerSuccess = registerSuccess;

var registerFailure = function registerFailure(error) {
  return {
    type: _authActionTypes["default"].REGISTER_FAILURE,
    payload: error
  };
};

exports.registerFailure = registerFailure;

var logOut = function logOut() {
  return {
    type: _authActionTypes["default"].LOG_OUT
  };
};

exports.logOut = logOut;

var clearErrors = function clearErrors() {
  return {
    type: _authActionTypes["default"].CLEAR_ERRORS
  };
};

exports.clearErrors = clearErrors;

var clearState = function clearState() {
  return {
    type: _authActionTypes["default"].CLEAR_STATE
  };
};

exports.clearState = clearState;

var resetPasswordStart = function resetPasswordStart(credentials) {
  return {
    type: _authActionTypes["default"].RESET_PASSWORD_START,
    payload: credentials
  };
};

exports.resetPasswordStart = resetPasswordStart;

var resetPasswordSuccess = function resetPasswordSuccess(user) {
  return {
    type: _authActionTypes["default"].RESET_PASSWORD_SUCCESS,
    payload: user
  };
};

exports.resetPasswordSuccess = resetPasswordSuccess;

var resetPasswordFailure = function resetPasswordFailure(error) {
  return {
    type: _authActionTypes["default"].RESET_PASSWORD_FAILURE,
    payload: error
  };
};

exports.resetPasswordFailure = resetPasswordFailure;