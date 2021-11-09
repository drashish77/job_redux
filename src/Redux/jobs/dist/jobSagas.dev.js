"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchApplicationsForAJob = fetchApplicationsForAJob;
exports.fetchAppliedJobs = fetchAppliedJobs;
exports.fetchJobs = fetchJobs;
exports.fetchAvailableJobs = fetchAvailableJobs;
exports.fetchRecruiterPostedJobs = fetchRecruiterPostedJobs;
exports.postAJob = postAJob;
exports.applyAJob = applyAJob;
exports.jobSagas = jobSagas;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _jobActions = require("./jobActions");

var _jobActionTypes = _interopRequireDefault(require("./jobActionTypes"));

var _reactToastify = require("react-toastify");

var _jobApiCalls = require("./jobApiCalls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchApplicationsForAJob),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchAppliedJobs),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchJobs),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchAvailableJobs),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRecruiterPostedJobs),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(postAJob),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(applyAJob),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(onPostJobsStart),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(onApplyJobStart),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchStart),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchAvailableJobsStart),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchPostedJobsStart),
    _marked13 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchApplyJobsStart),
    _marked14 =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchApplicationForAJobStart),
    _marked15 =
/*#__PURE__*/
regeneratorRuntime.mark(jobSagas);

function fetchApplicationsForAJob(_ref) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchApplicationsForAJob$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(_jobApiCalls.fetchApplicationsForAJOB, payload.jobId, payload.token);

        case 4:
          response = _context.sent;

          if (!(response && response.data)) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchApplicationForAJobSuccess)(response.data.data));

        case 8:
          _reactToastify.toast.success('Job application successfully showing');

          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          _context.next = 15;
          return (0, _effects.put)((0, _jobActions.fetchApplicationForAJobFailure)(_context.t0));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 11]]);
}

function fetchAppliedJobs(_ref2) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchAppliedJobs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref2.payload;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(_jobApiCalls.fetchAppliedJOBS, payload.token);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchAppliedJobsSuccess)(response.data.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchAppliedJobsFailure)(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function fetchJobs(_ref3) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchJobs$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref3.payload;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(_jobApiCalls.fetchJOBS, payload.page);

        case 4:
          response = _context3.sent;

          if (!response) {
            _context3.next = 8;
            break;
          }

          _context3.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchJobsSuccess)(response.data));

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 14;
          return (0, _effects.put)((0, _jobActions.fetchJobsFailure)(_context3.t0));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}

function fetchAvailableJobs(_ref4) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchAvailableJobs$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref4.payload;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(_jobApiCalls.fetchAvailableJOBS, payload);

        case 4:
          response = _context4.sent;
          console.log(response);
          console.log(response.data.success);

          if (!(response && response.data.success)) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsSuccess)(response.data));

        case 10:
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 16;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsFailure)(_context4.t0));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 12]]);
}

function fetchRecruiterPostedJobs(_ref5) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchRecruiterPostedJobs$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref5.payload;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(_jobApiCalls.fetchRecruiterPostedJOBS, payload);

        case 4:
          response = _context5.sent;
          _context5.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsSuccess)(response.data));

        case 7:
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsFailure)(_context5.t0));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 9]]);
}

function postAJob(_ref6) {
  var payload, response;
  return regeneratorRuntime.wrap(function postAJob$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = _ref6.payload;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _effects.call)(_jobApiCalls.postJOB, payload.data, payload.token);

        case 4:
          response = _context6.sent;

          if (!(response && response.data)) {
            _context6.next = 8;
            break;
          }

          _context6.next = 8;
          return (0, _effects.put)((0, _jobActions.postNewJobSuccess)(response.data.data));

        case 8:
          _reactToastify.toast.success('Job created successfully');

          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);

          _reactToastify.toast.success('Job creation failed');

          _context6.next = 16;
          return (0, _effects.put)((0, _jobActions.postNewJobFailure)(_context6.t0));

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[1, 11]]);
}

var ApplyAJOB = function ApplyAJOB(body, token) {
  var data, url, headers;
  return regeneratorRuntime.async(function ApplyAJOB$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          data = JSON.stringify({
            jobId: body
          });
          url = "".concat(process.env.REACT_APP_BASE_URL, "/candidates/jobs");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context7.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post(url, data, {
            headers: headers
          }));

        case 5:
          return _context7.abrupt("return", _context7.sent);

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
};

function applyAJob(_ref7) {
  var payload, response, payloadNew;
  return regeneratorRuntime.wrap(function applyAJob$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          payload = _ref7.payload;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _effects.call)(ApplyAJOB, payload.data.body.jobId, payload.data.body.token);

        case 4:
          response = _context8.sent;

          if (!(response && response.data)) {
            _context8.next = 12;
            break;
          }

          _context8.next = 8;
          return (0, _effects.put)((0, _jobActions.applyNewJobSuccess)(response.data.data));

        case 8:
          payloadNew = {
            token: payload.data.body.token,
            page: payload.data.currentPage
          };
          _context8.next = 11;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsBegin)(payloadNew));

        case 11:
          _reactToastify.toast.success('Job application successful');

        case 12:
          _context8.next = 19;
          break;

        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](1);

          _reactToastify.toast.error('Job application failed');

          _context8.next = 19;
          return (0, _effects.put)((0, _jobActions.applyNewJobFailure)(_context8.t0));

        case 19:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked7, null, [[1, 14]]);
}

function onPostJobsStart() {
  return regeneratorRuntime.wrap(function onPostJobsStart$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].POST_NEW_JOB_START, postAJob);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked8);
}

function onApplyJobStart() {
  return regeneratorRuntime.wrap(function onApplyJobStart$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].APPLY_NEW_JOB_START, applyAJob);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked9);
}

function onFetchStart() {
  return regeneratorRuntime.wrap(function onFetchStart$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_JOBS_START, fetchJobs);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked10);
}

function onFetchAvailableJobsStart() {
  return regeneratorRuntime.wrap(function onFetchAvailableJobsStart$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_CANDIDATE_JOBS_START, fetchAvailableJobs);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked11);
}

function onFetchPostedJobsStart() {
  return regeneratorRuntime.wrap(function onFetchPostedJobsStart$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_RECRUITER_JOBS_START, fetchRecruiterPostedJobs);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked12);
}

function onFetchApplyJobsStart() {
  return regeneratorRuntime.wrap(function onFetchApplyJobsStart$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_APPLIED_JOBS_START, fetchAppliedJobs);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked13);
}

function onFetchApplicationForAJobStart() {
  return regeneratorRuntime.wrap(function onFetchApplicationForAJobStart$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_APPLICATIONS_FOR_A_JOB_START, fetchApplicationsForAJob);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked14);
}

function jobSagas() {
  return regeneratorRuntime.wrap(function jobSagas$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onFetchStart), (0, _effects.call)(onFetchAvailableJobsStart), (0, _effects.call)(onFetchPostedJobsStart), (0, _effects.call)(onPostJobsStart), (0, _effects.call)(onApplyJobStart), (0, _effects.call)(onFetchApplyJobsStart), (0, _effects.call)(onFetchApplicationForAJobStart)]);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked15);
}