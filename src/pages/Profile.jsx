import React from 'react'
import assets from '../assets/assets'
import ToggleSwitch from '../components/ToggleSwitch'

const Profile = () => {
  return (
    <div className="min-h-[92vh] p-4">
      <img src={assets.account} className='w-32 mx-auto' alt="" />
      <h1 className='text-xl text-center mt-2 font-medium'>VIGNESHKUMAR M</h1>
      <div className="grid grid-cols-[1fr_2fr] gap-2 mt-8">
        <p>Phone :</p>
        <p>********</p>
        <p>Email :</p>
        <p>vigneshkumarm140302@gmail.com</p>
        <p>Notification :</p>
        <ToggleSwitch />
        <button className='bg-red-500 text-white py-1 px-3 rounded mt-2'>Logout</button>
      </div>
    </div>
  )
}

export default Profile
