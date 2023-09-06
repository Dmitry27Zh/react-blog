import Card from './card'
import PropTypes from 'prop-types'

const ArticleCard = (props) => {
  const { id, name, short } = props

  const link = {
    href: `/articles/${id}`,
    linkText: 'Open',
  }

  return <Card title={name} text={short} link={link} />
}

ArticleCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  short: PropTypes.string,
}

export default ArticleCard
