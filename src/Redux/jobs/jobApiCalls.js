import axiosInstance from '../../utils/apiHandler'
export const fetchJOBS = async (payload) => {
  return axiosInstance.get(`/jobs?page=${payload}`)
}
export const fetchAvailableJOBS = (payload) => {
  return axiosInstance.get(`/candidates/jobs?page=${payload.page}`)
}
export const fetchRecruiterPostedJOBS = () => {
  return axiosInstance.get(`/recruiters/jobs`)
}

export const postJOB = async (body, token) => {
  return axiosInstance.post('/jobs/', body)
}

export const fetchAppliedJOBS = async () => {
  return axiosInstance.get('/candidates/jobs/applied')
}

export const fetchApplicationsForAJOB = async (jobId, token) => {
  return axiosInstance.get(`/recruiters/jobs/${jobId}/candidates`)
}
