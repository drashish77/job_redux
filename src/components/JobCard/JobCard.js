import './JobCard.scss'
import Button from '../Button/Button.js'
const JobCard = ({
  title,
  description,
  location,
  onClick,
  buttonTitle,
  children,
}) => {
  return (
    <div className='jobCard'>
      <h4 className='heading'>{title}</h4>
      <p className='multi-line-truncate'>{description}</p>
      <div className='jobCard__bottom'>
        <div className='location'>
          <i className='fas fa-map-marker-alt'></i> <span>{location}</span>
        </div>
        {buttonTitle && (
          <Button title={buttonTitle} color='light' onClick={onClick} />
        )}
        {children}
      </div>
    </div>
  )
}

export default JobCard
