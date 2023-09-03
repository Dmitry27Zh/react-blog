const Edit = () => {
  return (
    <form>
      <div className="row g-3">
        <div className="col-sm-6 me-5">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" />
        </div>
        <div className="col-sm-6 me-5">
          <label className="form-label" htmlFor="short">
            Short text
          </label>
          <textarea className="form-control" type="text" id="short" style={{ height: '4rem' }} />
        </div>
        <div className="col-12 me-5">
          <label className="form-label" htmlFor="long">
            Long text
          </label>
          <textarea className="form-control" type="text" id="long" style={{ height: '10rem' }} />
        </div>
      </div>
      <button className="btn btn-outline-dark mt-4" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Edit
