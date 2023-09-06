import { useState } from 'react'
import TextInput from './textInput'
import PropTypes from 'prop-types'

const Edit = (props) => {
  const { name: initialName, short: initialShort, long: initialLong } = props
  const [data, setData] = useState({ name: initialName, short: initialShort, long: initialLong })
  const { name, short, long } = data
  const validatorConfig = {
    name: {
      isRequired: {
        message: `Name is required`,
      },
    },
  }
  const validate = (data) => {
    let errors = {}
    const getError = (type, value, config) => {
      const error = {}
      const { message } = config
      let invalid = false

      switch (type) {
        case 'isRequired':
          invalid = value.trim().length === 0

          break
        case 'isRequired2':
          invalid = value.trim().length === 0

          break
        default:
          break
      }

      if (invalid) {
        error[type] = message
      }

      return error
    }

    for (const name in validatorConfig) {
      const currentConfig = validatorConfig[name]
      const value = data[name]
      let currentErrors = {}

      for (const errorType in currentConfig) {
        const errorConfig = currentConfig[errorType]
        const error = getError(errorType, value, errorConfig)
        currentErrors = { ...currentErrors, ...error }
      }

      errors = { ...errors, ...currentErrors }
    }

    return errors
  }
  const handleChange = ([name, value]) => {
    setData((previousState) => ({ ...previousState, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validate(data)
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6 me-5">
          <TextInput
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            error={validatorConfig.name.isRequired.message}
          />
        </div>
        <div className="col-sm-6 me-5">
          <TextInput
            label="Short text"
            name="short"
            value={short}
            isTextarea={true}
            style={{ height: '4rem' }}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 me-5">
          <TextInput
            label="Long text"
            name="long"
            value={long}
            isTextarea={true}
            style={{ height: '10rem' }}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="btn btn-outline-dark mt-4" type="submit">
        Submit
      </button>
    </form>
  )
}

Edit.propTypes = {
  name: PropTypes.string,
  short: PropTypes.string,
  long: PropTypes.string,
}

export default Edit
