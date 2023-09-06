export const validator = (validatorConfig, data) => {
  let errors = {}
  const getError = (type, value, config) => {
    const error = {}
    const { message } = config
    let invalid = false

    switch (type) {
      case 'isRequired':
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
