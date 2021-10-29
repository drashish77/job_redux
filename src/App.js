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

import AllJobs from './container/Jobs/AllJobs'
import PostAJob from './container/Jobs/recruiter/PostAJob'
import RecruitersJobs from './container/Jobs/recruiter/RecruiterJobs'
function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/logout' component={Login} />
        <Route path={routes.registerRoute} component={Signup} />
        <Route path={routes.jobsRoute} component={AllJobs} />
        <Route path={routes.forgetPassword} component={ForgotPassword} />
        <Route path={routes.resetPassword} component={ResetPassword} />
        <Route path={routes.applyForAJob} component={AppliedJob} />
        <Route path={routes.candidates} component={AvailableJobs} />
        <Route path={routes.getAvailableJobs} component={AvailableJobs} />
        <Route path={routes.getPostedJobs} component={RecruitersJobs} />
        <Route path={routes.createNewJob} component={PostAJob} />
        {/* <Route path={routes.createNewJob} component={PostAJob} /> */}
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  )
}

export default App
