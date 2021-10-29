import './EmployeeCard.scss'

const JobCard = ({ title, email, skills }) => {
  return (
    <div className='employeeCard'>
      <div className='employeeCard_heading'>
        <div className='firstLatter'>{title[0]}</div>
        <div className='subheading'>
          <span className=''>{title}</span>
          <span className=''>{email}</span>
        </div>
      </div>

      <div className='employeeCard_bottom'>
        <p>Skills</p>
        <p>{skills}</p>
      </div>
    </div>
  )
}

export default JobCard
