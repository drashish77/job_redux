import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import {
  clearPostNewJob,
  postNewJobBegin,
} from '../../../Redux/jobs/jobActions'
import './PostAJob.scss'
const PostAJob = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState({
    title: '',
    description: '',
    location: '',
  })
  const { createJobSuccess } = useSelector((state) => state.jobs)
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
    dispatch(postNewJobBegin({ data: credentials, token: token }))
  }

  // useEffect(() => {
  //   dispatch(postNewJobBegin(body))
  // }, [])
  return (
    <div className='postAJob'>
      <Helmet>
        <title>Post a Job</title>
        <meta name='description' content='here you can Post a Job' />
      </Helmet>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2 id='postJob'>Post a Job</h2>
          <Input
            heading='Job title*'
            name='title'
            type='text'
            value={credentials.title}
            placeholder='Enter job title'
            handleChange={handleChange}
          >
            {/* {error && <p className='error'>{error[0]?.email}</p>} */}
          </Input>
          <div className='py-2' x-data='{ show: true }'>
            <div className='relative'>
              <Input
                heading='Description*'
                name='description'
                type='text'
                value={credentials.description}
                placeholder='Enter job description'
                handleChange={handleChange}
              >
                {/* <p className='error'>{errors && errors.error}</p> */}
                {/* {errors && <span className='error w-48'>{errors[0]}</span>}
              {errorMessage && (
                <span className='error w-48'>{errorMessage}</span>
              )} */}
              </Input>

              <Input
                heading='Location*'
                name='location'
                type='text'
                value={credentials.location}
                placeholder='Enter location'
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
