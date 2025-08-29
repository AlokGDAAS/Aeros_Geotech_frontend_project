import React from "react";
import { assets } from "../../assets/Home_frontend/assets";

const Ab_frame_4 = () => {
  return (
    <div className="bg-[ #111b22d7] relative">
       <div className="flex py-[6.94vw] px-[5vw] justify-between" >
        <div className="flex ">
        <div  style={{display:"flex", flexDirection:"column", justifyContent:"center",maxWidth:"80vw",margin:"0 auto"}}>
            <p className='d-font-h text-center md:text-start'>Certifications</p>
            <div className='flex flex-col md:flex-row gap-2 mb-[2vw] items-center '>
                <p className='d-font-d1  md:pb-[1.5vw]'>All</p>
                <div className='flex flex-col w-fit justify-center'>
                    <p className='d-font-d1 md:pb-[0] pb-[0.5vh]'>Certificates</p>
                    <hr style={{width:"6vw"}} className='hr1'/>
                    <hr style={{width:"10vw"}}  className='hr1'/>
                </div>
            </div>     
           <div className="flex justify-center md:justify-start pt-[1vh] md:pt-0">
           <img src={assets.ab_frame_4_readmore} alt="" className="max-w-[12.72vw]"/>
           </div>
        </div>          
        </div>




        <div>
          <img src={assets.ab_frame_4_img} alt="" className="max-w-[38.37vw]"/>
        </div>


        
       </div>
                  <div className='absolute md:top-[4%] md:left-[2%] top-[4vh] left-[36vw] hidden md:block'>
                   <img src={assets.ab_frame_4_drone} alt='' className='max-w-[25vw]'/>
                  </div> 
    </div>
  );
};

export default Ab_frame_4;
