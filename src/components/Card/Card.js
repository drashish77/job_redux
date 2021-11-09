import './Card.scss'
const Card = ({ title, description }) => {
  return (
    <div className='home__card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
