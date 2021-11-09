import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import { clearErrors, registerStart } from '../../../Redux/auth/authActions'
// import { validation } from '../validation/validation'
// import { registerStart } from '../../../redux/store/auth/authActions'
import './signup.scss'

const Signup = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    userRole: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
  })
  const { userSignupSuccess, signupFailed } = useSelector((state) => state.auth)

  let passwordError =
    signupFailed && signupFailed.find((a) => a.password)?.password

  let ConfirmPasswordError =
    signupFailed && signupFailed.find((a) => a.confirmPassword)?.confirmPassword
  let nameError = signupFailed && signupFailed.find((a) => a.name)?.name

  const dispatch = useDispatch()

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: isNaN(+e.target.value)
        ? e.target.value
        : +e.target.value,
    })
  useEffect(() => {
    return () => {
      dispatch(clearErrors())
    }
  }, [dispatch])
  useEffect(() => {
    if (userSignupSuccess) {
      if (credentials.userRole === 1) {
        history.push(routes.candidates)
      } else if (credentials.userRole === 0) {
        history.push(routes.getPostedJobs)
      } else {
        history.push(routes.jobsRoute)
      }
    }
    return () => {
      dispatch(clearErrors())
    }
  }, [credentials.userRole, dispatch, history, userSignupSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerStart(credentials))
  }

  return (
    <div className='form_container container'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className='input'>
            <span>I'm a*</span>
            <div className='buttongroup' onChange={handleChange}>
              <input id='recruiter' type='radio' value={0} name='userRole' />
              <label htmlFor='recruiter'>
                <i className='fas fa-user-tie'></i> Recruiter
              </label>
              <input id='candidate' type='radio' value={1} name='userRole' />
              <label htmlFor='candidate'>
                <i className='fas fa-users'></i> Candidate
              </label>
            </div>
          </div>
          <Input
            heading='Full name*'
            name='name'
            type='text'
            value={credentials.name}
            placeholder='Enter your full name'
            handleChange={handleChange}
          >
            {signupFailed !== null && (
              <p className='error'>{signupFailed && nameError}</p>
            )}
          </Input>
          <Input
            heading='Email Address*'
            name='email'
            type='email'
            value={credentials.email}
            placeholder='Enter your full name'
            handleChange={handleChange}
          />

          <div className='password__section'>
            <Input
              heading='Password*'
              name='password'
              type='password'
              value={credentials.password}
              placeholder='Enter your password'
              handleChange={handleChange}
            >
              {signupFailed !== null && (
                <p className='error'>{signupFailed && passwordError}</p>
              )}
            </Input>
            <Input
              heading='Confirm Password*'
              name='confirmPassword'
              type='password'
              placeholder='Enter your password'
              handleChange={handleChange}
            >
              {signupFailed !== null && (
                <p className='error'>{signupFailed && ConfirmPasswordError}</p>
              )}
            </Input>
          </div>
          <Input
            heading='Skills'
            name='skills'
            type='text'
            placeholder='Enter comma separated skills'
            handleChange={handleChange}
          >
            {/* {userSignupSuccess === false && (
                <p className='error'>Signup failed</p>
              )} */}
          </Input>
          <div className='button_wrap'>
            <Button title='Signup' color='light' />
          </div>
          <div className='register'>
            <label className=''>
              Have an account?
              <Link to={routes.loginRoute} className=''>
                <span> Login</span>
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
