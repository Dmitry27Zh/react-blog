import PropTypes from 'prop-types'

const Page = (props) => {
  const { title, className = '', children } = props
  const BASE_CLASSES = ''
  let classes = BASE_CLASSES + ' ' + className

  return (
    <div className={classes}>
      <h1 className="mb-3">{title}</h1>
      {children}
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Page
