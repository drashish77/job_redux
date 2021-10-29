import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes, { BASE_URL } from '../../../config/config'
import { clearErrors, logInStart } from '../../../Redux/auth/authActions'
import './Login.scss'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()
  const { userLoginSuccess, currentUser, error, errorMessage } = useSelector(
    (state) => state.auth
  )
  console.log(currentUser)
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  useEffect(() => {
    if (userLoginSuccess) {
      localStorage.setItem('userData', JSON.stringify(currentUser))
      if (currentUser.userRole === 1) {
        history.push(routes.candidates)
      } else if (currentUser.userRole === 0) {
        history.push(routes.getPostedJobs)
      } else {
        history.push(routes.jobsRoute)
      }
    }
  }, [history, currentUser, userLoginSuccess])
  useEffect(() => {
    return () => {
      dispatch(clearErrors())
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInStart(credentials))
    // history.push(routes.jobsRoute)
  }
  // console.log(error[0].email)
  return (
    <div className='container'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
                heading='Password*'
                name='password'
                type='password'
                value={credentials.password}
                placeholder='Enter your password'
                handleChange={handleChange}
              >
                {/* <p className='error'>{errors && errors.error}</p> */}
                {errors && <span className='error w-48'>{errors[0]}</span>}
                {errorMessage && (
                  <span className='error w-48'>{errorMessage}</span>
                )}
              </Input>
              <div className='after__password'>
                <label className=''>
                  <Link to={routes.forgetPassword} className=''>
                    <span>Forgot your password?</span>
                  </Link>
                </label>
              </div>
              <div className='button_wrap'>
                <Button title='Login' color='light' />
              </div>
              <div className='register'>
                <label className=''>
                  New to MyJobs?
                  <Link to={routes.registerRoute} className=''>
                    <span> Create new Account?</span>
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
