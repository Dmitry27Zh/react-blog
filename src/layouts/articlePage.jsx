import { useParams } from 'react-router-dom'
import Article from '../components/article'
import Page from './page'
import { useEffect, useState } from 'react'
import API from '../api'

const ArticlePage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState()
  useEffect(() => {
    API.articles.getById(id).then((data) => {
      setArticle(data)
    })
  }, [])

  if (!article) {
    return 'Loading...'
  }

  const { name, ...rest } = article

  return (
    <Page title={name}>
      <Article {...rest} />
    </Page>
  )
}

export default ArticlePage
