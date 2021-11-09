import React from 'react'
// import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const {auth} = useSelector(state => state.auth)

  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
