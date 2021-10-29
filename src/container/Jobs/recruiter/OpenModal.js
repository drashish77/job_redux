import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import routes, { BASE_URL } from '../../../config/config'
import { getApiResponse } from '../../../utils/apiHandler'
import data from '../../../assets/candidate.json'
import EmployeeCard from '../../../components/employeCard/EmployeeCard'
import './OpenModal.scss'
const SingleJobDetail = ({ match, setModalIsOpen }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [applications, setApplications] = useState(data)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // console.log(data)
  const performAPICall = async () => {
    setLoading(true)
    let response
    let errored = false
    try {
      let url = `${BASE_URL}${routes.getOneJobDetails}/${match.params.id}`
      response = await getApiResponse(url)
    } catch (error) {
      // setIsLoaded(true)
      setError(error)
      // errored = true
    }
    setApplications(response.data)
    // setLoading(false)
    return response
  }
  const singlejobApplications = async () => {
    try {
      var response = await performAPICall()
      if (response !== undefined) {
        setApplications([])
        // history.push(routes.jobsRoute)
      }
    } catch (err) {
      console.log(err)
    }
  }

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
          Total {applications && applications.length} Applicants
        </p>
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
      </div>
      <button
        className='button'
        onClick={() => {
          singlejobApplications()
          setModalIsOpen(false)
        }}
      >
        Close
      </button>
    </div>
  )
}

export default SingleJobDetail
