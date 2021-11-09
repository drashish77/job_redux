import { useState } from 'react'
import EmployeeCard from '../../../components/employeCard/EmployeeCard'
import './OpenModal.scss'
import { useSelector } from 'react-redux'

const SingleJobDetail = ({ match, setModalIsOpen }) => {
  const { totalJobApplication } = useSelector((state) => state.jobs)
  const [applications] = useState(totalJobApplication)

  return (
    <div className=' text-blue-moderate'>
      {/* <p>Currencies: {country.currencies[0]['code']}</p> */}
      <div className=''>
        <div className='header_button'>
          <h3 className=''>Applicants for this job</h3>
          <div className='modal_close_button'>
            <button className='button' onClick={() => setModalIsOpen(false)}>
              <i className='fas fa-times'></i>
            </button>
          </div>
        </div>
        <div className=''>
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
