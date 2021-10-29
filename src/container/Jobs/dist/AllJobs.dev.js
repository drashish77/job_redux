// import { useState } from 'react'
// import { useHistory } from 'react-router'
// import jobsall from '../../assets/allJobs'
// import JobCard from '../../components/JobCard/JobCard'
// import './Job.scss'
// import PaginationCard from './Pagination/PaginationCard'
// const AllJobs = () => {
//   const [query, setQuery] = useState('')
//   const [jobs, setJobs] = useState([])
//   const [modalIsOpen, setModalIsOpen] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(8)
//   const [pageNumberLimit] = useState(4)
//   const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
//   const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
//   const history = useHistory()
//   const jobClickHandler = () => console.log('jobClicked')
//   const pages = []
//   for (let i = 1; i <= Math.ceil(jobs.length / itemsPerPage); i++) {
//     pages.push(i)
//   }
//   const handleClick = (event) => {
//     setCurrentPage(+event.target.id)
//   }
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem)
//   const renderPageNumbers = pages.map((number) => {
//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={handleClick}
//           className={currentPage === number ? 'active' : ''}
//         >
//           {number}
//         </li>
//       )
//     } else {
//       return null
//     }
//   })
//   const handlePrevButton = () => {
//     setCurrentPage(currentPage - 1)
//     if ((currentPage - 1) % pageNumberLimit == 0) {
//       setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
//       setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
//     }
//   }
//   const handleNextButton = () => {
//     setCurrentPage(currentPage + 1)
//     if (currentPage + 1 > maxPageNumberLimit) {
//       setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
//       setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
//     }
//   }
//   let pageIncrementBtn = null
//   if (pages.length > maxPageNumberLimit) {
//     pageIncrementBtn = <li onClick={handleNextButton}> &hellip; </li>
//   }
//   let pageDecrementBtn = null
//   if (minPageNumberLimit >= 1) {
//     pageDecrementBtn = <li onClick={handlePrevButton}> &hellip; </li>
//   }
//   return (
//     <div className='jobs'>
//       <div className='job__home_logo'>
//         <i className='fas fa-home'></i> <span>Home</span>
//       </div>
//       <h2>Jobs for you</h2>
//       <div className='all__jobs'>
//         {jobsall.map((job) => {
//           return (
//             <div className='all__jobs-job' key={Math.random()}>
//               <JobCard
//                 title={job.title}
//                 description={job.description}
//                 location={job.location}
//                 onClick={jobClickHandler}
//                 buttonTitle='Apply'
//               />
//             </div>
//           )
//         })}
//       </div>
//       <PaginationCard
//         currentPage={currentPage}
//         pages={pages}
//         handlePrevButton={handlePrevButton}
//         handleNextButton={handleNextButton}
//         pageDecrementBtn={pageDecrementBtn}
//         pageIncrementBtn={pageIncrementBtn}
//         renderPageNumbers={renderPageNumbers}
//       />
//     </div>
//   )
// }
// export default AllJobs
"use strict";