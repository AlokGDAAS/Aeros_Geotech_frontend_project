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
