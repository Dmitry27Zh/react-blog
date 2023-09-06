const TextInput = (props) => {
  const { type, label, name, isTextarea, ...rest } = props
  const renderInput = () => {
    if (isTextarea) {
      return <textarea className="form-control" id={name} {...rest} />
    } else {
      return <input className="form-control" type={type} id={name} {...rest} />
    }
  }

  return (
    <>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {renderInput()}
    </>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
