import { Route, Switch } from 'react-router-dom'

import Home from './container/Home/Home'
import Header from './components/Header/Header'
import './App.scss'
import Login from './container/Auth/Login/Login'
import routes from './config/config'
import ForgotPassword from './container/Auth/Forgot/ForgotPassword'
import ResetPassword from './container/Auth/Reset/ResetPassword'
import Signup from './container/Auth/Signup/Signup'
import AvailableJobs from './container/Jobs/candidate/AvailableJobs'
import AppliedJob from './container/Jobs/candidate/AppliedJob'
import JobCreated from './container/Jobs/recruiter/JobCreated'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import AllJobs from './container/Jobs/AllJobs'
import PostAJob from './container/Jobs/recruiter/PostAJob'
import RecruitersJobs from './container/Jobs/recruiter/RecruiterJobs'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className='app'>
      <HelmetProvider>
        <Header />
        <ToastContainer />
        <Helmet>
          <title>JOB-portal</title>
          <meta name='description' content='Get and post jobs' />
          <meta name='keywords' content='job, jobs, employment, naukri' />
        </Helmet>
        <Switch>
          <Route path='/auth/login' component={Login} />
          <PrivateRoute
            path={routes.getAlreadyAppliedJobs}
            component={AppliedJob}
          />
          <Route path='/auth/logout' component={Login} />
          <Route path={routes.registerRoute} component={Signup} />
          {/* <Route path={routes.jobsRoute} component={AllJobs} /> */}
          <Route path={routes.forgetPassword} component={ForgotPassword} />
          <Route path={routes.resetPassword} component={ResetPassword} />
          <PrivateRoute
            path={routes.getAlreadyAppliedJobs}
            component={AppliedJob}
          />
          <PrivateRoute path={routes.candidates} component={AvailableJobs} />
          <PrivateRoute
            path={routes.getAvailableJobs}
            component={AvailableJobs}
          />
          <PrivateRoute
            path={routes.getPostedJobs}
            component={RecruitersJobs}
          />
          <PrivateRoute path={routes.createNewJob} component={PostAJob} />
          {/* <Route path={routes.createNewJob} component={PostAJob} /> */}
          <Route path='/' component={Home} exact />
        </Switch>
      </HelmetProvider>
    </div>
  )
}

export default App
