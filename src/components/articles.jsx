import ArticleCard from './articleCard'

const Articles = () => {
  const articles = [
    {
      name: 'Article 1',
      short: 'Short 1',
      long: 'Long 1',
    },
    {
      name: 'Article 2',
      short: 'Short 2',
      long: 'Long 2',
    },
    {
      name: 'Article 3',
      short: 'Short 3',
      long: 'Long 3',
    },
  ]
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {articles.map((article) => (
        <div className="col">
          <ArticleCard {...article} />
        </div>
      ))}
    </div>
  )
}

export default Articles
