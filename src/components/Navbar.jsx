import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 w-full bg-slate-300 text-sm py-3 h-[8vh]'>
      <Link to='/' className='flex flex-col items-center   flex-1 text-center'>
        <img src={assets.task} alt="Tasks" />
        <p>Tasks</p>
      </Link>
      <Link to='/daily-task' className='flex flex-col items-center   flex-1 text-center'>
        <img src={assets.date} alt="Task Manager" />
        <p>Task Manager</p>
      </Link>
      <Link to='/long-term-goles' className='flex flex-col items-center   flex-1 text-center'>
        <img src={assets.goals} alt="Long Term Goals" />
        <p>Future Goals</p>
      </Link>
      <Link to='/user-profile' className='flex flex-col items-center   flex-1 text-center'>
        <img src={assets.user} alt="Profile" />
        <p>Profile</p>
      </Link>
    </div>
  )
}

export default Navbar
