import { useState } from 'react'
import TextInput from './textInput'
import PropTypes from 'prop-types'
import { validator } from '../utils/validator'
import { isObjEmpty, getOneValue } from '../utils/object'

const Edit = (props) => {
  const { name: initialName, short: initialShort, long: initialLong } = props
  const [data, setData] = useState({ name: initialName, short: initialShort, long: initialLong })
  const setErrors = (newErrors) => (errors = newErrors)
  const { name, short, long } = data
  const validatorConfig = {
    name: {
      isRequired: {
        message: `Name is required`,
      },
    },
  }
  let errors = validator(validatorConfig, data)
  const validate = (data) => {
    const errors = validator(validatorConfig, data)
    setErrors(errors)
    const isValid = isObjEmpty(errors)

    return isValid
  }
  const getOneErrorMessage = (name) => getOneValue(errors[name])
  const handleChange = ([name, value]) => {
    setData((previousState) => ({ ...previousState, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate(data)

    if (isValid) {
      console.log(data)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6 me-5">
          <TextInput label="Name" name="name" value={name} onChange={handleChange} error={getOneErrorMessage('name')} />
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
