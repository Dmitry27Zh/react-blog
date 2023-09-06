import PropTypes from 'prop-types'

const Article = (props) => {
  const { long } = props

  return (
    <div className="fs-4">
      <p>{long}</p>
    </div>
  )
}

Article.propTypes = {
  long: PropTypes.string,
}

export default Article
