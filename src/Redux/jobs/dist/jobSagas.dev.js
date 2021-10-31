"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJobs = fetchJobs;
exports.fetchAvailableJobs = fetchAvailableJobs;
exports.fetchRecruiterPostedJobs = fetchRecruiterPostedJobs;
exports.postAJob = postAJob;
exports.applyAJob = applyAJob;
exports.jobSagas = jobSagas;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _config = _interopRequireWildcard(require("../../config/config"));

var _jobActions = require("./jobActions");

var _apiHandler = require("../../utils/apiHandler");

var _jobActionTypes = _interopRequireDefault(require("./jobActionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchJobs),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchAvailableJobs),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRecruiterPostedJobs),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(postAJob),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(applyAJob),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(onPostJobsStart),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(onApplyJobStart),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchStart),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchAvailableJobsStart),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchPostedJobsStart),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(jobSagas);

//url: `https://jobs-api.squareboat.info/api/v1/jobs?page=${payload.page}`,
var fetchJOBS = function fetchJOBS(payload) {
  return regeneratorRuntime.async(function fetchJOBS$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].get("https://jobs-api.squareboat.info/api/v1/jobs?page=".concat(payload)));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var fetchAvailableJOBS = function fetchAvailableJOBS(payload) {
  var url, headers;
  return regeneratorRuntime.async(function fetchAvailableJOBS$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = "".concat(_config.BASE_URL, "/candidates/jobs?page=").concat(payload.page);
          headers = {
            'Content-Type': 'application/json',
            Authorization: payload.token
          };
          _context2.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            headers: headers
          }));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var fetchRecruiterPostedJOBS = function fetchRecruiterPostedJOBS(token) {
  var url, method, headers;
  return regeneratorRuntime.async(function fetchRecruiterPostedJOBS$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = "".concat(_config.BASE_URL, "/recruiters/jobs");
          method = 'GET';
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context3.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            headers: headers
          }));

        case 5:
          return _context3.abrupt("return", _context3.sent);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var postJOB = function postJOB(body, token) {
  var url, headers;
  return regeneratorRuntime.async(function postJOB$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = "".concat(_config.BASE_URL, "/jobs/");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context4.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post(url, body, {
            headers: headers
          }));

        case 4:
          return _context4.abrupt("return", _context4.sent);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

function fetchJobs(_ref) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchJobs$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref.payload;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(fetchJOBS, payload.page);

        case 4:
          response = _context5.sent;

          if (!response) {
            _context5.next = 8;
            break;
          }

          _context5.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchJobsSuccess)(response.data));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 14;
          return (0, _effects.put)((0, _jobActions.fetchJobsFailure)(_context5.t0));

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked, null, [[1, 10]]);
}

function fetchAvailableJobs(_ref2) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchAvailableJobs$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = _ref2.payload;
          console.log(payload);
          _context6.prev = 2;
          _context6.next = 5;
          return (0, _effects.call)(fetchAvailableJOBS, payload);

        case 5:
          response = _context6.sent;
          _context6.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsSuccess)(response.data));

        case 8:
          _context6.next = 14;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](2);
          _context6.next = 14;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsFailure)(_context6.t0));

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked2, null, [[2, 10]]);
}

function fetchRecruiterPostedJobs(_ref3) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchRecruiterPostedJobs$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          payload = _ref3.payload;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _effects.call)(fetchRecruiterPostedJOBS, payload);

        case 4:
          response = _context7.sent;
          _context7.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsSuccess)(response.data.data));

        case 7:
          _context7.next = 13;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);
          _context7.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsFailure)(_context7.t0));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function postAJob(_ref4) {
  var payload, response;
  return regeneratorRuntime.wrap(function postAJob$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          payload = _ref4.payload;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _effects.call)(postJOB, payload.data, payload.token);

        case 4:
          response = _context8.sent;
          _context8.next = 7;
          return (0, _effects.put)((0, _jobActions.postNewJobSuccess)(response.data.data));

        case 7:
          _context8.next = 13;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](1);
          _context8.next = 13;
          return (0, _effects.put)((0, _jobActions.postNewJobFailure)(_context8.t0));

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4, null, [[1, 9]]);
}

var ApplyAJOB = function ApplyAJOB(body, token) {
  var data, url, headers;
  return regeneratorRuntime.async(function ApplyAJOB$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          data = JSON.stringify({
            jobId: body
          });
          url = "".concat(_config.BASE_URL, "/candidates/jobs");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context9.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post(url, data, {
            headers: headers
          }));

        case 5:
          return _context9.abrupt("return", _context9.sent);

        case 6:
        case "end":
          return _context9.stop();
      }
    }
  });
};

function applyAJob(_ref5) {
  var payload, response;
  return regeneratorRuntime.wrap(function applyAJob$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          payload = _ref5.payload;
          console.log(payload.data);
          _context10.prev = 2;
          _context10.next = 5;
          return (0, _effects.call)(ApplyAJOB, payload.data.body.jobId, payload.data.body.token);

        case 5:
          response = _context10.sent;
          _context10.next = 8;
          return (0, _effects.put)((0, _jobActions.applyNewJobSuccess)(response.data.data));

        case 8:
          _context10.next = 14;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](2);
          _context10.next = 14;
          return (0, _effects.put)((0, _jobActions.applyNewJobFailure)(_context10.t0));

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked5, null, [[2, 10]]);
}

function onPostJobsStart() {
  return regeneratorRuntime.wrap(function onPostJobsStart$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].POST_NEW_JOB_START, postAJob);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked6);
}

function onApplyJobStart() {
  return regeneratorRuntime.wrap(function onApplyJobStart$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].APPLY_NEW_JOB_START, applyAJob);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked7);
}

function onFetchStart() {
  return regeneratorRuntime.wrap(function onFetchStart$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_JOBS_START, fetchJobs);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked8);
}

function onFetchAvailableJobsStart() {
  return regeneratorRuntime.wrap(function onFetchAvailableJobsStart$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_CANDIDATE_JOBS_START, fetchAvailableJobs);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked9);
}

function onFetchPostedJobsStart() {
  return regeneratorRuntime.wrap(function onFetchPostedJobsStart$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_RECRUITER_JOBS_START, fetchRecruiterPostedJobs);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked10);
}

function jobSagas() {
  return regeneratorRuntime.wrap(function jobSagas$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onFetchStart), (0, _effects.call)(onFetchAvailableJobsStart), (0, _effects.call)(onFetchPostedJobsStart), (0, _effects.call)(onPostJobsStart), (0, _effects.call)(onApplyJobStart)]);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked11);
} // export function* applyPostSaga({ payload }) {
//   try {
//     var data = JSON.stringify({ jobId: payload.id })
//     var config = {
//       method: 'post',
//       url: 'https://jobs-api.squareboat.info/api/v1/candidates/jobs',
//       headers: {
//         Authorization: `${payload.token}`,
//         'Content-Type': 'application/json',
//       },
//       data: data,
//     }
//     const result = yield sendRequest(config)
//     if (result) {
//       yield put(getAvailablePostsInitiate({ token: payload.token, page: 1 }))
//     }
//     yield put(postApplySuccess('Applied to post successfully'))
//   } catch (error) {
//     yield put(postApplyFailure(error))
//   }
// }