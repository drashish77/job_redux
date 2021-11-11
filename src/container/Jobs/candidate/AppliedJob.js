import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../../components/Button/Button'
import JobCard from '../../../components/JobCard/JobCard'
import routes from '../../../config/config'
import { fetchAppliedJobsBegin } from '../../../Redux/jobs/jobActions'
import '../Job.scss'
import PaginationCard from '../Pagination/PaginationCard'
const Jobs = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [pageNumberLimit] = useState(4)
  const { totalAppliedJobs } = useSelector((state) => state.jobs)
  const { currentUser } = useSelector((state) => state.auth)

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const pages = []
  for (
    let i = 1;
    i <= Math.ceil(totalAppliedJobs && totalAppliedJobs.length / itemsPerPage);
    i++
  ) {
    pages.push(i)
  }
  const handleClick = (event) => {
    setCurrentPage(+event.target.id)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems =
    totalAppliedJobs &&
    totalAppliedJobs.slice(indexOfFirstItem, indexOfLastItem)
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
  const token = currentUser && currentUser.token
  // const jobClickHandler = () => console.log('jobClicked')

  useEffect(() => {
    dispatch(fetchAppliedJobsBegin({ token: token }))
  }, [dispatch, token])

  const candidateJobHandler = () => history.push(routes.getAvailableJobs)

  return (
    <div className='jobs'>
      <Helmet>
        <title>Jobs applied by you</title>
        <meta
          name='description'
          content='here are the list of all the jobs applied by a candidate'
        />
      </Helmet>
      <div className='job_heading_container container'>
        <div className='job__home_logo'>
          <span onClick={candidateJobHandler}>
            <i className='fas fa-home'></i> <span>Home </span>
          </span>
          <span>{`>`}</span>
          <span> Applied Jobs</span>
        </div>
        <h2>Jobs applied by you</h2>
      </div>
      {currentItems && currentItems.length === 0 ? (
        <div className='no_job_applied_wrap'>
          <div className='no_job_applied'>
            <i className='fas fa-pen-square'></i>
            <p>Your applied jobs will show here!</p>
            <Button title='See all jobs' onClick={candidateJobHandler} />
          </div>
        </div>
      ) : (
        <div className='all__jobs container'>
          {currentItems &&
            currentItems.map((job) => {
              return (
                <div className='all__jobs-job' key={Math.random()}>
                  <JobCard
                    title={job.title}
                    description={job.description}
                    location={job.location}
                    // onClick={jobClickHandler}
                  />
                </div>
              )
            })}
        </div>
      )}
      {currentItems && currentItems.length !== 0 && (
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
      )}
    </div>
  )
}

export default Jobs
