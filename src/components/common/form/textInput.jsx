import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { type, label, name, value, isTextarea, onChange, error, className, ...rest } = props

  const renderInput = () => {
    let input

    if (isTextarea) {
      input = <textarea className={className} name={name} id={name} value={value} onChange={onChange} {...rest} />
    } else {
      input = (
        <input className={className} type={type} name={name} id={name} value={value} onChange={onChange} {...rest} />
      )
    }

    return (
      <div className="input-group has-validation">
        {input}
        {renderError()}
      </div>
    )
  }
  const renderError = () => {
    if (error) {
      return <div className="invalid-feedback">{error}</div>
    }
  }

  return (
    <>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {renderInput()}
    </>
  )
}

TextInput.defaultProps = {
  type: 'text',
  isTextarea: false,
}

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isTextarea: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
}

export default TextInput
