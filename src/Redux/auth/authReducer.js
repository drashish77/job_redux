import types from './authActionTypes'

const INITIAL_STATE = {
  loginFailed: null,
  currentUser: null,
  error: null,
  errorMessage: null,
  userLoginSuccess: false,
  userSignupSuccess: false,
  resetSuccess: false,
  resetPasswordData: false,
  forgotSuccess: false,
  resetToken: null,
  signupFailed: null,
}
const persistLogin = (token, userRole, email, name) => {
  localStorage.setItem('token', token)
  localStorage.setItem('userRole', userRole)
  localStorage.setItem('email', email)
  localStorage.setItem('name', name)
}
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_START: {
      return {
        ...state,
        currentUser: null,
      }
    }
    case types.LOG_IN_SUCCESS: {
      let { email, token, name, userRole } = action.payload
      persistLogin(token, userRole, email, name)

      return {
        ...state,
        currentUser: action.payload,
        userLoginSuccess: true,
      }
    }

    case types.LOG_IN_FAILURE: {
      return {
        ...state,
        error: action.payload.errors,
        errorMessage: action.payload,
        userLoginSuccess: false,
      }
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        error: action.payload,
        userSignupSuccess: true,
      }
    }
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        userSignupSuccess: false,
        signupFailed: action.payload,
      }
    case types.LOG_OUT:
      return INITIAL_STATE

    case types.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        errorMessage: null,
        signupFailed: null,
      }

    case types.FORGOT_PASSWORD_SUCCESS: {
      //  localStorage.setItem('token', token)

      return {
        ...state,
        // currentUser: action.payload,
        resetToken: action.payload.token,
        forgotSuccess: true,
      }
    }
    case types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload.errors,
        errorMessage: action.payload,
        forgotSuccess: false,
      }
    case types.RESET_PASSWORD_START: {
      return {
        ...state,
        // currentUser: action.payload,
      }
    }
    case types.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordData: action.payload,
        resetSuccess: true,
      }
    }
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload.errors,
        errorMessage: action.payload,
        resetSuccess: false,
      }
    case types.CLEAR_STATE:
      return {
        ...state,
        resetSuccess: false,
        forgotSuccess: false,
      }

    default:
      return state
  }
}

export default authReducer
