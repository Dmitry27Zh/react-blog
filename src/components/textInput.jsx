import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { type, label, name, value, isTextarea, onChange, error, ...rest } = props
  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    onChange([name, value])
  }
  const renderInput = () => {
    let input
    let classes = 'form-control'
    classes += error ? ' is-invalid' : ''

    if (isTextarea) {
      input = <textarea className={classes} name={name} id={name} value={value} onChange={handleChange} {...rest} />
    } else {
      input = (
        <input className={classes} type={type} name={name} id={name} value={value} onChange={handleChange} {...rest} />
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
}

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isTextarea: PropTypes.bool,
  onChange: PropTypes.func,
}

export default TextInput
