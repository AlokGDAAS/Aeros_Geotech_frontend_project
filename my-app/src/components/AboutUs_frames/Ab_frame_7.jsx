import React from 'react'
import Carousel3 from '../utils/Carousel3'
import { assets } from '../../assets/Home_frontend/assets';

const Ab_frame_7 = () => {

    const images = [
     
      assets.ab_frame_7_img,
      assets.ab_frame_7_img
    ];

  return (
    <div style={{position:"relative"}}>
        <div style={{backgroundColor:"#111b22", padding:"10rem 2rem"}}>
        <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"0rem auto"}}>
            <p className='d-font-h'>SOFTWARE</p>
            <div className='flex flex-col md:flex-row gap-2 mb-[2vw] items-center'>
         
                <div className='flex flex-col w-fit'>
                    <p className='d-font-d1'>Software</p>
                    <hr style={{width:"6vw"}} className='hr1'/>
                    <hr style={{width:"10vw"}}  className='hr1'/>
                </div>
            </div>     

            <p style={{textAlign:"center" }} className='d-font-p1'>Process and Analysing</p>
        </div>
        </div>

      {/*---------------------------------- Carausel -------------------- */}
        <div>
           
        </div>
      {/*----------------------------------------------------------------------- */}
        <div style={{display:"flex", justifyContent:"center", gap:"6rem", padding:"4rem 2rem", paddingTop:"20rem" ,backgroundColor:"#162026"}}>
            <img src={assets.ab_frame_7_logo_1} alt=''/>
            <img src={assets.ab_frame_7_logo_2} alt=''/>
            <img src={assets.ab_frame_7_logo_3} alt=''/>
            <img src={assets.ab_frame_7_logo_4} alt=''/>

        </div>
        <div style={{position:"absolute" ,top:"35%"}}>
                    <Carousel3 images={images}/>
        </div>

    </div>
  )
}

export default Ab_frame_7