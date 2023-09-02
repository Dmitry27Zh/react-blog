import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import ArticlesPage from './layouts/articlesPage'
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
          <Route path="/" element={<Navigate to="/articles" />} />
          <Route path="/articles/:id?" element={<ArticlesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
