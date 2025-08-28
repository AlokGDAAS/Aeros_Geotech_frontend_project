import React from "react";
import { assets } from "../../assets/Home_frontend/assets";

const Ab_frame_5 = () => {
  return (
    <div className="p-[2vw]" style={{backgroundColor:"#111B22"}} >
      <div className="flex flex-col-reverse md:flex-row py-[6.94vw] px-[5vw] justify-between relative" >

        <div className="w-full">
         <img src={assets.ab_frame_5_img} alt="" className="min-w-[38.37vw] md:max-w-[38.37vw]"/>
        </div>

        <div className="w-full flex flex-col justify-center text-center md:text-start pt-[20vw] md:pt-0 pb-[8vw] md:pb-[0]">
          <p className="d-font-h pb-[1vw]">VISION</p>
          <p className="d-font-p1">
            It is a proven fact that by utilizing drone technology, customers
            can significantly overcome labor shortage issues and reduce the risk
            to their employees when performing certain tasks that are normally
            categorized as High Risk in Handling Pesticide Management. We
            assist our customers in their efforts to reduce their operating
            expenses by achieving the same results by utilizing drones to
            perform many tasks that are normally completed using more expensive
            options.
          </p>
        </div>
            <div className='absolute md:top-[2vw] md:right-[1vw] top-[5vw] right-[32vw]'>
            <img src={assets.ab_frame_5_drone} alt='' className='max-w-[30vw]'/>
            </div> 
      </div>
      
    </div>
  );
};

export default Ab_frame_5;
