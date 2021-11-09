"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.forgetPassword = exports.register = exports.logIn = void 0;

var _config = _interopRequireDefault(require("../../config/config"));

var _apiHandler = _interopRequireDefault(require("../../utils/apiHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logIn = function logIn(email, password) {
  var body;
  return regeneratorRuntime.async(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body = {
            email: email,
            password: password
          };
          return _context.abrupt("return", _apiHandler["default"].post("".concat(_config["default"].loginRoute), body));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.logIn = logIn;

var register = function register(userRole, name, email, password, confirmPassword, skills) {
  var body;
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          body = {
            userRole: userRole,
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            skills: skills
          };
          return _context2.abrupt("return", _apiHandler["default"].post("".concat(_config["default"].registerRoute), body));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.register = register;

var forgetPassword = function forgetPassword(email) {
  return regeneratorRuntime.async(function forgetPassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _apiHandler["default"].get("".concat(_config["default"].resetPassword, "?email=").concat(email)));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.forgetPassword = forgetPassword;

var resetPassword = function resetPassword(password, confirmPassword, token) {
  var body;
  return regeneratorRuntime.async(function resetPassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          body = {
            password: password,
            confirmPassword: confirmPassword,
            token: token
          };
          return _context4.abrupt("return", _apiHandler["default"].post("".concat(_config["default"].resetPassword), body));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.resetPassword = resetPassword;