import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { type, label, name, value, isTextarea, className, children, ...rest } = props

  const renderInput = () => {
    let input

    if (isTextarea) {
      input = <textarea className={className} name={name} id={name} value={value} {...rest} />
    } else {
      input = <input className={className} type={type} name={name} id={name} value={value} {...rest} />
    }

    return (
      <div className="input-group has-validation">
        {input}
        {children}
      </div>
    )
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
  className: PropTypes.string,
}

export default TextInput
