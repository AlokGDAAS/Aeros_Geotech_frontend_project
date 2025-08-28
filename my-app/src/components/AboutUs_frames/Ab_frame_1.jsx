import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Ab_frame_1 = () => {

  
      const [isMenu, setIsMenu] = useState(false);
    
      const closeMenu = () => setIsMenu(false);


  return (
    <div className='bg-[#141D24]    max-w-[100vw]'>

      <div>
           {/* nav bar */}
           <div className="flex justify-center">
              <div className="md:w-[90vw] w-[80vw] flex justify-between  h-[15vh] items-center relative">
                
                
                <div>
                  <img 
                    src={assets.nav_icon_1} 
                    alt="Logo" 
                    className="hover:scale-105 duration-300 cursor-pointer" 
                  />
                </div>

              
                <ul className="hidden md:flex items-center py-4">
                  <Link to="/" className="px-6 cursor-pointer link"><li>Home</li></Link>
                  <Link to="/product" className="px-6 cursor-pointer link"><li>Product</li></Link>
                  <Link to="/drone" className="px-6 cursor-pointer link"><li>Drone as Service</li></Link>
                  <Link to="/blog" className="px-6 cursor-pointer link"><li>Blog</li></Link>
                  <Link to="/aboutus" className="px-6 cursor-pointer link"><li>About Us</li></Link>
                  <Link to="/training" className="px-6 cursor-pointer link"><li>Training</li></Link>
                </ul>

              
                <div className="hidden md:block cursor-pointer">
                  <img 
                    src={assets.contact_pic} 
                    alt="Contact" 
                    className="hover:scale-105 duration-300 w-[12vw]" 
                  />
                </div>

        
                <div onClick={() => setIsMenu(prev => !prev)} className="md:hidden cursor-pointer z-50">
                  {isMenu ? <IoClose size={30} /> : <IoMenu size={30} />}
                </div>

              
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
           </div>

      </div>
        <div className='flex flex-row justify-center items-center'>
            <div>
                <img src={assets.ab_about_us_img} alt='' className='max-w-[53vw]'/>
            </div>

            <div>
                <img src={assets.ab_drone_1} alt='' className='max-w-[34vw]'/>
            </div>

        </div>

        {/* ================== bottom =================== */}
        <div>
        <div className="flex justify-center  items-end ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[14vw] lg:max-w-[16vw]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[50vw] lg:max-w-[61vw]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[14vw] lg:max-w-[16vw]"/>
        </div>
        </div>
    </div>
  )
}

export default Ab_frame_1