import './App.css'
import Header from './components/header'
import ArticlePage from './layouts/articlePage'
import ArticlesPage from './layouts/articlesPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ArticlesPage />
      </div>
    </div>
  )
}

export default App
