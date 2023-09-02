import Article from '../components/article'
import Page from './page'

const ArticlePage = (props) => {
  const { name, ...rest } = props

  return (
    <Page title={name}>
      <Article {...rest} />
    </Page>
  )
}

export default ArticlePage
