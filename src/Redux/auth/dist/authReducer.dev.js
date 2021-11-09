"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authActionTypes = _interopRequireDefault(require("./authActionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  loginFailed: null,
  currentUser: null,
  error: null,
  errorMessage: null,
  userLoginSuccess: false,
  userSignupSuccess: false,
  resetSuccess: false,
  resetPasswordData: false,
  forgotSuccess: false,
  resetToken: null,
  signupFailed: null
};

var persistLogin = function persistLogin(token, userRole, email, name) {
  localStorage.setItem('token', token);
  localStorage.setItem('userRole', userRole);
  localStorage.setItem('email', email);
  localStorage.setItem('name', name);
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _authActionTypes["default"].LOG_IN_START:
      {
        return _objectSpread({}, state, {
          currentUser: null
        });
      }

    case _authActionTypes["default"].LOG_IN_SUCCESS:
      {
        var _action$payload = action.payload,
            email = _action$payload.email,
            token = _action$payload.token,
            name = _action$payload.name,
            userRole = _action$payload.userRole;
        persistLogin(token, userRole, email, name);
        return _objectSpread({}, state, {
          currentUser: action.payload,
          userLoginSuccess: true
        });
      }

    case _authActionTypes["default"].LOG_IN_FAILURE:
      {
        return _objectSpread({}, state, {
          error: action.payload.errors,
          errorMessage: action.payload,
          userLoginSuccess: false
        });
      }

    case _authActionTypes["default"].REGISTER_SUCCESS:
      {
        return _objectSpread({}, state, {
          error: action.payload,
          userSignupSuccess: true
        });
      }

    case _authActionTypes["default"].REGISTER_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        userSignupSuccess: false,
        signupFailed: action.payload
      });

    case _authActionTypes["default"].LOG_OUT:
      return INITIAL_STATE;

    case _authActionTypes["default"].CLEAR_ERRORS:
      return _objectSpread({}, state, {
        error: null,
        errorMessage: null,
        signupFailed: null
      });

    case _authActionTypes["default"].FORGOT_PASSWORD_SUCCESS:
      {
        //  localStorage.setItem('token', token)
        return _objectSpread({}, state, {
          // currentUser: action.payload,
          resetToken: action.payload.token,
          forgotSuccess: true
        });
      }

    case _authActionTypes["default"].FORGOT_PASSWORD_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload.errors,
        errorMessage: action.payload.message
      });

    case _authActionTypes["default"].RESET_PASSWORD_START:
      {
        return _objectSpread({}, state);
      }

    case _authActionTypes["default"].RESET_PASSWORD_SUCCESS:
      {
        return _objectSpread({}, state, {
          resetPasswordData: action.payload,
          resetSuccess: true
        });
      }

    case _authActionTypes["default"].RESET_PASSWORD_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload.errors,
        errorMessage: action.payload.message
      });

    case _authActionTypes["default"].CLEAR_STATE:
      return _objectSpread({}, state, {
        resetSuccess: false,
        forgotSuccess: false
      });

    default:
      return state;
  }
};

var _default = authReducer;
exports["default"] = _default;