import PropTypes from 'prop-types'

const Page = (props) => {
  const { title, className = '', headerExtra, children } = props
  const BASE_CLASSES = ''
  let classes = BASE_CLASSES + ' ' + className
  const renderHeaderExtra = () => {
    if (headerExtra) {
      return <div className="d-flex flex-column justify-content-center flex-shrink-0 gap-2">{headerExtra}</div>
    }
  }

  return (
    <div className={classes}>
      <div className="d-flex justify-content-between gap-4 mb-3">
        <h1 className="m-0">{title}</h1>
        {renderHeaderExtra()}
      </div>
      {children}
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Page
