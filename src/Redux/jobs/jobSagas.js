import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import routes, { BASE_URL } from '../../config/config'
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
} from './jobActions'
import { getApiResponse } from '../../utils/apiHandler'
import types from './jobActionTypes'

const fetchJOBS = async () => {
  return axios.get(`${BASE_URL}${routes.jobsRoute}`)
}
const fetchAvailableJOBS = async (token) => {
  console.log(token)
  let url = `${BASE_URL}/candidates/jobs`
  let method = 'GET'
  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.get(url, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}
const fetchRecruiterPostedJOBS = async (token) => {
  console.log(token)
  let url = `${BASE_URL}/recruiters/jobs`
  let method = 'GET'
  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.get(url, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}

export function* fetchJobs({ payload }) {
  try {
    const response = yield call(fetchJOBS)
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
    yield put(fetchCandidateJobsSuccess(response.data.data))
  } catch (error) {
    yield put(fetchCandidateJobsFailure(error))
  }
}
export function* fetchRecruiterPostedJobs({ payload }) {
  console.log(payload)
  try {
    const response = yield call(fetchRecruiterPostedJOBS, payload)
    console.log(response)
    yield put(fetchRecruiterJobsSuccess(response.data.data))
  } catch (error) {
    yield put(fetchRecruiterJobsFailure(error))
  }
}

const postJOB = async (body, token) => {
  console.log(body, token)
  let url = `${BASE_URL}/jobs/`

  let headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  return await axios.post(url, body, {
    headers: headers,
  })
  // return getApiResponse(url, { method, headers })
}
export function* postAJob({ payload }) {
  console.log(payload)
  try {
    const response = yield call(postJOB, payload.data, payload.token)
    console.log(response)
    yield put(postNewJobSuccess(response.data.data))
  } catch (error) {
    yield put(postNewJobFailure(error))
  }
}
function* onPostJobsStart() {
  yield takeLatest(types.POST_NEW_JOB_START, postAJob)
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

export function* jobSagas() {
  yield all([
    call(onFetchStart),
    call(onFetchAvailableJobsStart),
    call(onFetchPostedJobsStart),
    call(onPostJobsStart),
  ])
}
