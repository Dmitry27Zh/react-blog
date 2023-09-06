import { useEffect, useState } from 'react'
import API from '../api'
import ArticleControlCard from './articleControlCard'

const Dashboard = () => {
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
            <ArticleControlCard {...article} />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
