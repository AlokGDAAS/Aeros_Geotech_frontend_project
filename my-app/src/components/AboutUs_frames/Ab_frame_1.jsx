import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Ab_frame_1 = () => {

  
      const [isMenu, setIsMenu] = useState(false);
    
      const closeMenu = () => setIsMenu(false);


  return (
    <div className='max-w-[100vw]' style={{backgroundColor:"#141D24"}}>


        <div className='flex flex-row justify-center items-center md:pt-[10vw] pt-[10vh]'>
            <div className="hidden md:block">
                <img src={assets.ab_about_us_img} alt='' className='max-w-[53vw]'/>
            </div>

            <div>
                <img src={assets.ab_drone_1} alt='' className='md:max-w-[34vw] max-w-[80vw]'/>
            </div>

        </div>

        {/* ================== bottom =================== */}
      {/* bottom - image */}
      <div className="flex justify-center">
      <div className="flex justify-between items-end md:min-h-[16vh] ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[18vw] md:max-w-[16vw] md:min-h-[3vh]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[55vw] md:max-w-[61vw] md:min-h-[5vh]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[18vw] md:max-w-[16vw] md:min-h-[3vh]"/>
      </div>
     </div>
    </div>
  )
}

export default Ab_frame_1