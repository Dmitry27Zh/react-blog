import PropTypes from 'prop-types'
import TextInput from './textInput'
import InputError from './inputError'

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
  const errorElement = <InputError error={error} />

  return <Component onChange={handleChange} className={className} {...rest} errorElement={errorElement} />
}

Input.defaultProps = {
  Component: TextInput,
  error: '',
}

Input.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default Input
