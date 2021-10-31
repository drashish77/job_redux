import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import JobCard from '../../../components/JobCard/JobCard'
import {
  fetchCandidateJobsBegin,
  fetchJobsBegin,
} from '../../../Redux/jobs/jobActions'
import '../Job.scss'
import PaginationCard from '../Pagination/PaginationCard'
const AvailableJobs = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(3)
  const [pageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const jobClickHandler = () => console.log('jobClicked')
  const pages = []
  for (let i = 1; i <= Math.ceil(jobs && jobs.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const handleClick = (event) => {
    setCurrentPage(+event.target.id)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = jobs && jobs.slice(indexOfFirstItem, indexOfLastItem)
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
    if ((currentPage - 1) % pageNumberLimit == 0) {
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
  const { totalAvailableJobs } = useSelector((state) => state.jobs)
  console.log(totalAvailableJobs)
  const token = localStorage.getItem('token')

  useEffect(() => setJobs(totalAvailableJobs), [])
  useEffect(() => {
    dispatch(fetchCandidateJobsBegin(token))
  }, [])
  return (
    <div className='jobs'>
      <div className='job__home_logo'>
        <i className='fas fa-home'></i> <span>Home</span>
      </div>
      <h2>Jobs for you</h2>
      <div className='all__jobs'>
        {currentItems &&
          currentItems.map((job) => {
            console.log(job)
            return (
              <div className='all__jobs-job' key={Math.random()}>
                <JobCard
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  buttonTitle='Apply'
                  onClick={jobClickHandler}
                />
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