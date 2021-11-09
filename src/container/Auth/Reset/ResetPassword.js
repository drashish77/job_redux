import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input2'
import routes from '../../../config/config'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearErrors,
  clearState,
  resetPasswordStart,
} from '../../../Redux/auth/authActions'

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()
  const { resetSuccess, errorMessage, resetToken } = useSelector(
    (state) => state.auth
  )

  const history = useHistory()

  useEffect(() => {
    resetSuccess && history.push(routes.loginRoute)
    return () => {
      dispatch(clearState())
      dispatch(clearErrors())
    }
  }, [dispatch, history, resetSuccess])

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  function handleSubmit(e) {
    e.preventDefault()

    dispatch(
      resetPasswordStart({
        password: credentials.password,
        confirmPassword: credentials.confirmPassword,
        token: resetToken,
      })
    )
  }
  return (
    <div className='form_container container'>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h2>Reset Your Password</h2>
          <p>Enter your new password below.</p>
          <Input
            heading='New password'
            name='password'
            type='password'
            value={credentials.password}
            placeholder='Enter your password'
            handleChange={handleChange}
          />
          <Input
            heading='Confirm new password'
            name='confirmPassword'
            type='password'
            value={credentials.confirmPassword}
            placeholder='Enter your password'
            handleChange={handleChange}
          >
            {errorMessage && <p className='error'>{errorMessage}</p>}
          </Input>
          <Button title='Submit' color='light' />
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
