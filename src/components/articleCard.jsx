import Card from './card'

const ArticleCard = (props) => {
  const { name, short } = props
  const link = {
    href: '/',
    linkText: 'Open',
  }

  return <Card title={name} text={short} link={link} />
}

export default ArticleCard
