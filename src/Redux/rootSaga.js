import { all, call, fork } from 'redux-saga/effects'

import { authSagas } from './auth/authSagas'
import { jobSagas } from './jobs/jobSagas'

export default function* rootSaga() {
  // yield all([call(authSagas)])
  yield fork(authSagas)
  yield fork(jobSagas)
}
