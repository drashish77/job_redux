"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

var _token = _interopRequireDefault(require("./token.service"));

var _auth = require("../actions/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup(store) {
  _api["default"].interceptors.request.use(function (config) {
    var token = 'auth.currentUser.token';

    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers['x-access-token'] = token; // for Node.js Express back-end
    }

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  var dispatch = store.dispatch;

  _api["default"].interceptors.response.use(function (res) {
    return res;
  }, function _callee(err) {
    var originalConfig, rs, accessToken;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            originalConfig = err.config;

            if (!(originalConfig.url !== '/auth/signin' && err.response)) {
              _context.next = 17;
              break;
            }

            if (!(err.response.status === 401 && !originalConfig._retry)) {
              _context.next = 17;
              break;
            }

            originalConfig._retry = true;
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap(_api["default"].post('/auth/refreshtoken', {
              refreshToken: _token["default"].getLocalRefreshToken()
            }));

          case 7:
            rs = _context.sent;
            accessToken = rs.data.accessToken;
            dispatch((0, _auth.refreshToken)(accessToken));

            _token["default"].updateLocalAccessToken(accessToken);

            return _context.abrupt("return", (0, _api["default"])(originalConfig));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", Promise.reject(_context.t0));

          case 17:
            return _context.abrupt("return", Promise.reject(err));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 14]]);
  });
};

var _default = setup;
exports["default"] = _default;