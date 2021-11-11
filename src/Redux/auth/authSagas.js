import { all, call, put, takeLatest } from 'redux-saga/effects'

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
import { logIn, forgetPassword, register, resetPassword } from './authApiCalls'

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield call(logIn, email, password)
    console.log(user)
    if (user && user.data.success) {
      toast.success('Login Success!')

      yield put(logInSuccess(user.data.data))
    } else {
      yield put(logInFailure(user.data.message))
      toast.error('Login Failed!')
    }
  } catch (error) {
    yield put(logInFailure(error.response.data))
  }
}
export function* registerWithCredentials({
  payload: { userRole, name, email, password, confirmPassword, skills },
}) {
  try {
    const user = yield call(
      register,
      userRole,
      name,
      email,
      password,
      confirmPassword,
      skills
    )

    if (user && user.data.success) {
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
    } else {
      toast.error('Signup failed!')
      yield put(registerFailure(user.data.errors))
    }
  } catch (error) {
    toast.error('Signup failed!')
    yield put(registerFailure(error))
  }
}
export function* forgetPasswordWithEmail({ payload }) {
  try {
    const user = yield call(forgetPassword, payload)
    if (user && user.data.success) {
      yield put(forgetPasswordSuccess(user.data?.data))
    } else {
      yield put(forgetPasswordFailure(user.data.message))
    }
  } catch (error) {
    yield put(forgetPasswordFailure(error))
  }
}
export function* resetPasswordWithToken({
  payload: { password, confirmPassword, token },
}) {
  try {
    const user = yield call(resetPassword, password, confirmPassword, token)
    if (user && user.data.success) {
      yield put(resetPasswordSuccess(user.data?.data))
    } else {
      console.log(user.data.message)
      yield put(resetPasswordFailure(user.data.message))
    }
  } catch (error) {
    yield put(resetPasswordFailure(error))
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
