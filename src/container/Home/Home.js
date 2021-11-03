import './Home.scss'
import Button from '../../components/Button/Button'
import Section3 from './Section3'
import Section2 from './Section2'
import { useHistory } from 'react-router'
import routes from '../../config/config'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
const Home2 = () => {
  const history = useHistory()
  const { currentUser } = useSelector((state) => state.auth)

  const fetchJobHandler = () => {
    if (currentUser && currentUser.userRole === 1) {
      history.push(routes.getAvailableJobs)
    } else if (currentUser && currentUser.userRole === 0) {
      history.push(routes.getPostedJobs)
    } else {
      history.push(routes.loginRoute)
    }
  }
  return (
    <div className='home'>
      <Helmet>
        <title>🏠 Job Portal</title>
        <meta name='description' content='This is job portal home page' />
      </Helmet>
      <div className='wrapper'>
        <div className='main__section'>
          <div className='heading'>
            <div className='heading_inner'>
              <h1>Welcome to</h1>
              <h1>
                My<span>Jobs</span>
              </h1>
            </div>
            <Button
              title='Get Started'
              color='btn-light'
              onClick={fetchJobHandler}
            />
          </div>

          <div className='img2'>
            <img
              src='https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
              className=''
              alt=''
            />
          </div>
        </div>
        <div className='section__two'>
          <Section2 />
        </div>
        <div className='section__three'>
          <Section3 />
        </div>
      </div>
    </div>
  )
}

export default Home2
