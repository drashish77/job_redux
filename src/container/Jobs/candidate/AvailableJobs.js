import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'
import JobCard from '../../../components/JobCard/JobCard'
import {
  applyNewJobBegin,
  fetchCandidateJobsBegin,
} from '../../../Redux/jobs/jobActions'
import '../Job.scss'
import PaginationCard from '../Pagination/PaginationCard'
import { Helmet } from 'react-helmet-async'

const AvailableJobs = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [pageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const { availableJobs, totalAvailableJobs } = useSelector(
    (state) => state.jobs
  )
  const { currentUser } = useSelector((state) => state.auth)

  //pagination component

  const pages = []
  for (let i = 1; i <= Math.ceil(totalAvailableJobs / itemsPerPage); i++) {
    pages.push(i)
  }
  const handleClick = (event) => {
    setCurrentPage(+event.target.id)
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextButton}> &hellip; </li>
  }
  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevButton}> &hellip; </li>
  }
  //getting token from react persist
  const token = currentUser && currentUser.token

  //dispatching action
  useEffect(() => {
    dispatch(fetchCandidateJobsBegin({ page: currentPage, token: token }))
  }, [currentPage, dispatch, token])

  return (
    <div className='jobs'>
      <Helmet>
        <title>Available Jobs</title>
        <meta
          name='description'
          content='Here is the list of all the available jobs for you'
        />
      </Helmet>
      <div className='job_heading_container container'>
        <div className='job__home_logo'>
          <i className='fas fa-home'></i> <span>Home</span>
        </div>
        <h2>Jobs for you</h2>
      </div>
      <div className='all__jobs container'>
        {availableJobs &&
          availableJobs.map((job) => {
            const body = { jobId: job.id, token: token }
            const jobClickHandler = () => {
              dispatch(applyNewJobBegin({ body, currentPage }))
            }
            return (
              <div className='all__jobs-job' key={Math.random()}>
                <JobCard
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  buttonTitle='Apply'
                  onClick={jobClickHandler}
                ></JobCard>
              </div>
            )
          })}
      </div>
      <div className='pagination__block'>
        <PaginationCard
          currentPage={currentPage}
          pages={pages}
          handlePrevButton={handlePrevButton}
          handleNextButton={handleNextButton}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
          renderPageNumbers={renderPageNumbers}
        />
      </div>
    </div>
  )
}

export default AvailableJobs
