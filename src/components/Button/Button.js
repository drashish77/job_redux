import './Button.scss'
const Button = ({ title, color, onClick }) => {
  return (
    <div className=''>
      <button
        type='submit'
        className={`button ${
          color === 'dark'
            ? 'btn-dark'
            : color === 'extraLight'
            ? 'btn-extraLight'
            : 'btn-light'
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
