import InputError from './inputError'

const withValidation = (Component) => {
  const MyComponent = (props) => {
    const { className, error, ...rest } = props
    const classes = className + (error ? ' is-invalid' : '')

    return (
      <Component className={classes} {...rest}>
        <InputError error={error} />
      </Component>
    )
  }

  MyComponent.displayName = `${Component.name} with validation`

  return MyComponent
}

export default withValidation
