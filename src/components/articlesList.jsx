import ArticleCard from './articleCard'

const ArticlesList = () => {
  const articles = [
    {
      id: 1,
      name: 'Article 1',
      short: 'Short 1',
      long: 'Long 1',
    },
    {
      id: 2,
      name: 'Article 2',
      short: 'Short 2',
      long: 'Long 2',
    },
    {
      id: 3,
      name: 'Article 3',
      short: 'Short 3',
      long: 'Long 3',
    },
  ]

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {articles.map((article) => {
        const { id } = article

        return (
          <div className="col" key={id}>
            <ArticleCard {...article} />
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList
