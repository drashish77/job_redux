import axios from 'axios'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import routes from '../../config/config'
import {
  fetchJobsBegin,
  fetchJobsSuccess,
  fetchJobsFailure,
  postNewJobBegin,
  postNewJobSuccess,
  postNewJobFailure,
  applyNewJobBegin,
  applyNewJobSuccess,
  applyNewJobFailure,
  fetchAppliedJobsBegin,
  fetchAppliedJobsSuccess,
  fetchAppliedJobsFailure,
  fetchCandidateJobsSuccess,
  fetchCandidateJobsFailure,
  fetchRecruiterJobsSuccess,
  fetchRecruiterJobsFailure,
  fetchCandidateJobsBegin,
  fetchApplicationForAJobSuccess,
  fetchApplicationForAJobFailure,
} from './jobActions'
import { getApiResponse } from '../../utils/apiHandler'
import types from './jobActionTypes'
import { toast } from 'react-toastify'

const fetchJOBS = async (payload) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/jobs?page=${payload}`)
}
const fetchAvailableJOBS = async (payload) => {
  let url = `${process.env.REACT_APP_BASE_URL}/candidates/jobs?page=${payload.page}`

  let headers = {
    'Content-Type': 'application/json',
    Authorization: payload.token,
  }
  return await axios.get(url, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}
const fetchRecruiterPostedJOBS = async (payload) => {
  let url = `${process.env.REACT_APP_BASE_URL}/recruiters/jobs?page=${payload.page}`

  let headers = {
    'Content-Type': 'application/json',
    Authorization: payload.token,
  }
  return await axios.get(url, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}
const postJOB = async (body, token) => {
  let url = `${process.env.REACT_APP_BASE_URL}/jobs/`

  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.post(url, body, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}

const fetchAppliedJOBS = async (token) => {
  let url = `${process.env.REACT_APP_BASE_URL}/candidates/jobs/applied`
  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.get(url, {
    headers: headers,
  })
}
const fetchApplicationsForAJOB = async (jobId, token) => {
  let url = `${process.env.REACT_APP_BASE_URL}/recruiters/jobs/${jobId}/candidates`
  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.get(url, {
    headers: headers,
  })
}
export function* fetchApplicationsForAJob({ payload }) {
  try {
    const response = yield call(
      fetchApplicationsForAJOB,
      payload.jobId,
      payload.token
    )
    if (response && response.data) {
      yield put(fetchApplicationForAJobSuccess(response.data.data))
    }
    toast.success('Job application successfully showing')
  } catch (error) {
    yield put(fetchApplicationForAJobFailure(error))
  }
}
export function* fetchAppliedJobs({ payload }) {
  try {
    const response = yield call(fetchAppliedJOBS, payload.token)
    yield put(fetchAppliedJobsSuccess(response.data.data))
  } catch (error) {
    yield put(fetchAppliedJobsFailure(error))
  }
}
export function* fetchJobs({ payload }) {
  try {
    const response = yield call(fetchJOBS, payload.page)
    if (response) {
      yield put(fetchJobsSuccess(response.data))
    }
  } catch (error) {
    yield put(fetchJobsFailure(error))
  }
}
export function* fetchAvailableJobs({ payload }) {
  try {
    const response = yield call(fetchAvailableJOBS, payload)

    yield put(fetchCandidateJobsSuccess(response.data))
  } catch (error) {
    yield put(fetchCandidateJobsFailure(error))
  }
}
export function* fetchRecruiterPostedJobs({ payload }) {
  try {
    const response = yield call(fetchRecruiterPostedJOBS, payload)

    yield put(fetchRecruiterJobsSuccess(response.data))
  } catch (error) {
    yield put(fetchRecruiterJobsFailure(error))
  }
}

export function* postAJob({ payload }) {
  try {
    const response = yield call(postJOB, payload.data, payload.token)
    if (response && response.data) {
      yield put(postNewJobSuccess(response.data.data))
    }
    toast.success('Job created successfully')
  } catch (error) {
    toast.success('Job creation failed')
    yield put(postNewJobFailure(error))
  }
}

const ApplyAJOB = async (body, token) => {
  var data = JSON.stringify({
    jobId: body,
  })

  let url = `${process.env.REACT_APP_BASE_URL}/candidates/jobs`

  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.post(url, data, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}

export function* applyAJob({ payload }) {
  try {
    const response = yield call(
      ApplyAJOB,
      payload.data.body.jobId,
      payload.data.body.token
    )

    if (response && response.data) {
      yield put(applyNewJobSuccess(response.data.data))
      const payloadNew = {
        token: payload.data.body.token,
        page: payload.data.currentPage,
      }

      yield put(fetchCandidateJobsBegin(payloadNew))
      toast.success('Job application successful')
    }
  } catch (error) {
    toast.error('Job application failed')
    yield put(applyNewJobFailure(error))
  }
}
function* onPostJobsStart() {
  yield takeLatest(types.POST_NEW_JOB_START, postAJob)
}
function* onApplyJobStart() {
  yield takeLatest(types.APPLY_NEW_JOB_START, applyAJob)
}

function* onFetchStart() {
  yield takeLatest(types.FETCH_JOBS_START, fetchJobs)
}

function* onFetchAvailableJobsStart() {
  yield takeLatest(types.FETCH_CANDIDATE_JOBS_START, fetchAvailableJobs)
}
function* onFetchPostedJobsStart() {
  yield takeLatest(types.FETCH_RECRUITER_JOBS_START, fetchRecruiterPostedJobs)
}
function* onFetchApplyJobsStart() {
  yield takeLatest(types.FETCH_APPLIED_JOBS_START, fetchAppliedJobs)
}
function* onFetchApplicationForAJobStart() {
  yield takeLatest(
    types.FETCH_APPLICATIONS_FOR_A_JOB_START,
    fetchApplicationsForAJob
  )
}

export function* jobSagas() {
  yield all([
    call(onFetchStart),
    call(onFetchAvailableJobsStart),
    call(onFetchPostedJobsStart),
    call(onPostJobsStart),
    call(onApplyJobStart),
    call(onFetchApplyJobsStart),
    call(onFetchApplicationForAJobStart),
  ])
}
