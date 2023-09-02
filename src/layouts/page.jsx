import PropTypes from 'prop-types'

const Page = (props) => {
  const { title, children } = props

  return (
    <>
      <h1 className="mb-3">{title}</h1>
      {children}
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Page
