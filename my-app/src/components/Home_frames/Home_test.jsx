import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";


const Home_test = () => {

    const [isMenu, setIsMenu] = useState(false);
  
    const closeMenu = () => setIsMenu(false);
  return (
    <div className="bg-[url('/asset/background_1.png')] bg-cover bg-center px-[2vw] md:px-[0.5vw] h-[100vh]">
      <div className="flex justify-between h-[84vh] ">
        {/* left side bar */}
        <div className="max-w-[2.6vw]">
          <img src={assets.Side_frame1} alt="" className="max-w-[2.6vw] min-w-[4vw] md:min-w-[2vw] min-h-[95vh]"/>
        </div>




        {/* middile content*/}
        <div className="md:max-w-[90vw] max-w-[85vw]">
           {/* nav bar */}
           <div>
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
          {/* banner */}
          <div className="flex justify-center relative ">
          <img src={assets.banner_1} alt="Banner" className="max-w-[61vw]" />
          <img src={assets.banner_1_circle} alt="" style={{position:"absolute", right:"23%",top:"14%", width:"10%"}}/>
          </div>




        {/* drone box */}   
        <div className="flex max-h-[58vh]  ">
        {/* circle */}
        <div className=" items-end w-1/2 pb-[3vw] hidden md:flex">
         <img src={assets.home_img} alt="" className="max-w-[12vw] ml-[7vw]"/>
        </div>

        {/* drone */}        
         <div className="w-full">
          <img src={assets.drone_1} alt="Drone" className="mt-[10vh] md:mt-[0]" />
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

       <div className="flex md:hidden">
        <div className=" items-end w-1/2 pb-[3vw] ">
         <img src={assets.home_img} alt="" className="max-w-[20vw] ml-[7vw]"/>
        </div>
          <div className=" items-end w-1/2  ">
          <div className=" min-w-[25vw] d-font-home mr-[2vw] p-[1vw] text-center rounded" style={{color:"#08d7fca9" ,border:"1px solid #08d7fca1"}}>      
          
                 Lorem Ipsum is simply dummy text of the 
                  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                  took a galley of type and scrambled it to make a type specimen book.. 
                 
          </div>
          </div>        

       </div>


        </div>

        {/* right side bar */}        
        <div>
          <img src={assets.Side_frame2} alt="" className="max-w-[2.6vw] min-w-[4vw] md:min-w-[2vw] min-h-[95vh]"/>          
        </div>

      </div>


      {/* bottom - image */}
      <div className="flex justify-center">
      <div className="flex justify-between items-end  min-w-[85vw] min-h-[16vh] ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[14vw] lg:max-w-[16vw] min-h-[3vh]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[50vw] lg:max-w-[61vw] min-h-[5vh]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[14vw] lg:max-w-[16vw] min-h-[3vh]"/>
      </div>
     </div>
    </div>
  );
};




export default Home_test