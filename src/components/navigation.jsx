import NavigationLink from './navigationLink'

const Navigation = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <NavigationLink to="/articles">Articles</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/dashboard">Dashboard</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/add">Add</NavigationLink>
      </li>
    </ul>
  )
}

export default Navigation
