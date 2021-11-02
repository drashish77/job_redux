import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import routes, { BASE_URL } from '../../../config/config'
import { getApiResponse } from '../../../utils/apiHandler'
import data from '../../../assets/candidate.json'
import EmployeeCard from '../../../components/employeCard/EmployeeCard'
import './OpenModal.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApplicationForAJobBegin } from '../../../Redux/jobs/jobActions'
import { Helmet } from 'react-helmet-async'

const SingleJobDetail = ({ match, setModalIsOpen }) => {
  const dispatch = useDispatch()

  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // console.log(data)
  const { totalJobApplication, fetchApplicationSuccess } = useSelector(
    (state) => state.jobs
  )
  const [applications] = useState(totalJobApplication)
  let jobId
  let token = localStorage.getItem('token')
  const singlejobApplications = () => console.log('application clicked')

  // useEffect(() => {
  //   dispatch(fetchApplicationForAJobBegin({ jobId: jobId, token: token }))
  // }, [jobId])
  return (
    <div className=' text-blue-moderate'>
      {/* <p>Currencies: {country.currencies[0]['code']}</p> */}
      <div className='lg:mx-24 mt-20 mb-12'>
        <div className='header_button'>
          <h3 className='mx-5 my-5 text-blue-moderate font-semibold text-2xl'>
            Applicants for this job
          </h3>
          <div className='modal_close_button'>
            <button className='button' onClick={() => setModalIsOpen(false)}>
              <i className='fas fa-times'></i>
            </button>
          </div>
        </div>
        <div className='m-5'>
          <hr />
        </div>
        <p className=''>
          {totalJobApplication ? `Total ${totalJobApplication.length}` : 0}{' '}
          applications
        </p>
        {totalJobApplication ? (
          <div className='modal_wrap'>
            {applications &&
              applications.map((applicant) => {
                return (
                  <div className='modal_wrap_inside' key={Math.random()}>
                    {/*title, email, skills*/}
                    <EmployeeCard
                      title={applicant.name}
                      email={applicant.email}
                      skills={applicant.skills}
                    />
                  </div>
                )
              })}
          </div>
        ) : (
          <div className='no_jobs'>
            <i className='far fa-file'></i>
            <p>No applications available!</p>
          </div>
        )}
      </div>
      {/* <button
        className='button'
        onClick={() => {
          singlejobApplications()
          setModalIsOpen(false)
        }}
      >
        Close
      </button> */}
    </div>
  )
}

export default SingleJobDetail
