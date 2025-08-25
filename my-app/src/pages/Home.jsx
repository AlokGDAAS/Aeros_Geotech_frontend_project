import React from "react";
import NavBar from "../components/NavBar";
import { assets } from "../assets/Home/assets";
import Home_frame_1 from "../components/Home_frames/Home_frame_1";
import Home_frame2 from "../components/Home_frames/Home_frame2";
import Home_frame_3 from "../components/Home_frames/Home_frame_3";
import Home_frame_4 from "../components/Home_frames/Home_frame_4";
import Home_frame_7 from "../components/Home_frames/Home_frame_7";
import Home_frame_6 from "../components/Home_frames/Home_frame_6";
import Home_frame_5 from "../components/Home_frames/Home_frame_5";

const Home = () => {
  return (
    <div className="">
    <div className="flex max-h-[100vh] max-w-[100vw] bg-[url('/asset/background_1.png')] bg-cover bg-center px-1 relative">
      {/* Left Side Frame */}
      <div className="flex items-start">
        <img src={assets.Side_frame1} alt="Left Side Frame" className="h-[84vh]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between ">
        {/* Navbar */}
        <NavBar />

        {/* Banner */}
        <div className="flex justify-center my-6 relative">
          <img src={assets.banner_1} alt="Banner" className="h-[18vh] " />
          <img src={assets.banner_1_circle} alt="" style={{position:"absolute", right:"28%",top:"12%", width:"8%"}}/>
          
        </div>

        {/* Drone */}
        <div className="flex justify-center my-4">
          <img src={assets.drone_1} alt="Drone" className="h-[55vh] object-contain" />
        </div>

        {/* Bottom Images */}
        <div className="flex justify-center gap-6 items-end pb-6">
          <img src={assets.bottom_left} alt="Bottom Left" className="h-[3vh]" />
          <img src={assets.bottom_middle} alt="Bottom Middle" className="h-[7vh]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="h-[3vh]" />
        </div>
      </div>

      {/* Right Side Frame */}
      <div className="flex items-start">
        <img src={assets.Side_frame1} alt="Right Side Frame" className="h-[84vh]" />
      </div>
    </div>
    <div style={{position:"absolute", top:"65%", left:"10%"}}>
        <img src={assets.home_img} alt=""/>
    </div>
    <div style={{position:"absolute", top:"65%", right:"10%",}}>
       <img src={assets.msg_box_1} alt=""/>
    </div>
    <div style={{position:"absolute", top:"67%", right:"12%", maxWidth:"17vw"}}>
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem"}}>
          <p style={{fontSize:"12px" ,fontWeight:"400", lineHeight:"135%",letterSpacing:"0%", color:"#FFFFFF" ,textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
              facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
              libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam</p>
      </div>
    </div>
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
