import Navigation from './navigation'

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none fs-2">
          <i className="bi bi-receipt-cutoff"></i>
        </a>
      </div>
      <Navigation />
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Sign-up
        </button>
      </div>
    </header>
  )
}

export default Header
