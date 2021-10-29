"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logInWithCredentials = logInWithCredentials;
exports.registerWithCredentials = registerWithCredentials;
exports.logInAfterRegister = logInAfterRegister;
exports.onLogInStart = onLogInStart;
exports.onRegisterStart = onRegisterStart;
exports.onRegisterSuccess = onRegisterSuccess;
exports.authSagas = authSagas;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _authActions = require("./authActions");

var _authActionTypes = _interopRequireDefault(require("./authActionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(logInWithCredentials),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(registerWithCredentials),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(logInAfterRegister),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(onLogInStart),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(onRegisterStart),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(onRegisterSuccess),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(authSagas);

var logIn = function logIn(email, password) {
  var response;
  return regeneratorRuntime.async(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('/login', {
            email: email,
            password: password
          }));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            token: response.data.accessToken
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var register = function register(email, password) {
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('/register', {
            email: email,
            password: password
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

function logInWithCredentials(_ref) {
  var _ref$payload, email, password, user;

  return regeneratorRuntime.wrap(function logInWithCredentials$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ref$payload = _ref.payload, email = _ref$payload.email, password = _ref$payload.password;
          _context3.prev = 1;
          _context3.next = 4;
          return logIn(email, password);

        case 4:
          user = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _authActions.logInSuccess)(user));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return (0, _effects.put)((0, _authActions.logInFailure)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function registerWithCredentials(_ref2) {
  var _ref2$payload, email, password;

  return regeneratorRuntime.wrap(function registerWithCredentials$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref2$payload = _ref2.payload, email = _ref2$payload.email, password = _ref2$payload.password;
          _context4.prev = 1;
          _context4.next = 4;
          return register(email, password);

        case 4:
          _context4.next = 6;
          return (0, _effects.put)((0, _authActions.registerSuccess)({
            email: email,
            password: password
          }));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 12;
          return (0, _effects.put)((0, _authActions.registerFailure)(_context4.t0));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[1, 8]]);
}

function logInAfterRegister(_ref3) {
  var _ref3$payload, email, password;

  return regeneratorRuntime.wrap(function logInAfterRegister$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref3$payload = _ref3.payload, email = _ref3$payload.email, password = _ref3$payload.password;
          _context5.next = 3;
          return logInWithCredentials({
            payload: {
              email: email,
              password: password
            }
          });

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3);
}

function onLogInStart() {
  return regeneratorRuntime.wrap(function onLogInStart$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].LOG_IN_START, logInWithCredentials);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked4);
}

function onRegisterStart() {
  return regeneratorRuntime.wrap(function onRegisterStart$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].REGISTER_START, registerWithCredentials);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked5);
}

function onRegisterSuccess() {
  return regeneratorRuntime.wrap(function onRegisterSuccess$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeLatest)(_authActionTypes["default"].REGISTER_SUCCESS, logInAfterRegister);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked6);
}

function authSagas() {
  return regeneratorRuntime.wrap(function authSagas$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onLogInStart), (0, _effects.call)(onRegisterStart), (0, _effects.call)(onRegisterSuccess)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked7);
}