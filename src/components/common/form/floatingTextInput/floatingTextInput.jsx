import PropTypes from 'prop-types'

const FloatingTextInput = (props) => {
  const { label, type, name, placeholder, className, onChange, errorElement } = props

  return (
    <div className="form-floating">
      <input type={type} className={className} id={name} placeholder={placeholder} onChange={onChange} />
      <label htmlFor={name}>{label}</label>
      {errorElement}
    </div>
  )
}

FloatingTextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  errorElement: PropTypes.element,
}

export default FloatingTextInput
