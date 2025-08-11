import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext';

const Title = ({heading}) => {
  const date = new Date()
  

const today = date.toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const weekday = date.toLocaleDateString('en-IN', {
  weekday: 'long',
});
  return (
    <div className='p-2'>
      <h1 className='text-3xl'>{heading}</h1>
      <p className='text-lg mt-2'>{today} - {weekday}</p>
      <hr className='mt-4 text-slate-600'/>
    </div>
  )
}

export default Title
