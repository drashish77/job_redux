import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import routes, { BASE_URL } from '../../config/config'
import {
  forgetPasswordFailure,
  forgetPasswordSuccess,
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
  resetPasswordFailure,
  resetPasswordSuccess,
} from './authActions'

import types from './authActionTypes'
import { toast } from 'react-toastify'

const logIn = async (email, password) => {
  return axios.post(`${BASE_URL}${routes.loginRoute}`, {
    email,
    password,
  })
  // return { token: response.data.accessToken }
}

const register = async (
  userRole,
  name,
  email,
  password,
  confirmPassword,
  skills
) => {
  await axios.post(`${BASE_URL}${routes.registerRoute}`, {
    userRole,
    name,
    email,
    password,
    confirmPassword,
    skills,
  })
}
const forgetPassword = async (email) => {
  return axios.get(`${BASE_URL}${routes.resetPassword}?email=${email}`)
  // return { token: response.data.accessToken }
}
const resetPassword = async (password, confirmPassword, token) => {
  return axios.post(`${BASE_URL}${routes.resetPassword}`, {
    password,
    confirmPassword,
    token,
  })
  // return { token: response.data.accessToken }
}
export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield call(logIn, email, password)
    console.log(user && user.data.success)
    if (user && user.data.success) {
      yield put(logInSuccess(user.data.data))
    }
    toast.success('Login Successful!')
  } catch (error) {
    yield put(logInFailure(error.response.data))
  }
}
export function* forgetPasswordWithEmail({ payload }) {
  try {
    const user = yield call(forgetPassword, payload)
    yield put(forgetPasswordSuccess(user.data?.data))
  } catch (error) {
    yield put(forgetPasswordFailure(error.response.data))
  }
}
export function* resetPasswordWithToken({
  payload: { password, confirmPassword, token },
}) {
  try {
    const user = yield call(resetPassword, password, confirmPassword, token)
    yield put(resetPasswordSuccess(user.data?.data))
  } catch (error) {
    yield put(resetPasswordFailure(error.response.data))
  }
}

export function* registerWithCredentials({
  payload: { userRole, name, email, password, confirmPassword, skills },
}) {
  try {
    // yield register(userRole, name, email, password, confirmPassword, skills)
    yield call(
      register,
      userRole,
      name,
      email,
      password,
      confirmPassword,
      skills
    )
    yield put(
      registerSuccess({
        userRole,
        name,
        email,
        password,
        confirmPassword,
        skills,
      })
    )
    toast.success('Signup Successful!')
  } catch (error) {
    console.log(error)
    yield put(registerFailure(error))
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } })
}
export function* logInAfterReset({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } })
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials)
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials)
}
export function* onForgetStart() {
  yield takeLatest(types.FORGOT_PASSWORD_START, forgetPasswordWithEmail)
}
export function* onResetStart() {
  yield takeLatest(types.RESET_PASSWORD_START, resetPasswordWithToken)
}
export function* onResetSuccess() {
  yield takeLatest(types.RESET_PASSWORD_SUCCESS)
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister)
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
    call(onForgetStart),
    call(onResetStart),
    // call(onResetSuccess),
  ])
}
