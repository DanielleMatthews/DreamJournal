import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Error from './pages/Error'
import Index from './pages/Index'
import ShowDream from './pages/dreams/DrShow'
import UpdateDream from './pages/dreams/DrUpdate'
import NewDream from './pages/dreams/DrNew'
import ShowGoal from './pages/goals/GoShow'
import UpdateGoal from './pages/goals/GoUpdate'
import NewGoal from './pages/goals/GoNew'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to='/goals'> Goals </Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/dream/:id" element={<ShowDream/>} />
        <Route path="/dream/:id/update" element={<UpdateDream/>} />
        <Route path="/dream/new" element={<NewDream/>} />
        <Route path="/goal/:id" element={<ShowGoal/>} />
        <Route path="/goal/:id/update" element={<UpdateGoal/>} />
        <Route path="/goal/new" element={<NewGoal/>} />
        <Route path="*"  element={<Error/>}/> 
      </Routes>
    </Router>
  )
}

