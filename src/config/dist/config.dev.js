"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BASE_URL = void 0;
var BASE_URL = "https://jobs-api.squareboat.info/api/v1";
exports.BASE_URL = BASE_URL;
var routes = {
  rootRoute: '/',
  //auth routes
  loginRoute: '/auth/login',
  logoutRoute: '/auth/logout',
  registerRoute: '/auth/register',
  getPasswordResetToken: '/auth/resetpassword?/:email=sharad@gmail.com',
  verifyPasswordToken: '/auth/resetpassword/:token',
  resetPassword: '/auth/resetpassword',
  forgetPassword: '/auth/forgetpassword',
  //job router
  jobsRoute: '/jobs',
  getOneJobDetails: '/jobs/:id',
  // getAllJobDetails: '/jobs?',
  deleteJob: '/jobs/:id',
  //candidates
  candidates: '/candidates/jobs',
  applyForAJob: '/candidates/applyjob',
  getAvailableJobs: '/candidates/availablejobs',
  getAlreadyAppliedJobs: '/candidates/jobs/applied',
  //recruiters
  getPostedJobs: '/recruiters/jobs',
  createNewJob: '/job/',
  getOneJobCandidates: '/recruiters/jobs/:id',
  thanksRoute: '/thanks',
  admin: '/admin'
};
var _default = routes;
exports["default"] = _default;