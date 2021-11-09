import './Button.scss'
const Button = ({ title, color, onClick }) => {
  return (
    <div className='button_wrap_home'>
      <button
        type='submit'
        className={`button ${
          color === 'dark'
            ? 'button-dark'
            : color === 'extraLight'
            ? 'btn-extraLight'
            : 'button-light'
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
