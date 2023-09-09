import { useEffect, useState } from 'react'
import TextInput from '../common/form/textInput'
import PropTypes from 'prop-types'
import { validator } from '../../utils/validator'
import { isObjEmpty, getOneValue } from '../../utils/object'

const EditForm = (props) => {
  const { name: initialName, short: initialShort, long: initialLong } = props
  const [data, setData] = useState({ name: initialName, short: initialShort, long: initialLong })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    if (submitted) {
      validate()
    }
  }, [data])
  const { name, short, long } = data
  const validatorConfig = {
    name: {
      isRequired: {
        message: `Name is required`,
      },
    },
    short: {
      isRequired: {
        message: `Short text is required`,
      },
    },
    long: {
      isRequired: {
        message: `Long text is required`,
      },
    },
  }
  const isValid = (errors) => isObjEmpty(errors)
  const validate = () => {
    const errors = validator(validatorConfig, data)
    setErrors(errors)

    return isValid(errors)
  }

  const getOneErrorMessage = (name) => getOneValue(errors[name])
  const handleChange = ([name, value]) => {
    setData((previousState) => ({ ...previousState, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()

    if (!submitted) {
      setSubmitted(true)
    }

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
            error={getOneErrorMessage('short')}
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
            error={getOneErrorMessage('long')}
          />
        </div>
      </div>
      <button className="btn btn-outline-dark mt-4" type="submit" disabled={submitted && !isValid(errors)}>
        Submit
      </button>
    </form>
  )
}

EditForm.propTypes = {
  name: PropTypes.string,
  short: PropTypes.string,
  long: PropTypes.string,
}

export default EditForm
