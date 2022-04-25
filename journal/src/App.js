import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Error from './pages/Error'
import Update from './pages/Update'
import Index from './pages/Index'
import Show from './pages/Show'
import New from './pages/New'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/:id" element={<Show/>} />
        <Route path="/:id/update" element={<Update/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*"  element={<Error/>}/> 
      </Routes>
    </Router>
  )
}

