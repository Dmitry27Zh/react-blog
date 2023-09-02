const Card = (props) => {
  const { title, text, link } = props
  const { linkText, href } = link

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={href} className="btn btn-primary">
          {linkText}
        </a>
      </div>
    </div>
  )
}

export default Card
