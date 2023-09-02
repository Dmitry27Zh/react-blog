import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 link-secondary">
          Articles
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="nav-link px-2">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/add" className="nav-link px-2">
          Add
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
