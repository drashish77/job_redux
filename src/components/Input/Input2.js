import './input2.scss'
const Input2 = ({
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
      <span>{heading}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
        required
      />
      {children}
    </div>
  )
}

export default Input2
