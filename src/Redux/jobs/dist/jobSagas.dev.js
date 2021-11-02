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

var _config = _interopRequireDefault(require("../../config/config"));

var _jobActions = require("./jobActions");

var _apiHandler = require("../../utils/apiHandler");

var _jobActionTypes = _interopRequireDefault(require("./jobActionTypes"));

var _reactToastify = require("react-toastify");

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

var fetchJOBS = function fetchJOBS(payload) {
  return regeneratorRuntime.async(function fetchJOBS$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].get("".concat(process.env.REACT_APP_BASE_URL, "/jobs?page=").concat(payload)));

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
          url = "".concat(process.env.REACT_APP_BASE_URL, "/candidates/jobs?page=").concat(payload.page);
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

var fetchRecruiterPostedJOBS = function fetchRecruiterPostedJOBS(payload) {
  var url, headers;
  return regeneratorRuntime.async(function fetchRecruiterPostedJOBS$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = "".concat(process.env.REACT_APP_BASE_URL, "/recruiters/jobs?page=").concat(payload.page);
          headers = {
            'Content-Type': 'application/json',
            Authorization: payload.token
          };
          _context3.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            headers: headers
          }));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
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
          url = "".concat(process.env.REACT_APP_BASE_URL, "/jobs/");
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

var fetchAppliedJOBS = function fetchAppliedJOBS(token) {
  var url, headers;
  return regeneratorRuntime.async(function fetchAppliedJOBS$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          url = "".concat(process.env.REACT_APP_BASE_URL, "/candidates/jobs/applied");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context5.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            headers: headers
          }));

        case 4:
          return _context5.abrupt("return", _context5.sent);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var fetchApplicationsForAJOB = function fetchApplicationsForAJOB(jobId, token) {
  var url, headers;
  return regeneratorRuntime.async(function fetchApplicationsForAJOB$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          url = "".concat(process.env.REACT_APP_BASE_URL, "/recruiters/jobs/").concat(jobId, "/candidates");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context6.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            headers: headers
          }));

        case 4:
          return _context6.abrupt("return", _context6.sent);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};

function fetchApplicationsForAJob(_ref) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchApplicationsForAJob$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          payload = _ref.payload;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _effects.call)(fetchApplicationsForAJOB, payload.jobId, payload.token);

        case 4:
          response = _context7.sent;

          if (!(response && response.data)) {
            _context7.next = 8;
            break;
          }

          _context7.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchApplicationForAJobSuccess)(response.data.data));

        case 8:
          _reactToastify.toast.success('Job application successfully showing');

          _context7.next = 15;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          _context7.next = 15;
          return (0, _effects.put)((0, _jobActions.fetchApplicationForAJobFailure)(_context7.t0));

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked, null, [[1, 11]]);
}

function fetchAppliedJobs(_ref2) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchAppliedJobs$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          payload = _ref2.payload;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _effects.call)(fetchAppliedJOBS, payload.token);

        case 4:
          response = _context8.sent;
          _context8.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchAppliedJobsSuccess)(response.data.data));

        case 7:
          _context8.next = 13;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](1);
          _context8.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchAppliedJobsFailure)(_context8.t0));

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function fetchJobs(_ref3) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchJobs$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          payload = _ref3.payload;
          _context9.prev = 1;
          _context9.next = 4;
          return (0, _effects.call)(fetchJOBS, payload.page);

        case 4:
          response = _context9.sent;

          if (!response) {
            _context9.next = 8;
            break;
          }

          _context9.next = 8;
          return (0, _effects.put)((0, _jobActions.fetchJobsSuccess)(response.data));

        case 8:
          _context9.next = 14;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](1);
          _context9.next = 14;
          return (0, _effects.put)((0, _jobActions.fetchJobsFailure)(_context9.t0));

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}

function fetchAvailableJobs(_ref4) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchAvailableJobs$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          payload = _ref4.payload;
          _context10.prev = 1;
          _context10.next = 4;
          return (0, _effects.call)(fetchAvailableJOBS, payload);

        case 4:
          response = _context10.sent;
          _context10.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsSuccess)(response.data));

        case 7:
          _context10.next = 13;
          break;

        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](1);
          _context10.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsFailure)(_context10.t0));

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked4, null, [[1, 9]]);
}

function fetchRecruiterPostedJobs(_ref5) {
  var payload, response;
  return regeneratorRuntime.wrap(function fetchRecruiterPostedJobs$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          payload = _ref5.payload;
          _context11.prev = 1;
          _context11.next = 4;
          return (0, _effects.call)(fetchRecruiterPostedJOBS, payload);

        case 4:
          response = _context11.sent;
          _context11.next = 7;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsSuccess)(response.data));

        case 7:
          _context11.next = 13;
          break;

        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](1);
          _context11.next = 13;
          return (0, _effects.put)((0, _jobActions.fetchRecruiterJobsFailure)(_context11.t0));

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked5, null, [[1, 9]]);
}

