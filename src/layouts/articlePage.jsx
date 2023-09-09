import Article from '../components/common/article'
import Page from './page'
import { useEffect, useState } from 'react'
import API from '../api'

const ArticlePage = (props) => {
  const { id } = props
  const [article, setArticle] = useState()
  useEffect(() => {
    API.articles.getById(id).then((data) => {
      setArticle(data)
    })
  }, [id])

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
