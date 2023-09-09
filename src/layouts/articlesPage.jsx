import { useParams } from 'react-router-dom'
import Page from './page'
import ArticlesList from '../components/page/articlesList/articlesList'
import ArticlePage from './articlePage'

const ArticlesPage = () => {
  const { id } = useParams()

  if (id) {
    return <ArticlePage id={id} />
  }

  return (
    <Page title="Articles">
      <ArticlesList />
    </Page>
  )
}

export default ArticlesPage
