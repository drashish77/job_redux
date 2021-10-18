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
      <span className=''>{heading}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className=''
        value={values}
        onChange={handleChange}
      />
      {children}
    </div>
  )
}

export default Input
