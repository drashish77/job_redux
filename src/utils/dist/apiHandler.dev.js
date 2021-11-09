"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiResponse = void 0;

var getApiResponse = function getApiResponse(url, method, headers, body) {
  var response;
  return regeneratorRuntime.async(function getApiResponse$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            headers: headers,
            body: body
          }));

        case 3:
          _context.t1 = _context.sent.json();
          _context.next = 6;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 6:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getApiResponse = getApiResponse;