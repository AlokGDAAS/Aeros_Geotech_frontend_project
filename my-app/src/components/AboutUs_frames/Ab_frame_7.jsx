import React from 'react'
import Carousel3 from '../utils/Carousel3'
import { assets } from '../../assets/Home_frontend/assets';
import Ab_frame_7_carousel from '../utils/Ab_frame_7_carousel';

const Ab_frame_7 = () => {

    const images = [
     
      assets.ab_frame_7_img,
      assets.ab_frame_7_img
    ];

  return (
    <div className=' py-[4vw]'>
     
        <div   className='flex flex-col justify-center  items-center m-auto '>
            <p className='d-font-h'>SOFTWARE</p>
            <div className='flex flex-col md:flex-row gap-2 items-center'>
         
                <div className='flex flex-col w-fit'>
                    <p className='d-font-d1'>Software</p>
                    <hr style={{width:"6vw"}} className='hr1'/>
                    <hr style={{width:"10vw"}}  className='hr1'/>
                </div>
            </div>     

            <p style={{textAlign:"center" }} className='d-font-p1'>Process and Analysing</p>
        </div>
     

  
        <div>
        <div className=''>
                    <Ab_frame_7_carousel images={images}/>
        </div>           
        </div>

        <div  className='flex justify-center gap-[6vw] md:pt-[4vw]'>
            <img src={assets.ab_frame_7_logo_1} alt='' className='max-w-[12vw]'/>
            <img src={assets.ab_frame_7_logo_2} alt='' className='max-w-[12vw]'/>
            <img src={assets.ab_frame_7_logo_3} alt='' className='max-w-[12vw]'/>
            <img src={assets.ab_frame_7_logo_4} alt='' className='max-w-[12vw]'/>

        </div>


    </div>
  )
}

export default Ab_frame_7