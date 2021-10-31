import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../../components/Button/Button'
import JobCard from '../../../components/JobCard/JobCard'
import routes from '../../../config/config'
import { fetchRecruiterJobsBegin } from '../../../Redux/jobs/jobActions'
import '../Job.scss'
import PaginationCard from '../Pagination/PaginationCard'
import SingleJobDetail from './OpenModal'
const RecruitersJobs = () => {
  const [jobs, setJobs] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(3)
  const [pageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

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
  const showAllPostedJob = () => history.push(routes.createNewJob)
  const viewApplicationHandler = (e) => {
    setModalIsOpen(true)
  }
  const { totalPostedJobs } = useSelector((state) => state.jobs)
  console.log(totalPostedJobs)
  const token = localStorage.getItem('token')
  useEffect(() => {
    totalPostedJobs && setJobs(totalPostedJobs.data)
  }, [totalPostedJobs])
  useEffect(() => {
    // setJobs(totalPostedJobs.data)
    dispatch(fetchRecruiterJobsBegin(token))
  }, [])
  return (
    <div className='jobs'>
      <div className='job__home_logo'>
        <i className='fas fa-home'></i> <span>Home</span>
      </div>
      <h2>Jobs posted by you</h2>
      {jobs && jobs.length === 0 ? (
        <div className='no_job_applied_wrap'>
          <div className='no_job_applied'>
            <i className='fas fa-pen-square'></i>
            <p>Your posted jobs will show here!</p>
            <Button title='Post a Job' onClick={showAllPostedJob} />
          </div>
        </div>
      ) : (
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
                      <SingleJobDetail setModalIsOpen={setModalIsOpen} />
                      {/* </div> */}
                    </Modal>
                  </JobCard>
                </div>
              )
            })}
        </div>
      )}
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

export default RecruitersJobs
