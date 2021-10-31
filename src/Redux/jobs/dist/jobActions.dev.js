"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyNewJobFailure = exports.applyNewJobSuccess = exports.applyNewJobBegin = exports.fetchAppliedJobsFailure = exports.fetchAppliedJobsSuccess = exports.fetchAppliedJobsBegin = exports.clearPostNewJob = exports.postNewJobFailure = exports.postNewJobSuccess = exports.postNewJobBegin = exports.fetchRecruiterJobsFailure = exports.fetchRecruiterJobsSuccess = exports.fetchRecruiterJobsBegin = exports.fetchCandidateJobsFailure = exports.fetchCandidateJobsSuccess = exports.fetchCandidateJobsBegin = exports.fetchJobsFailure = exports.fetchJobsSuccess = exports.fetchJobsBegin = void 0;

var _jobActionTypes = _interopRequireDefault(require("./jobActionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//ALL jobs fetching
var fetchJobsBegin = function fetchJobsBegin(data) {
  return {
    type: _jobActionTypes["default"].FETCH_JOBS_START,
    payload: data
  };
};

exports.fetchJobsBegin = fetchJobsBegin;

var fetchJobsSuccess = function fetchJobsSuccess(jobs) {
  return {
    type: _jobActionTypes["default"].FETCH_JOBS_SUCCESS,
    payload: {
      jobs: jobs
    }
  };
};

exports.fetchJobsSuccess = fetchJobsSuccess;

var fetchJobsFailure = function fetchJobsFailure(error) {
  return {
    type: _jobActionTypes["default"].FETCH_JOBS_FAILURE,
    payload: {
      error: error
    }
  };
}; //fetching available jobs for candidate


exports.fetchJobsFailure = fetchJobsFailure;

var fetchCandidateJobsBegin = function fetchCandidateJobsBegin(token) {
  return {
    type: _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_START,
    payload: token
  };
};

exports.fetchCandidateJobsBegin = fetchCandidateJobsBegin;

var fetchCandidateJobsSuccess = function fetchCandidateJobsSuccess(data) {
  return {
    type: _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_SUCCESS,
    payload: data
  };
};

exports.fetchCandidateJobsSuccess = fetchCandidateJobsSuccess;

var fetchCandidateJobsFailure = function fetchCandidateJobsFailure(error) {
  return {
    type: _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_FAILURE,
    payload: error
  };
}; //fetching job posted by recruiter


exports.fetchCandidateJobsFailure = fetchCandidateJobsFailure;

var fetchRecruiterJobsBegin = function fetchRecruiterJobsBegin(token) {
  return {
    type: _jobActionTypes["default"].FETCH_RECRUITER_JOBS_START,
    payload: token
  };
};

exports.fetchRecruiterJobsBegin = fetchRecruiterJobsBegin;

var fetchRecruiterJobsSuccess = function fetchRecruiterJobsSuccess(token) {
  return {
    type: _jobActionTypes["default"].FETCH_RECRUITER_JOBS_SUCCESS,
    payload: token
  };
};

exports.fetchRecruiterJobsSuccess = fetchRecruiterJobsSuccess;

var fetchRecruiterJobsFailure = function fetchRecruiterJobsFailure(token) {
  return {
    type: _jobActionTypes["default"].FETCH_RECRUITER_JOBS_FAILURE,
    payload: token
  };
}; //post a new job by recruiter


exports.fetchRecruiterJobsFailure = fetchRecruiterJobsFailure;

var postNewJobBegin = function postNewJobBegin(data) {
  return {
    type: _jobActionTypes["default"].POST_NEW_JOB_START,
    payload: data
  };
};

exports.postNewJobBegin = postNewJobBegin;

var postNewJobSuccess = function postNewJobSuccess(data) {
  return {
    type: _jobActionTypes["default"].POST_NEW_JOB_SUCCESS,
    payload: data
  };
};

exports.postNewJobSuccess = postNewJobSuccess;

var postNewJobFailure = function postNewJobFailure(error) {
  return {
    type: _jobActionTypes["default"].POST_NEW_JOB_FAILURE,
    payload: error
  };
};

exports.postNewJobFailure = postNewJobFailure;

var clearPostNewJob = function clearPostNewJob() {
  return {
    type: _jobActionTypes["default"].CLEAR_POST_NEW_JOB
  };
}; //fetch all applied job by a candidate


exports.clearPostNewJob = clearPostNewJob;

var fetchAppliedJobsBegin = function fetchAppliedJobsBegin() {
  return {
    type: _jobActionTypes["default"].FETCH_APPLIED_JOBS_START
  };
};

exports.fetchAppliedJobsBegin = fetchAppliedJobsBegin;

var fetchAppliedJobsSuccess = function fetchAppliedJobsSuccess(data) {
  return {
    type: _jobActionTypes["default"].FETCH_APPLIED_JOBS_SUCCESS,
    payload: {
      data: data
    }
  };
};

exports.fetchAppliedJobsSuccess = fetchAppliedJobsSuccess;

var fetchAppliedJobsFailure = function fetchAppliedJobsFailure(error) {
  return {
    type: _jobActionTypes["default"].FETCH_APPLIED_JOBS_FAILURE,
    payload: {
      error: error
    }
  };
}; //apply a job by candidate


exports.fetchAppliedJobsFailure = fetchAppliedJobsFailure;

var applyNewJobBegin = function applyNewJobBegin(data) {
  return {
    type: _jobActionTypes["default"].APPLY_NEW_JOB_START,
    payload: {
      data: data
    }
  };
};

exports.applyNewJobBegin = applyNewJobBegin;

var applyNewJobSuccess = function applyNewJobSuccess(data) {
  return {
    type: _jobActionTypes["default"].APPLY_NEW_JOB_SUCCESS,
    payload: {
      data: data
    }
  };
};

exports.applyNewJobSuccess = applyNewJobSuccess;

var applyNewJobFailure = function applyNewJobFailure(error) {
  return {
    type: _jobActionTypes["default"].APPLY_NEW_JOB_FAILURE,
    payload: {
      error: error
    }
  };
};

exports.applyNewJobFailure = applyNewJobFailure;