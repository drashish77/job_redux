"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchApplicationsForAJOB = exports.fetchAppliedJOBS = exports.postJOB = exports.fetchRecruiterPostedJOBS = exports.fetchAvailableJOBS = exports.fetchJOBS = void 0;

var _apiHandler = _interopRequireDefault(require("../../utils/apiHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchJOBS = function fetchJOBS(payload) {
  return regeneratorRuntime.async(function fetchJOBS$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _apiHandler["default"].get("/jobs?page=".concat(payload)));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.fetchJOBS = fetchJOBS;

var fetchAvailableJOBS = function fetchAvailableJOBS(payload) {
  return _apiHandler["default"].get("/candidates/jobs?page=".concat(payload.page));
};

exports.fetchAvailableJOBS = fetchAvailableJOBS;

var fetchRecruiterPostedJOBS = function fetchRecruiterPostedJOBS(payload) {
  return _apiHandler["default"].get("/recruiters/jobs?page=".concat(payload.page));
};

exports.fetchRecruiterPostedJOBS = fetchRecruiterPostedJOBS;

var postJOB = function postJOB(body, token) {
  return regeneratorRuntime.async(function postJOB$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _apiHandler["default"].post('/jobs/', body));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.postJOB = postJOB;

var fetchAppliedJOBS = function fetchAppliedJOBS() {
  return regeneratorRuntime.async(function fetchAppliedJOBS$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _apiHandler["default"].get('/candidates/jobs/applied'));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.fetchAppliedJOBS = fetchAppliedJOBS;

var fetchApplicationsForAJOB = function fetchApplicationsForAJOB(jobId, token) {
  return regeneratorRuntime.async(function fetchApplicationsForAJOB$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _apiHandler["default"].get("/recruiters/jobs/".concat(jobId, "/candidates")));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.fetchApplicationsForAJOB = fetchApplicationsForAJOB;