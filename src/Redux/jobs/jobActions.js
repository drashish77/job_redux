import types from './jobActionTypes'

//ALL jobs fetching
export const fetchJobsBegin = (data) => ({
  type: types.FETCH_JOBS_START,
  payload: data,
})

export const fetchJobsSuccess = (jobs) => ({
  type: types.FETCH_JOBS_SUCCESS,
  payload: { jobs },
})

export const fetchJobsFailure = (error) => ({
  type: types.FETCH_JOBS_FAILURE,
  payload: { error },
})

//fetching available jobs for candidate
export const fetchCandidateJobsBegin = (token) => ({
  type: types.FETCH_CANDIDATE_JOBS_START,
  payload: token,
})
export const fetchCandidateJobsSuccess = (data) => ({
  type: types.FETCH_CANDIDATE_JOBS_SUCCESS,
  payload: data,
})
export const fetchCandidateJobsFailure = (error) => ({
  type: types.FETCH_CANDIDATE_JOBS_FAILURE,
  payload: error,
})
//fetching job posted by recruiter
export const fetchRecruiterJobsBegin = (token) => ({
  type: types.FETCH_RECRUITER_JOBS_START,
  payload: token,
})
export const fetchRecruiterJobsSuccess = (token) => ({
  type: types.FETCH_RECRUITER_JOBS_SUCCESS,
  payload: token,
})
export const fetchRecruiterJobsFailure = (token) => ({
  type: types.FETCH_RECRUITER_JOBS_FAILURE,
  payload: token,
})
//post a new job by recruiter
export const postNewJobBegin = (data) => ({
  type: types.POST_NEW_JOB_START,
  payload: data,
})

export const postNewJobSuccess = (data) => ({
  type: types.POST_NEW_JOB_SUCCESS,
  payload: data,
})

export const postNewJobFailure = (error) => ({
  type: types.POST_NEW_JOB_FAILURE,
  payload: error,
})
export const clearPostNewJob = () => ({
  type: types.CLEAR_POST_NEW_JOB,
})

//fetch all applied job by a candidate
export const fetchAppliedJobsBegin = () => ({
  type: types.FETCH_APPLIED_JOBS_START,
})

export const fetchAppliedJobsSuccess = (data) => ({
  type: types.FETCH_APPLIED_JOBS_SUCCESS,
  payload: { data },
})

export const fetchAppliedJobsFailure = (error) => ({
  type: types.FETCH_APPLIED_JOBS_FAILURE,
  payload: { error },
})

//apply a job by candidate
export const applyNewJobBegin = (data) => ({
  type: types.APPLY_NEW_JOB_START,
  payload: { data },
})

export const applyNewJobSuccess = (data) => ({
  type: types.APPLY_NEW_JOB_SUCCESS,
  payload: { data },
})

export const applyNewJobFailure = (error) => ({
  type: types.APPLY_NEW_JOB_FAILURE,
  payload: { error },
})
