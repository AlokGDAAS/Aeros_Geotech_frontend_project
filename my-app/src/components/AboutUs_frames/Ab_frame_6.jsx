import React from "react";
import { assets } from "../../assets/Home_frontend/assets";

const Ab_frame_6 = () => {
  return (
    <div className="" style={{ backgroundColor: "#16242dff" }}>
      <div className="flex flex-col md:flex-row py-[20vw] md:py-[7vw] md:px-[5vw] px-[10vw] justify-between relative">
        <div className="w-full flex flex-col justify-center text-center md:text-start pb-[8vw] md:pb-0">
          <p className="d-font-h md:pb-[1vw] py-[2vw] md:py-0 ">MISSION</p>
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

        <div className="">
          <img
            src={assets.ab_frame_6_img}
            alt=""
            className="min-w-[38.37vw] md:max-w-[38.37vw]"
          />
        </div>

            <div className='absolute md:top-[2%] md:left-[2%] top-[3vw] right-[35vw]'>
            <img src={assets.ab_frame_6_drone} alt='' className='max-w-[30vw]'/>
            </div>    
      </div>
    </div>
  );
};

export default Ab_frame_6;
