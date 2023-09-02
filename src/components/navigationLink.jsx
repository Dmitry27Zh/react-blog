import { NavLink } from 'react-router-dom'

const NavigationLink = (props) => {
  const { to, children } = props
  const getClassName = ({ isActive }) => {
    let result = 'nav-link px-2'
    result += isActive ? ' link-secondary' : ''

    return result
  }

  return (
    <NavLink to={to} className={getClassName}>
      {children}
    </NavLink>
  )
}

export default NavigationLink
