import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import { useDispatch, useSelector } from 'react-redux'
import { onForgetStart } from '../../../Redux/auth/authSagas'
import {
  clearState,
  forgetPasswordStart,
} from '../../../Redux/auth/authActions'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const state = useSelector((state) => state.auth)

  useEffect(() => {
    state.forgotSuccess && history.push(routes.resetPassword)
    return () => {
      dispatch(clearState())
    }
  }, [state.forgotSuccess])

  const handleChange = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // localStorage.setItem('token')
    dispatch(forgetPasswordStart(email))
  }
  return (
    <div className='container'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Forgot your password?</h2>
          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <Input
            heading='Email Address'
            name='email'
            type='email'
            values={email}
            placeholder='Enter your email'
            handleChange={handleChange}
          >
            {state?.errorMessage && (
              <p className='error'>{state?.errorMessage}</p>
            )}
          </Input>
          <Button title='Submit' color='light' />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
