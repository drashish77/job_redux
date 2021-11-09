import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../../components/Button/Button'
import JobCard from '../../../components/JobCard/JobCard'
import routes from '../../../config/config'
import {
  fetchRecruiterJobsBegin,
  fetchApplicationForAJobBegin,
} from '../../../Redux/jobs/jobActions'
import '../Job.scss'
import PaginationCard from '../Pagination/PaginationCard'
import SingleJobDetail from './OpenModal'
import { Helmet } from 'react-helmet-async'

const RecruitersJobs = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [pageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const { postedJobs, totalPostedJobs } = useSelector((state) => state.jobs)
  const { currentUser } = useSelector((state) => state.auth)

  //pagination component
  const pages = []
  for (let i = 1; i <= Math.ceil(totalPostedJobs / itemsPerPage); i++) {
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
    pageDecrementBtn = <sp onClick={handlePrevButton}> &hellip; </sp>
  }
  //token fetching from persist user
  const token = currentUser && currentUser.token

  //dispatching action
  useEffect(() => {
    dispatch(fetchRecruiterJobsBegin({ page: currentPage, token: token }))
  }, [currentPage, dispatch, token])

  //handler if no posted job is there
  const showAllPostedJob = () => history.push(routes.createNewJob)

  //home button handler
  const homeButtonHandler = () => history.push(routes.getPostedJobs)

  return (
    <div className='jobs container'>
      <Helmet>
        <title>Jobs posted by you</title>
        <meta name='description' content='here are recruiter posted jobs' />
      </Helmet>
      <div className='job_heading_container'>
        <div className='job__home_logo' onClick={homeButtonHandler}>
          <i className='fas fa-home'></i> <span>Home</span>
        </div>
        <h2 className='job_heading'>Jobs posted by you</h2>
      </div>
      {postedJobs && postedJobs.length === 0 ? (
        <div className='no_job_applied_wrap'>
          <div className='no_job_applied'>
            <i className='fas fa-pen-square'></i>
            <p>Your posted jobs will show here!</p>
            <Button title='Post a Job' onClick={showAllPostedJob} />
          </div>
        </div>
      ) : (
        <div className='all__jobs'>
          {postedJobs &&
            postedJobs.map((job) => {
              let jobId = job.id
              const viewApplicationHandler = (e) => {
                setModalIsOpen(true)
                dispatch(
                  fetchApplicationForAJobBegin({ jobId: jobId, token: token })
                )
              }
              return (
                <div className='all__jobs-job' key={Math.random()}>
                  <JobCard
                    title={job.title}
                    description={job.description}
                    location={job.location}
                    onClick={viewApplicationHandler}
                    buttonTitle='View Applications'
                  >
                    <Modal
                      isOpen={modalIsOpen}
                      ariaHideApp={false}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={{
                        overlay: {
                          backgroundColor: 'rgba(0,0,0,0.07)',
                        },
                        content: {
                          color: 'gray',
                          width: '60vw',
                          margin: 'auto',
                          borderRadius: '10px',
                        },
                      }}
                    >
                      <Helmet>
                        <title>{job.title}</title>
                        <meta name='description' content={job.description} />
                      </Helmet>
                      <SingleJobDetail setModalIsOpen={setModalIsOpen} />
                      {/* </div> */}
                    </Modal>
                  </JobCard>
                </div>
              )
            })}
        </div>
      )}
      {postedJobs && postedJobs.length !== 0 && (
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

export default RecruitersJobs
