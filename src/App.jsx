import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DailyTask from './pages/DailyTask'
import LongTermGoals from './pages/LongTermGoals'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import DailyTaskManager from './pages/DailyTaskManager'
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div className='outfit min-h-screen flex flex-col-reverse'>
      <Navbar />
      <Routes>
        <Route path='/Event-Manager' element={<Start/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/daily-task' element={<DailyTask/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/long-term-goles' element={<LongTermGoals/>} />
        <Route path='/user-profile' element={<Profile/>} />
        <Route path='/daily-task-manager/:date' element={<DailyTaskManager/>} />
        <Route path='/create-account' element={ <Register /> } />
      </Routes>
      
    </div>
  )
}

export default App
