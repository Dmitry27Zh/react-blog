import './App.css'
import Header from './components/header'
import ArticlePage from './layouts/articlePage'
import ArticlesPage from './layouts/articlesPage'

const article = {
  id: 1,
  name: 'Article 1',
  short: 'Short 1',
  long: 'asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg',
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ArticlePage {...article} />
        <ArticlesPage />
      </div>
    </div>
  )
}

export default App
