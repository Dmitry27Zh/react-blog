import Card from './card'

const ArticleCard = (props) => {
  const { id, name, short } = props

  const link = {
    href: `/articles/${id}`,
    linkText: 'Open',
  }

  return <Card title={name} text={short} link={link} />
}

export default ArticleCard
