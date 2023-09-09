import PropTypes from 'prop-types'
import TextInput from './textInput'

const Input = (props) => {
  const { onChange, Component, ...rest } = props
  const { error } = rest
  let className = 'form-control'
  className += error ? ' is-invalid' : ''

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    onChange([name, value])
  }

  return <Component onChange={handleChange} className={className} {...rest} />
}

Input.defaultProps = {
  Component: TextInput,
}

Input.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default Input
