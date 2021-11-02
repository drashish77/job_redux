"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = jobReducer;

var _jobActionTypes = _interopRequireDefault(require("./jobActionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  jobs: [],
  loading: false,
  error: null,
  jobFetchSuccess: false,
  totalAvailableJobs: 0,
  availableJobs: [],
  totalPostedJobs: 0,
  postedJobs: [],
  createJob: null,
  createJobSuccess: false,
  createJobErrorMessage: null,
  applyJob: null,
  totalAppliedJobs: 0,
  appliedJobFetchSuccess: false,
  jobApplicationSuccess: false,
  totalJobApplication: 0,
  fetchApplicationSuccess: false,
  recruiterJobFetchSuccess: false
};

function jobReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _jobActionTypes["default"].FETCH_JOBS_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _jobActionTypes["default"].FETCH_JOBS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        jobs: action.payload.jobs,
        jobFetchSuccess: true
      });

    case _jobActionTypes["default"].FETCH_JOBS_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        jobs: []
      });

    case _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        totalAvailableJobs: action.payload.metadata.count,
        availableJobs: action.payload.data,
        jobFetchSuccess: true
      });

    case _jobActionTypes["default"].FETCH_CANDIDATE_JOBS_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        jobFetchSuccess: false,
        jobs: []
      });

    case _jobActionTypes["default"].FETCH_RECRUITER_JOBS_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null,
        recruiterJobFetchSuccess: false
      });

    case _jobActionTypes["default"].FETCH_RECRUITER_JOBS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        totalPostedJobs: action.payload.data.metadata.count,
        postedJobs: action.payload.data.data,
        recruiterJobFetchSuccess: true
      });

    case _jobActionTypes["default"].FETCH_RECRUITER_JOBS_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        recruiterJobFetchSuccess: false,
        jobs: []
      });

    case _jobActionTypes["default"].POST_NEW_JOB_START:
      return _objectSpread({}, state, {
        createJob: null,
        loading: true,
        error: null,
        createJobSuccess: false
      });

    case _jobActionTypes["default"].POST_NEW_JOB_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        createJob: action.payload,
        createJobSuccess: true
      });

    case _jobActionTypes["default"].POST_NEW_JOB_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        createJobErrorMessage: action.payload.error,
        createJobSuccess: false
      });

    case _jobActionTypes["default"].CLEAR_POST_NEW_JOB:
      return _objectSpread({}, state, {
        createJobSuccess: false
      });

    case _jobActionTypes["default"].APPLY_NEW_JOB_START:
      return _objectSpread({}, state, {
        applyJob: null,
        loading: true,
        error: null,
        jobApplicationSuccess: false
      });

    case _jobActionTypes["default"].APPLY_NEW_JOB_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        applyJob: action.payload,
        jobApplicationSuccess: true
      });

    case _jobActionTypes["default"].APPLY_NEW_JOB_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        jobApplicationSuccess: false
      });

    case _jobActionTypes["default"].FETCH_APPLIED_JOBS_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null,
        appliedJobFetchSuccess: false
      });

    case _jobActionTypes["default"].FETCH_APPLIED_JOBS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        totalAppliedJobs: action.payload,
        appliedJobFetchSuccess: true
      });

    case _jobActionTypes["default"].FETCH_APPLIED_JOBS_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        appliedJobFetchSuccess: false,
        jobs: []
      });

    case _jobActionTypes["default"].FETCH_APPLICATIONS_FOR_A_JOB_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null,
        fetchApplicationSuccess: false
      });

    case _jobActionTypes["default"].FETCH_APPLICATIONS_FOR_A_JOB_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        totalJobApplication: action.payload,
        fetchApplicationSuccess: true
      });

    case _jobActionTypes["default"].FETCH_APPLICATIONS_FOR_A_JOB_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        fetchApplicationSuccess: false,
        jobs: []
      });

    default:
      return state;
  }
}