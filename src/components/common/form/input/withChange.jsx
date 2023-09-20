const withChange = (Component) => {
  const MyComponent = (props) => {
    const { onChange, ...rest } = props

    const handleChange = (event) => {
      const { target } = event
      const { name, value } = target
      onChange([name, value])
    }

    return <Component onChange={handleChange} {...rest} />
  }

  MyComponent.displayName = `${Component.name} with change`

  return MyComponent
}

export default withChange
