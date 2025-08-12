import React from 'react';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 w-full bg-slate-300 text-sm py-1.5  fixed bottom-0'>
      <Link to='/Event-Manager' className='flex flex-col items-center flex-1 text-center gap-1'>
        <img src={assets.task} alt="Tasks" />
        <p>Tasks</p>
      </Link>
      <Link to='/Event-Manager/daily-task' className='flex flex-col items-center flex-1 text-center gap-1'>
        <img src={assets.date} alt="Task Manager" />
        <p>Add Task </p>
      </Link>
      <Link to='/Event-Manager/long-term-goals' className='flex flex-col items-center flex-1 text-center gap-1'>
        <img src={assets.goals} alt="Long Term Goals" />
        <p>Future Goals</p>
      </Link>
      <Link to='/Event-Manager/user-profile' className='flex flex-col items-center flex-1 text-center gap-1'>
        <img src={assets.user} alt="Profile" />
        <p>Profile</p>
      </Link>
    </div>
  );
};

export default Navbar;
