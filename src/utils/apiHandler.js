import axios from 'axios'
import { get } from 'lodash'
// import { generateApiSecret } from '../utilities/apiSecret'
const axiosConfiguration = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
  })
const axiosInstance = axiosConfiguration()
axiosInstance.interceptors.request.use(async (config) => {
  const { initializeStore } = await import('../Redux/store.js')
  const state = initializeStore().getState()
  const token = state.auth.currentUser ? state.auth.currentUser.token : ''

  config.headers = {
    Accept: 'application/json',
    Authorization: token,
    'Access-Control-Allow-Origin': '*',
  }
  return config
})
axiosInstance.interceptors.response.use(
  async (response) => {
    return response
  },
  (err) => {
    if (err?.response?.status == 500) {
      window.location = '/_500'
    }
    return err.response
  }
)
export default axiosInstance
