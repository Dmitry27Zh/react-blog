import PropTypes from 'prop-types'

const ArticleControlCard = (props) => {
  const { name } = props

  return (
    <div className="d-flex justify-content-between align-items-center bg-dark-subtle p-4 gap-4">
      <h3 className="m-0">{name}</h3>
      <div className="d-flex flex-column flex-shrink-0 gap-2">
        <button className="btn" type="button">
          &#10005;
        </button>
      </div>
    </div>
  )
}

ArticleControlCard.propTypes = {
  name: PropTypes.string,
}

export default ArticleControlCard
