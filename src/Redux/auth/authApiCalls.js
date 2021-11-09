import routes from '../../config/config'
import axiosInstance from '../../utils/apiHandler'

export const logIn = async (email, password) => {
  const body = { email, password }
  return axiosInstance.post(`${routes.loginRoute}`, body)
}

export const register = async (
  userRole,
  name,
  email,
  password,
  confirmPassword,
  skills
) => {
  const body = { userRole, name, email, password, confirmPassword, skills }
  return axiosInstance.post(`${routes.registerRoute}`, body)
}

export const forgetPassword = async (email) => {
  return axiosInstance.get(`${routes.resetPassword}?email=${email}`)
}
export const resetPassword = async (password, confirmPassword, token) => {
  const body = { password, confirmPassword, token }
  return axiosInstance.post(`${routes.resetPassword}`, body)
}
