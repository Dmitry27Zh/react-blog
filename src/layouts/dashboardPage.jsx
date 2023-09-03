import Page from './page'
import Dashboard from '../components/dashboard'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  const headerExtra = (
    <Link className="btn btn-outline-dark" to="/add">
      Add new article
    </Link>
  )

  return (
    <Page title="Articles" headerExtra={headerExtra}>
      <Dashboard />
    </Page>
  )
}

export default DashboardPage
