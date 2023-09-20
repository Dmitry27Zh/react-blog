const withClassName = (Component) => {
  const MyComponent = (props) => {
    return <Component className="form-control" {...props} />
  }

  MyComponent.displayName = `${MyComponent.name} with className`

  return MyComponent
}

export default withClassName
