import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";


const Home_test = () => {

    const [isMenu, setIsMenu] = useState(false);
  
    const closeMenu = () => setIsMenu(false);


  return (
    <div className="bg-[url('/asset/background_1.png')] bg-cover bg-center  px-[2vw] md:px-[0.5vw] ">
      <div className="md:flex md:justify-between md:h-[84vh] md:py-[12vh] pt-[10vh]">
        {/* left side bar */}
        <div className="max-w-[2.6vw] hidden md:block ">
          <img src={assets.Side_frame1} alt="" className=""/>
        </div>




        {/* middile content*/}
        <div className="md:max-w-[90vw] ">
           {/* nav bar */}

          {/* banner */}
          <div className="flex justify-center relative ">
          <img src={assets.banner_1} alt="Banner" className="md:max-w-[61vw]" />
          <img src={assets.banner_1_circle} alt="" className="absolute md:right-[23%] md:top-[14%] md:w-[10%] right-[5%] top-[15%] w-[15%]"/>
          </div>




        {/* drone box */}   
        <div className="flex max-h-[58vh]  ">
        {/* circle */}
        <div className=" items-end w-1/2 pb-[3vw] hidden md:flex">
         <img src={assets.home_img} alt="" className="max-w-[12vw] ml-[7vw]"/>
        </div>

        {/* drone */}        
         <div className="md:w-full">
          <img src={assets.drone_1} alt="Drone" className="md:mt-[5vh] " />
         </div>
        {/* msz box */}         
          <div className=" items-end w-1/2 hidden md:flex ">
          <div className="relative min-w-[25vw] pb-[3vw]">
            <img src={assets.msg_box_1} alt="" className="w-[90%] "/>
          
                 <p className="absolute top-[4%] right-[15%] w-[80%] h-[62%] overflow-hidden text-center p-[1vw] d-font-home">Lorem Ipsum is simply dummy text of the 
                  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                  took a galley of type and scrambled it to make a type specimen book.. 
                 </p>
          </div>
          </div>
        </div>  




        </div>

        {/* right side bar */}        
        <div className="max-w-[2.6vw]  hidden md:block ">
          <img src={assets.Side_frame2} alt="" className=""/>          
        </div>

      </div>


      {/* bottom - image */}
      <div className="flex justify-center">
      <div className="flex justify-between items-end md:min-h-[16vh] ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[20vw] md:max-w-[16vw] md:min-h-[3vh]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[60vw] md:max-w-[61vw] md:min-h-[5vh]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[20vw] md:max-w-[16vw] md:min-h-[3vh]"/>
      </div>
     </div>
    </div>
  );
};




export default Home_test