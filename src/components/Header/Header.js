import routes from '../../config/config'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useClickOutside } from '../../Hooks/useJobs'
import './header.scss'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../Redux/auth/authActions'
import { toast } from 'react-toastify'

const Header = (props) => {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()

  const { currentUser } = useSelector((state) => state.auth)

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

  const logout = () => {
    dispatch(logOut())
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('userData')
    history.push(routes.rootRoute)
    toast.success('Successfully Logged out')
  }
  const postAJobHandler = () => history.push(routes.createNewJob)
  const applyAJobHandler = () => history.push(routes.getAlreadyAppliedJobs)
  return (
    <div>
      <div className='header' ref={menuRef}>
        <div className='header__logo' onClick={root}>
          <h2>
            My<span className=''>Jobs</span>
          </h2>
        </div>

        {/* <div
          className='burger'
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <i className='fas fa-bars'></i>
        </div> */}

        <div className=''>
          <div className={isActive ? 'navbar__left-active' : 'navbar__left'}>
            {/* {state?.userLoginSuccess ? <div></div>} */}
            {currentUser ? (
              <div className='nav__left_wrap'>
                <div className='nav__left_wrap_inner'>
                  {currentUser &&
                    currentUser.token &&
                    (currentUser.userRole === 0 ? (
                      <div className='nav_form stroke'>
                        <p onClick={postAJobHandler}>Post a Job</p>
                      </div>
                    ) : (
                      <div className='nav_form'>
                        <p onClick={applyAJobHandler}>Applied Jobs</p>
                      </div>
                    ))}
                </div>
                <div className='menu__left'>
                  <span>{currentUser && currentUser.name[0]}</span>
                </div>
              </div>
            ) : null}

            {currentUser && currentUser.token ? (
              <div className='wrapper_dropdown'>
                <label>
                  <i className='fas fa-caret-down'></i>
                </label>
                <ul>
                  <li onClick={logout}>Logout</li>
                </ul>
                {/* <Button title='Logout' color='dark' onClick={logout} /> */}
              </div>
            ) : (
              <>
                <Button title='Login/Signup' color='dark' onClick={login} />
              </>
            )}
          </div>
        </div>
        {/* <div
          className='burger'
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <i className='fas fa-bars'></i>
        </div> */}
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default Header
