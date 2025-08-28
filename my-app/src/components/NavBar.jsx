import React, { useState } from 'react'
import { assets } from '../assets/Home_frontend/assets'
import { Link } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => setIsMenu(false);

  return (
    <div className="px-6 md:px-12 mx-auto w-[95vw] flex justify-between py-2 h-[9vh] items-center relative text-white hidden">
      
      {/* Logo */}
      <div>
        <img 
          src={assets.nav_icon_1} 
          alt="Logo" 
          className="hover:scale-105 duration-300 cursor-pointer" 
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center py-4">
        <Link to="/" className="px-6 cursor-pointer link"><li>Home</li></Link>
        <Link to="/product" className="px-6 cursor-pointer link"><li>Product</li></Link>
        <Link to="/drone" className="px-6 cursor-pointer link"><li>Drone as Service</li></Link>
        <Link to="/blog" className="px-6 cursor-pointer link"><li>Blog</li></Link>
        <Link to="/aboutus" className="px-6 cursor-pointer link"><li>About Us</li></Link>
        <Link to="/training" className="px-6 cursor-pointer link"><li>Training</li></Link>
      </ul>

      {/* Contact Image (desktop only) */}
      <div className="hidden md:block cursor-pointer">
        <img 
          src={assets.contact_pic} 
          alt="Contact" 
          className="hover:scale-105 duration-300 w-[12vw]" 
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={() => setIsMenu(prev => !prev)} className="md:hidden cursor-pointer z-50">
        {isMenu ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>

      {/* Mobile Menu Drawer */}
      {isMenu && (
        <div className="absolute top-[9vh] right-0 w-2/5 bg-[#17192eff] p-6 flex flex-col gap-5 md:hidden z-40 rounded-lg shadow-lg">
          <Link to="/" onClick={closeMenu} className="cursor-pointer m-link">Home</Link>
          <Link to="/product" onClick={closeMenu} className="cursor-pointer m-link">Product</Link>
          <Link to="/drone" onClick={closeMenu} className="cursor-pointer m-link">Drone as Service</Link>
          <Link to="/blog" onClick={closeMenu} className="cursor-pointer m-link">Blog</Link>
          <Link to="/aboutus" onClick={closeMenu} className="cursor-pointer m-link">About Us</Link>
          <Link to="/training" onClick={closeMenu} className="cursor-pointer m-link">Training</Link>
        </div>
      )}
    </div>
  )
}

export default NavBar
