import types from './authActionTypes'

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,
})

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
})

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
})

export const forgetPasswordStart = (credentials) => ({
  type: types.FORGOT_PASSWORD_START,
  payload: credentials,
})

export const forgetPasswordSuccess = (email) => ({
  type: types.FORGOT_PASSWORD_SUCCESS,
  payload: email,
})

export const forgetPasswordFailure = (error) => ({
  type: types.FORGOT_PASSWORD_FAILURE,
  payload: error,
})
export const registerStart = (credentials) => ({
  type: types.REGISTER_START,
  payload: credentials,
})

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
})

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
})

export const logOut = () => ({
  type: types.LOG_OUT,
})

export const clearErrors = () => ({
  type: types.CLEAR_ERRORS,
})
export const clearState = () => ({
  type: types.CLEAR_STATE,
})

export const resetPasswordStart = (credentials) => ({
  type: types.RESET_PASSWORD_START,
  payload: credentials,
})

export const resetPasswordSuccess = (user) => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload: user,
})

export const resetPasswordFailure = (error) => ({
  type: types.RESET_PASSWORD_FAILURE,
  payload: error,
})
