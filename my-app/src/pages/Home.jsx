import React from "react";
import { assets } from "../assets/Home_frontend/assets";
import Home_frame_1 from "../components/Home_frames/Home_frame_1";
import Home_frame2 from "../components/Home_frames/Home_frame2";
import Home_frame_3 from "../components/Home_frames/Home_frame_3";
import Home_frame_4 from "../components/Home_frames/Home_frame_4";
import Home_frame_7 from "../components/Home_frames/Home_frame_7";
import Home_frame_6 from "../components/Home_frames/Home_frame_6";
import Home_frame_5 from "../components/Home_frames/Home_frame_5";
import Home_test from "../components/Home_frames/Home_test";
import Home_frame_4_caraosel from "../components/utils/Home_frame_4_caraosel";

const Home = () => {




  return (
    <div className="max-w-[100vw]">
    {/* <div className="relative  ">
    <div className="flex  bg-[url('/asset/background_1.png')] bg-cover bg-center  pt-18">
     
      <div className="flex items-start">
        <img src={assets.Side_frame1} alt="Left Side Frame" className="h-[84vh] max-w-[3.125vw]" />
      </div>

    
      <div className="flex-1 flex flex-col md:justify-between  ">


    
        <div className="flex justify-center my-3 relative">
          <div className="md:max-w-[50vw] relative">

          
          <img src={assets.banner_1} alt="Banner" className="" />
          <img src={assets.banner_1_circle} alt="" style={{position:"absolute", right:"5%",top:"14%", width:"15%"}}/>
          </div>
        </div>

   
        <div className="flex justify-center my-4 ">
          <img src={assets.drone_1} alt="Drone" className="md:h-[55vh]  md:max-w-[55vw]" />
        </div>

  
        <div className="flex justify-center  flex-end ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[14vw] lg:max-w-[16vw]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[50vw] lg:max-w-[61vw]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[14vw] lg:max-w-[16vw]"/>
        </div>
      </div>

     
      <div className="flex items-start">
        <img src={assets.Side_frame1} alt="Right Side Frame" className="h-[84vh]  max-w-[3.125vw]" />
      </div>
    </div>
    <div 
    style={{position:"absolute", top:"65%", left:"10%"}} className=" max-w-[15vw]"
    >
        <img src={assets.home_img} alt=""/>
    </div>
    <div style={{position:"absolute", top:"65%", right:"8%",}}  className=" max-w-[21.3vw] ">
       <img src={assets.msg_box_1} alt=""/>
    </div>
    <div style={{position:"absolute", top:"66%", right:"10%", maxWidth:"17vw"}}  className="max-w-[57vw] ">
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem"}}className="">
          <p style={{fontSize:"0.83vw" ,fontWeight:"400", lineHeight:"135%",letterSpacing:"0%", color:"#FFFFFF" ,textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
              facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
              libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam</p>
      </div>
    </div>
    </div> */}
    <Home_test/>
    <Home_frame_1/>
    <Home_frame2/>
    <Home_frame_3/>
    <Home_frame_4/>
    <Home_frame_5/>
    <Home_frame_6/>
    <Home_frame_7/>
  
  
    </div>
    
  );
};

export default Home;
