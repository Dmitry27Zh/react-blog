const Article = (props) => {
  const { long } = props

  return (
    <div className="fs-4">
      <p>{long}</p>
    </div>
  )
}

export default Article
