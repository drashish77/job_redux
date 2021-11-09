// import { useHistory } from 'react-router'
// import JobCard from '../../../components/JobCard/JobCard'
// import '../Job.scss'
// const Jobs = () => {
//   const history = useHistory()
//   const jobsall = [
//     {
//       title: 'This is a new job1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job2',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job3',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job2',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job3',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//     {
//       title: 'This is a new job',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
//       location: 'Noida',
//     },
//   ]
//   const jobClickHandler = () => console.log('jobClicked')
//   return (
//     <div className='jobs'>
//       <div className='job__home_logo'>
//         <i className='fas fa-home'></i> <span>Home</span>
//       </div>
//       <h2>Jobs posted by you</h2>
//       <div className='all__jobs'>
//         {jobsall.map((job) => {
//           return (
//             <div className='all__jobs-job' key={Math.random()}>
//               <JobCard
//                 title={job.title}
//                 description={job.description}
//                 location={job.location}
//                 onClick={jobClickHandler}
//                 buttonTitle='View Applications'
//               />
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
// export default Jobs
'use strict'
