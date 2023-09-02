import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import ArticlesPage from './layouts/articlesPage'
import ArticlePage from './layouts/articlePage'
import DashboardPage from './layouts/dashboardPage'
import AddPage from './layouts/addPage'
import LoginPage from './layouts/loginPage'
import SignUpPage from './layouts/signUpPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/articles?" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage></ArticlePage>}></Route>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
