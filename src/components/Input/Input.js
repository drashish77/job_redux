import './Input.scss'
const Input = ({
  heading,
  name,
  type,
  placeholder,
  handleChange,
  className,
  values,
  children,
}) => {
  return (
    <div className='input'>
      {heading && <span className=''>{heading}</span>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
      />
      {children && children}
    </div>
  )
}

export default Input
