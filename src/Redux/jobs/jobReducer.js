import types from './jobActionTypes'

const INITIAL_STATE = {
  jobs: [],
  loading: false,
  error: null,
  jobFetchSuccess: false,
  totalAvailableJobs: 0,
  totalPostedJobs: 0,
  createJob: null,
  createJobSuccess: false,
  createJobErrorMessage: null,
  applyJob: null,
  totalAppliedJobs: 0,
}

export default function jobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case types.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
        jobFetchSuccess: true,
      }

    case types.FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      }
    case types.FETCH_CANDIDATE_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case types.FETCH_CANDIDATE_JOBS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        totalAvailableJobs: action.payload,
        jobFetchSuccess: true,
      }

    case types.FETCH_CANDIDATE_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      }
    case types.FETCH_RECRUITER_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case types.FETCH_RECRUITER_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalPostedJobs: action.payload,
        jobFetchSuccess: true,
      }

    case types.FETCH_RECRUITER_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      }
    case types.POST_NEW_JOB_START:
      console.log(action.payload)
      return {
        ...state,
        createJob: null,
        loading: true,
        error: null,
        createJobSuccess: false,
      }

    case types.POST_NEW_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        createJob: action.payload,
        createJobSuccess: true,
      }

    case types.POST_NEW_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        createJobErrorMessage: action.payload.error,
        createJobSuccess: false,
      }
    case types.CLEAR_POST_NEW_JOB:
      return {
        ...state,
        createJobSuccess: false,
      }

    case types.APPLY_NEW_JOB_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case types.APPLY_NEW_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        applyJob: action.payload,
        jobFetchSuccess: true,
      }

    case types.APPLY_NEW_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      }
    case types.FETCH_APPLIED_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case types.FETCH_APPLIED_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalAppliedJobs: action.payload,
        jobFetchSuccess: true,
      }

    case types.FETCH_APPLIED_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      }

    default:
      return state
  }
}
