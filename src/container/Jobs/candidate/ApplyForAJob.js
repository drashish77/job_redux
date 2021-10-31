import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import {
  applyNewJobBegin,
  clearPostNewJob,
  postNewJobBegin,
} from '../../../Redux/jobs/jobActions'
import './PostAJob.scss'
const PostAJob = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    skills: '',
  })
  const { createJobSuccess } = useSelector((state) => state.jobs)
  const { currentUser } = useSelector((state) => state.auth)
  console.log()
  useEffect(() => {
    if (createJobSuccess) {
      history.push(routes.getPostedJobs)
      dispatch(clearPostNewJob())
    }
  }, [createJobSuccess])
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  const token = localStorage.getItem('token')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(applyNewJobBegin({ data: credentials, token: token }))
  }

  // useEffect(() => {
  //   dispatch(postNewJobBegin(body))
  // }, [])
  return (
    <div className='postAJob'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Post a Job</h2>
          <Input
            heading='Job title*'
            name='name'
            type='text'
            value={credentials.name}
            placeholder='Enter your name'
            handleChange={handleChange}
          >
            {/* {error && <p className='error'>{error[0]?.email}</p>} */}
          </Input>
          <Input
            heading='Email Address'
            name='email'
            type='email'
            value={credentials.email}
            placeholder='Enter your full name'
            handleChange={handleChange}
          >
            {error && <p className='error'>{error[0]?.email}</p>}
          </Input>
          <div className='py-2' x-data='{ show: true }'>
            <div className='relative'>
              <Input
                heading='Location*'
                name='skills'
                type='text'
                value={credentials.skills}
                placeholder='Enter your skills'
                handleChange={handleChange}
              >
                {/* <p className='error'>{errors && errors.error}</p> */}
                {/* {errors && <span className='error w-48'>{errors[0]}</span>}
              {errorMessage && (
                <span className='error w-48'>{errorMessage}</span>
              )} */}
              </Input>

              <div className='button_wrap'>
                <Button title='Post' color='light' />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostAJob
