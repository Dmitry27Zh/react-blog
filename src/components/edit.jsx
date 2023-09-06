import TextInput from './textInput'

const Edit = () => {
  return (
    <form>
      <div className="row g-3">
        <div className="col-sm-6 me-5">
          <TextInput label="Name" name="name" />
        </div>
        <div className="col-sm-6 me-5">
          <TextInput label="Short text" name="short" isTextarea={true} style={{ height: '4rem' }} />
        </div>
        <div className="col-12 me-5">
          <TextInput label="Long text" name="long" isTextarea={true} style={{ height: '10rem' }} />
        </div>
      </div>
      <button className="btn btn-outline-dark mt-4" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Edit
