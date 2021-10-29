"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logInWithCredentials = logInWithCredentials;
exports.forgetPasswordWithEmail = forgetPasswordWithEmail;
exports.resetPasswordWithToken = resetPasswordWithToken;
exports.registerWithCredentials = registerWithCredentials;
exports.logInAfterRegister = logInAfterRegister;
exports.logInAfterReset = logInAfterReset;
exports.onLogInStart = onLogInStart;
exports.onRegisterStart = onRegisterStart;
exports.onForgetStart = onForgetStart;
exports.onResetStart = onResetStart;
exports.onResetSuccess = onResetSuccess;
exports.onRegisterSuccess = onRegisterSuccess;
exports.authSagas = authSagas;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _config = _interopRequireWildcard(require("../../config/config"));

var _authActions = require("./authActions");

var _authActionTypes = _interopRequireDefault(require("./authActionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(logInWithCredentials),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(forgetPasswordWithEmail),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(resetPasswordWithToken),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(registerWithCredentials),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(logInAfterRegister),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(logInAfterReset),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(onLogInStart),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(onRegisterStart),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(onForgetStart),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(onResetStart),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(onResetSuccess),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(onRegisterSuccess),
    _marked13 =
/*#__PURE__*/
regeneratorRuntime.mark(authSagas);

var logIn = function logIn(email, password) {
  return regeneratorRuntime.async(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].post("".concat(_config.BASE_URL).concat(_config["default"].loginRoute), {
            email: email,
            password: password
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var register = function register(userRole, name, email, password, confirmPassword, skills) {
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(_config.BASE_URL).concat(_config["default"].registerRoute), {
            userRole: userRole,
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            skills: skills
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var forgetPassword = function forgetPassword(email) {
  return regeneratorRuntime.async(function forgetPassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _axios["default"].get("".concat(_config.BASE_URL).concat(_config["default"].resetPassword, "?email=").concat(email)));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var resetPassword = function resetPassword(password, confirmPassword, token) {
  return regeneratorRuntime.async(function resetPassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _axios["default"].post("".concat(_config.BASE_URL).concat(_config["default"].resetPassword), {
            password: password,
            confirmPassword: confirmPassword,
            token: token
          }));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

function logInWithCredentials(_ref) {
  var _ref$payload, email, password, user;

  return regeneratorRuntime.wrap(function logInWithCredentials$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref$payload = _ref.payload, email = _ref$payload.email, password = _ref$payload.password;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(logIn, email, password);

        case 4:
          user = _context5.sent;
          console.log(user && user.data.success);

          if (!(user && user.data.success)) {
            _context5.next = 9;
            break;
          }

          _context5.next = 9;
          return (0, _effects.put)((0, _authActions.logInSuccess)(user.data.data));

        case 9:
          _context5.next = 15;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 15;
          return (0, _effects.put)((0, _authActions.logInFailure)(_context5.t0.response.data));

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked, null, [[1, 11]]);
}

function forgetPasswordWithEmail(_ref2) {
  var payload, user;
  return regeneratorRuntime.wrap(function forgetPasswordWithEmail$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = _ref2.payload;
          _context6.prev = 1;
          console.log(payload);
          _context6.next = 5;
          return (0, _effects.call)(forgetPassword, payload);

        case 5:
          user = _context6.sent;
          console.log(user.data.data);
          _context6.next = 9;
          return (0, _effects.put)((0, _authActions.forgetPasswordSuccess)(payload));

        case 9:
          _context6.next = 15;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          _context6.next = 15;
          return (0, _effects.put)((0, _authActions.forgetPasswordFailure)(_context6.t0.response.data));

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked2, null, [[1, 11]]);
}

function resetPasswordWithToken(_ref3) {
  var _ref3$payload, password, confirmPassword, token, user;

  return regeneratorRuntime.wrap(function resetPasswordWithToken$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _ref3$payload = _ref3.payload, password = _ref3$payload.password, confirmPassword = _ref3$payload.confirmPassword, token = _ref3$payload.token;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _effects.call)(resetPassword, password, confirmPassword, token);

        case 4:
          user = _context7.sent;
          _context7.next = 7;
          return (0, _effects.put)((0, _authActions.resetPasswordSuccess)(user));

        case 7:
          _context7.next = 13;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);
          _context7.next = 13;
          return (0, _effects.put)((0, _authActions.resetPasswordFailure)(_context7.t0.response.data));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function registerWithCredentials(_ref4) {
  var _ref4$payload, userRole, name, email, password, confirmPassword, skills;

  return regeneratorRuntime.wrap(function registerWithCredentials$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _ref4$payload = _ref4.payload, userRole = _ref4$payload.userRole, name = _ref4$payload.name, email = _ref4$payload.email, password = _ref4$payload.password, confirmPassword = _ref4$payload.confirmPassword, skills = _ref4$payload.skills;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _effects.call)(register, userRole, name, email, password, confirmPassword, skills);

        case 4:
          _context8.next = 6;
          return (0, _effects.put)((0, _authActions.registerSuccess)({
            userRole: userRole,
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            skills: skills
          }));

        case 6:
          _context8.next = 13;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0);
          _context8.next = 13;
          return (0, _effects.put)((0, _authActions.registerFailure)(_context8.t0));

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4, null, [[1, 8]]);
}

function logInAfterRegister(_ref5) {
  var _ref5$payload, email, password;

  return regeneratorRuntime.wrap(function logInAfterRegister$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _ref5$payload = _ref5.payload, email = _ref5$payload.email, password = _ref5$payload.password;
          _context9.next = 3;
          return logInWithCredentials({
            payload: {
              email: email,
              password: password
            }
          });

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked5);
}

function logInAfterReset(_ref6) {
  var _ref6$payload, email, password;

  return regeneratorRuntime.wrap(function logInAfterReset$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _ref6$payload = _ref6.payload, email = _ref6$payload.email, password = _ref6$payload.password;
          _context10.next = 3;
          return logInWithCredentials({
            payload: {
              email: email,
              password: password
            }
          });

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked6);
}

function onLogInStart() {
  return regeneratorRuntime.wrap(function onLogInStart$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].LOG_IN_START, logInWithCredentials);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked7);
}

function onRegisterStart() {
  return regeneratorRuntime.wrap(function onRegisterStart$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].REGISTER_START, registerWithCredentials);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked8);
}

function onForgetStart() {
  return regeneratorRuntime.wrap(function onForgetStart$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].FORGOT_PASSWORD_START, forgetPasswordWithEmail);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked9);
}

function onResetStart() {
  return regeneratorRuntime.wrap(function onResetStart$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].RESET_PASSWORD_START, resetPasswordWithToken);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked10);
}

function onResetSuccess() {
  return regeneratorRuntime.wrap(function onResetSuccess$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].RESET_PASSWORD_SUCCESS);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked11);
}

function onRegisterSuccess() {
  return regeneratorRuntime.wrap(function onRegisterSuccess$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].REGISTER_SUCCESS, logInAfterRegister);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked12);
}

function authSagas() {
  return regeneratorRuntime.wrap(function authSagas$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onLogInStart), (0, _effects.call)(onRegisterStart), (0, _effects.call)(onRegisterSuccess), (0, _effects.call)(onForgetStart), (0, _effects.call)(onResetStart) // call(onResetSuccess),
          ]);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked13);
}