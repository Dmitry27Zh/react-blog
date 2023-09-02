import Page from './page'

const PageSpecial = (props) => {
  const { children, ...rest } = props

  return (
    <Page className="d-flex flex-column align-items-center" {...rest}>
      {children}
    </Page>
  )
}

export default PageSpecial
