import React, { useContext } from 'react'
import assets from '../assets/assets'
import AuthContext from '../context/AuthContext'

const Start = () => {

    const { navigate} = useContext(AuthContext)

  return (
    <div className='h-screen w-full flex-col bg-black flex items-center justify-center fixed border-0 left-0'>
      <img src={assets.logo}  alt="" className="" />
      <button onClick={() => navigate('/')} className='bg-white'>
        Start
      </button>
    </div>
  )
}

export default Start
