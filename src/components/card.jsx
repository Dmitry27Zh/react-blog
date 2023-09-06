import PropTypes from 'prop-types'

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

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.object,
}

export default Card
