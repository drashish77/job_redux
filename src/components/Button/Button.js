import './Button.scss'
const Button = ({ title, color, onClick }) => {
  return (
    <div className=''>
      <button
        type='submit'
        className={`button ${color === 'dark' ? 'btn-dark' : 'btn-light'}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
