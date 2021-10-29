"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _authSagas = require("./auth/authSagas");

var _jobSagas = require("./jobs/jobSagas");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.fork)(_authSagas.authSagas);

        case 2:
          _context.next = 4;
          return (0, _effects.fork)(_jobSagas.jobSagas);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}