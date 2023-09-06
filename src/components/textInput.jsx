import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { type, label, name, value, isTextarea, onChange, ...rest } = props
  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    onChange([name, value])
  }
  const renderInput = () => {
    if (isTextarea) {
      return <textarea className="form-control" name={name} id={name} value={value} onChange={handleChange} {...rest} />
    } else {
      return (
        <input
          className="form-control"
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      )
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
