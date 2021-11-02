// import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import routes, { BASE_URL } from '../../../config/config'
// // import data from '../assets/candidates.json'
// import { getApiResponse } from '../../../utils/apiHandler'
// const SingleJobDetail = ({ match, setModalIsOpen }) => {
//   const history = useHistory()
//   const [loading, setLoading] = useState(false)
//   const [applications, setApplications] = useState([])
//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   // console.log(data)
//   const performAPICall = async () => {
//     setLoading(true)
//     let response
//     let errored = false
//     try {
//       let url = `${BASE_URL}${routes.getOneJobDetails}/${match.params.id}`
//       response = await getApiResponse(url)
//     } catch (error) {
//       // setIsLoaded(true)
//       setError(error)
//       // errored = true
//     }
//     setApplications(response.data)
//     // setLoading(false)
//     return response
//   }
//   const singlejobApplications = async () => {
//     try {
//       var response = await performAPICall()
//       if (response !== undefined) {
//         setApplications([])
//         // history.push(routes.jobsRoute)
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   if (error) {
//     return <>{error.message}</>
//   } else {
//     return (
//       <div className='dark__mode__black'>
//         <div className=' text-blue-moderate'>
//           {/* <p>Currencies: {country.currencies[0]['code']}</p> */}
//           <div className='lg:mx-24 mt-20 mb-12'>
//             <h2 className='mx-5 my-5 text-blue-moderate font-semibold text-2xl'>
//               Applicants for this jobdfdf
//             </h2>
//             <div className='m-5'>
//               <hr />
//             </div>
//             <h3 className='mx-5 my-5 text-blue-dark font-semibold text-lg'>
//               Total {applications && applications.length} Applicants
//             </h3>
//             <div
//               className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row px-1 py-4 rounded-lg'
//               style={{ background: '#A9AFBC' }}
//             >
//               {applications &&
//                 applications.map((applicant) => {
//                   return (
//                     <div
//                       className='border px-5 py-5 w-48 md:w-96 lg:80 text-left rounded-lg bg-white m-2'
//                       key={Math.random()}
//                     >
//                       <div className='flex flex-col md:flex-row justify-start'>
//                         <div className='p-1 md:p-2 rounded-full h-16 w-16 md:mr-5 flex items-center text-2xl font-semibold justify-center bg-blue-lighter border'>
//                           {applicant.name[0]}
//                         </div>
//                         <div className=''>
//                           <h3 className='my-2 text-xl text-blue-moderate capitalize font-semibold'>
//                             {applicant.name}
//                           </h3>
//                           <p className='text-blue-moderate overflow-ellipsis overflow-hidden'>
//                             {applicant.email}
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex justify-between items-center mt-5 mb-2'>
//                         <div className='text-lg'>
//                           <div className=''>
//                             <strong>Skills:</strong>
//                           </div>
//                           <span className='text-blue-moderate text-left'>
//                             {applicant.skills}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//             </div>
//           </div>
//           <button
//             className='bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4'
//             onClick={() => {
//               singlejobApplications()
//               setModalIsOpen(false)
//             }}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     )
//   }
// }
// export default SingleJobDetail
"use strict";