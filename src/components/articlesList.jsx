import { useEffect, useState } from 'react'
import ArticleCard from './articleCard'
import API from '../api'

const ArticlesList = () => {
  const [articles, setArticles] = useState()
  useEffect(() => {
    API.articles.fetchAll().then((data) => {
      setArticles(data)
    })
  }, [])

  if (!articles) {
    return 'Loading...'
  }

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
