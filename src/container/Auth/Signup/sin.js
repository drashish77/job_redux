import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import { registerStart } from '../../../Redux/auth/authActions'
import { validation } from '../validation/validation'
// import { registerStart } from '../../../redux/store/auth/authActions'
import './signup.scss'

const Signup = () => {
  const history = useHistory()
  const [errors, setErrors] = useState({})
  const [userRole, setUserRole] = useState(0)

  const [credentials, setCredentials] = useState({
    // userRole: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      // [e.target.name === 'userRole']: parseInt(e.target.value),
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setErrors(validation(credentials))
    // validation()
    const allCredentials = { userRole, ...credentials }

    dispatch(registerStart(allCredentials))
    history.push('/jobs')
  }

  return (
    <div className='container'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className='input'>
            <span>I'm a*</span>
            <div className='buttongroup' onChange={handleChange}>
              <input
                id='recruiter'
                type='radio'
                value={userRole}
                onClick={() => setUserRole(0)}
                name='userRole'
              />
              <label htmlFor='recruiter'>
                <i className='fas fa-user-tie'></i> Recruiter
              </label>
              <input
                id='candidate'
                type='radio'
                value={userRole}
                onClick={() => setUserRole(1)}
                name='userRole'
              />
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
          />
          <Input
            heading='Email Address*'
            name='email'
            type='email'
            value={credentials.email}
            placeholder='Enter your full name'
            handleChange={handleChange}
          />
          <div className='py-2' x-data='{ show: true }'>
            <div className=''>
              <div className='password__section'>
                <Input
                  heading='Password*'
                  name='password'
                  type='password'
                  value={credentials.password}
                  placeholder='Enter your password'
                  handleChange={handleChange}
                >
                  {errors.error && <p className='error w-48'>{errors.error}</p>}
                </Input>
                <Input
                  heading='Confirm Password*'
                  name='confirmPassword'
                  type='password'
                  placeholder='Enter your password'
                  handleChange={handleChange}
                >
                  {errors.error && <p className='error w-48'>{errors.error}</p>}
                </Input>
              </div>
              <Input
                heading='Skills'
                name='skills'
                type='text'
                placeholder='Enter comma separated skills'
                handleChange={handleChange}
              />
              <div className='button_wrap'>
                <Button title='Signup' color='light' onClick={handleSubmit} />
              </div>
              <div className='register'>
                <label className=''>
                  Have an account?
                  <Link to={routes.loginRoute} className=''>
                    <span> Login</span>
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

export default Signup
