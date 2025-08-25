import React from 'react'
import { assets } from '../assets/Home_frontend/assets'

const NavBar = () => {

  return (
    <div className='px-12 mx-auto w-[95vw]  flex justify-between py-2 hidden md:flex lg:flex h-[9vh]'>
      <div className='flex'>
        <img src={assets.nav_icon_1} alt=''style={{cursor:"pointer"}} className='hover:scale-105 duration-300' />
      </div>
       <ul className='flex items-center py-4 text-white navbar-ul'>
        <li className='px-6 cursor-pointer'>Home</li>
        <li className='px-6 cursor-pointer'>Product</li>
        <li className='px-6 cursor-pointer'>Drone as service</li>
        <li className='px-6 cursor-pointer'>Blog</li>
        <li className='px-6 cursor-pointer'>About us</li>
        <li className='px-6 cursor-pointer'>Training</li>
       </ul>
      <div style={{cursor:"pointer"}} >
        <img src={assets.contact_pic} alt='' className='hover:scale-105 duration-300' />
      </div>
    </div>
  )
}

export default NavBar