function postAJob(_ref6) {
  var payload, response;
  return regeneratorRuntime.wrap(function postAJob$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          payload = _ref6.payload;
          _context12.prev = 1;
          _context12.next = 4;
          return (0, _effects.call)(postJOB, payload.data, payload.token);

        case 4:
          response = _context12.sent;

          if (!(response && response.data)) {
            _context12.next = 8;
            break;
          }

          _context12.next = 8;
          return (0, _effects.put)((0, _jobActions.postNewJobSuccess)(response.data.data));

        case 8:
          _reactToastify.toast.success('Job created successfully');

          _context12.next = 16;
          break;

        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](1);

          _reactToastify.toast.success('Job creation failed');

          _context12.next = 16;
          return (0, _effects.put)((0, _jobActions.postNewJobFailure)(_context12.t0));

        case 16:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked6, null, [[1, 11]]);
}

var ApplyAJOB = function ApplyAJOB(body, token) {
  var data, url, headers;
  return regeneratorRuntime.async(function ApplyAJOB$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          data = JSON.stringify({
            jobId: body
          });
          url = "".concat(process.env.REACT_APP_BASE_URL, "/candidates/jobs");
          headers = {
            'Content-Type': 'application/json',
            Authorization: token
          };
          _context13.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post(url, data, {
            headers: headers
          }));

        case 5:
          return _context13.abrupt("return", _context13.sent);

        case 6:
        case "end":
          return _context13.stop();
      }
    }
  });
};

function applyAJob(_ref7) {
  var payload, response, payloadNew;
  return regeneratorRuntime.wrap(function applyAJob$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          payload = _ref7.payload;
          _context14.prev = 1;
          _context14.next = 4;
          return (0, _effects.call)(ApplyAJOB, payload.data.body.jobId, payload.data.body.token);

        case 4:
          response = _context14.sent;

          if (!(response && response.data)) {
            _context14.next = 12;
            break;
          }

          _context14.next = 8;
          return (0, _effects.put)((0, _jobActions.applyNewJobSuccess)(response.data.data));

        case 8:
          payloadNew = {
            token: payload.data.body.token,
            page: payload.data.currentPage
          };
          _context14.next = 11;
          return (0, _effects.put)((0, _jobActions.fetchCandidateJobsBegin)(payloadNew));

        case 11:
          _reactToastify.toast.success('Job application successful');

        case 12:
          _context14.next = 19;
          break;

        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](1);

          _reactToastify.toast.error('Job application failed');

          _context14.next = 19;
          return (0, _effects.put)((0, _jobActions.applyNewJobFailure)(_context14.t0));

        case 19:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked7, null, [[1, 14]]);
}

function onPostJobsStart() {
  return regeneratorRuntime.wrap(function onPostJobsStart$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].POST_NEW_JOB_START, postAJob);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked8);
}

function onApplyJobStart() {
  return regeneratorRuntime.wrap(function onApplyJobStart$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].APPLY_NEW_JOB_START, applyAJob);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked9);
}

function onFetchStart() {
  return regeneratorRuntime.wrap(function onFetchStart$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_JOBS_START, fetchJobs);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked10);
}

function onFetchAvailableJobsStart() {
  return regeneratorRuntime.wrap(function onFetchAvailableJobsStart$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_CANDIDATE_JOBS_START, fetchAvailableJobs);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked11);
}

function onFetchPostedJobsStart() {
  return regeneratorRuntime.wrap(function onFetchPostedJobsStart$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_RECRUITER_JOBS_START, fetchRecruiterPostedJobs);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked12);
}

function onFetchApplyJobsStart() {
  return regeneratorRuntime.wrap(function onFetchApplyJobsStart$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_APPLIED_JOBS_START, fetchAppliedJobs);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked13);
}

function onFetchApplicationForAJobStart() {
  return regeneratorRuntime.wrap(function onFetchApplicationForAJobStart$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.takeLatest)(_jobActionTypes["default"].FETCH_APPLICATIONS_FOR_A_JOB_START, fetchApplicationsForAJob);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked14);
}

function jobSagas() {
  return regeneratorRuntime.wrap(function jobSagas$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onFetchStart), (0, _effects.call)(onFetchAvailableJobsStart), (0, _effects.call)(onFetchPostedJobsStart), (0, _effects.call)(onPostJobsStart), (0, _effects.call)(onApplyJobStart), (0, _effects.call)(onFetchApplyJobsStart), (0, _effects.call)(onFetchApplicationForAJobStart)]);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked15);
}