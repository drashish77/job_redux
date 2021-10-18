import routes from '../../config/config'
import { useHistory } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../../Hooks/useJobs'
import './header.scss'
import Button from '../Button/Button'
const Header = (props) => {
  const [isActive, setIsActive] = useState(false)

  let menuRef = useClickOutside(() => {
    setIsActive(false)
  })
  const history = useHistory()
  const root = () => {
    history.push(routes.rootRoute)
  }
  const login = () => {
    history.push(routes.loginRoute)
  }
  const admin = () => {
    history.push(routes.jobsRoute)
  }
  const signup = () => {
    history.push(routes.registerRoute)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('resetToken')
    history.push(routes.rootRoute)
  }
  return (
    <div>
      <div className='header' ref={menuRef}>
        <div className='header__logo' onClick={root}>
          <h2>
            My<span className=''>Jobs</span>
          </h2>
        </div>

        <div className='navbar__left'>
          {localStorage.getItem('name') ? (
            <div className='menu__left'>{localStorage.getItem('name')[0]}</div>
          ) : null}

          {localStorage.getItem('token') ? (
            <button className='menu__button' onClick={logout}>
              <i className='fas fa-user-injured'></i>
              <p className='header__text'>Logout</p>
            </button>
          ) : (
            <>
              <Button title='Login/Logout' color='dark' onClick={login}>
                <i className='fas fa-sign-in-alt'></i>
              </Button>
            </>
          )}
        </div>

        <div
          className='hamburger'
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <i className='fas fa-bars'></i>
        </div>
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default Header
