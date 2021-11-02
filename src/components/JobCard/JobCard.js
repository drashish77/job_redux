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
      <div className='description2'>
        <span className='multi-line-truncate_head'>{title}</span>
        <p className='multi-line-truncate '>{description}</p>
      </div>
      <div className='jobCard__bottom'>
        <div className='location'>
          <i className='fas fa-map-marker-alt'></i> <span>{location}</span>
        </div>
        {buttonTitle && (
          <Button title={buttonTitle} color='extraLight' onClick={onClick} />
        )}
        {children}
      </div>
    </div>
  )
}

export default JobCard
