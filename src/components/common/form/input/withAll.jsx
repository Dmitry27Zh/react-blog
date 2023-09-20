import withChange from './withChange'
import withClassName from './withClassName'
import withValidation from './withValidation'

const withAll = (Component) => {
  const ComponentWithAll = withClassName(withValidation(withChange(Component)))

  const MyComponent = (props) => {
    return <ComponentWithAll {...props} />
  }

  MyComponent.displayName = `${MyComponent.name} with all`

  return MyComponent
}

export default withAll
