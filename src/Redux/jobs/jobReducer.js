import types from './jobActionTypes'

const INITIAL_STATE = {
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
  recruiterJobFetchSuccess: false,
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
      return {
        ...state,
        loading: false,
        totalAvailableJobs: action.payload.metadata.count,
        availableJobs: action.payload.data,
        jobFetchSuccess: true,
      }

    case types.FETCH_CANDIDATE_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobFetchSuccess: false,
        jobs: [],
      }
    case types.FETCH_RECRUITER_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
        recruiterJobFetchSuccess: false,
      }

    case types.FETCH_RECRUITER_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalPostedJobs: action.payload.data.metadata.count,
        postedJobs: action.payload.data.data,
        recruiterJobFetchSuccess: true,
      }

    case types.FETCH_RECRUITER_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recruiterJobFetchSuccess: false,
        jobs: [],
      }
    case types.POST_NEW_JOB_START:
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
        applyJob: null,
        loading: true,
        error: null,
        jobApplicationSuccess: false,
      }

    case types.APPLY_NEW_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        applyJob: action.payload,
        jobApplicationSuccess: true,
      }

    case types.APPLY_NEW_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobApplicationSuccess: false,
      }

    case types.FETCH_APPLIED_JOBS_START:
      return {
        ...state,
        loading: true,
        error: null,
        appliedJobFetchSuccess: false,
      }

    case types.FETCH_APPLIED_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        totalAppliedJobs: action.payload,
        appliedJobFetchSuccess: true,
      }

    case types.FETCH_APPLIED_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        appliedJobFetchSuccess: false,
        jobs: [],
      }
    case types.FETCH_APPLICATIONS_FOR_A_JOB_START:
      return {
        ...state,
        loading: true,
        error: null,
        fetchApplicationSuccess: false,
      }

    case types.FETCH_APPLICATIONS_FOR_A_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        totalJobApplication: action.payload,
        fetchApplicationSuccess: true,
      }

    case types.FETCH_APPLICATIONS_FOR_A_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        fetchApplicationSuccess: false,
        jobs: [],
      }

    default:
      return state
  }
}
