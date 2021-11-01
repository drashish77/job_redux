import routes from '../../config/config'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useClickOutside } from '../../Hooks/useJobs'
import './header.scss'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../Redux/auth/authActions'
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
  }
  const postAJobHandler = () => history.push(routes.createNewJob)
  const applyAJobHandler = () => history.push(routes.applyForAJob)
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
                      <div className='nav_form'>
                        <Button color='dark' title='Recruiter' />
                        <Button
                          color='dark'
                          title='Post a Job'
                          onClick={postAJobHandler}
                        />
                      </div>
                    ) : (
                      <div className='nav_form'>
                        <Button color='dark' title='Candidate' />
                        <Button
                          color='dark'
                          title='Applied Jobs'
                          onClick={applyAJobHandler}
                        />
                      </div>
                    ))}
                </div>
                <div className='menu__left'>
                  {currentUser && currentUser.name[0]}
                </div>
              </div>
            ) : null}

            {currentUser && currentUser.token ? (
              <Button title='Logout' color='dark' onClick={logout} />
            ) : (
              <>
                <Button title='Login' color='dark' onClick={login} />
              </>
            )}
          </div>
        </div>
        <div
          className='burger'
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
