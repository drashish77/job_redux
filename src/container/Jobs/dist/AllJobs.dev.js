// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'
// import jobsall from '../../assets/allJobs'
// import Button from '../../components/Button/Button'
// import JobCard from '../../components/JobCard/JobCard'
// import routes from '../../config/config'
// import { fetchJobsBegin } from '../../Redux/jobs/jobActions'
// import './Job.scss'
// import PaginationCard from './Pagination/PaginationCard'
// const AllJobs = () => {
//   const history = useHistory()
//   const dispatch = useDispatch()
//   const [currentPage, setCurrentPage] = useState(1)
//   // const [itemsPerPage] = useState(4)
//   const [pageNumberLimit] = useState(20)
//   const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
//   const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
//   // const [itemsPerPage, setItemsPerPage] = useState(4)
//   const state = useSelector((state) => state.jobs)
//   const jobs = state.jobs.data
//   const jobClickHandler = () => history.push(routes.loginRoute)
//   const pages = []
//   for (
//     let i = 1;
//     i <= Math.ceil(state.jobs.data && jobs.length / itemsPerPage);
//     i++
//   ) {
//     pages.push(i)
//   }
//   const handleClick = (event) => {
//     setCurrentPage(+event.target.id)
//   }
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentItems = jobs && jobs.slice(indexOfFirstItem, indexOfLastItem)
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
//   useEffect(() => {
//     dispatch(fetchJobsBegin({ page: currentPage }))
//   }, [])
//   const handleLoadMore = () => {
//     // setItemsPerPage(itemsPerPage + 4)
//   }
//   //  const onPageChange = (page) => {
//   //    dispatch(
//   //      getAvailablePostsInitiate({
//   //        token: userData.token,
//   //        page: page + 1,
//   //      })
//   //    )
//   //  }
//   return (
//     <div className='jobs'>
//       <div className='job__home_logo'>
//         <i className='fas fa-home'></i> <span>Home</span>
//       </div>
//       <h2>Jobs for you</h2>
//       <div className='all__jobs'>
//         {currentItems &&
//           currentItems.map((job) => {
//             return (
//               <div className='all__jobs-job' key={job.id}>
//                 <JobCard
//                   title={job.title}
//                   description={job.description}
//                   location={job.location}
//                   onClick={jobClickHandler}
//                   buttonTitle='Apply'
//                 />
//               </div>
//             )
//           })}
//       </div>
//       <div className='pagination__block'>
//         {/* <PaginationCard
//           currentPage={currentPage}
//           pages={pages}
//           handlePrevButton={handlePrevButton}
//           handleNextButton={handleNextButton}
//           pageDecrementBtn={pageDecrementBtn}
//           pageIncrementBtn={pageIncrementBtn}
//           renderPageNumbers={renderPageNumbers}
//         /> */}
//       </div>
//       <div className='load_more'>
//         <Button title='Load More' onClick={handleLoadMore}></Button>
//       </div>
//     </div>
//   )
// }
// export default AllJobs
'use strict'
