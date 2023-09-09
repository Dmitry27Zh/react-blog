import PropTypes from 'prop-types'

const InputError = (props) => {
  const { error } = props

  return <div className="invalid-feedback">{error}</div>
}

InputError.propTypes = {
  error: PropTypes.string,
}

export default InputError
