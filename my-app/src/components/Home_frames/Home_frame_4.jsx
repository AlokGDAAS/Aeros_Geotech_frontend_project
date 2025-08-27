import React from 'react'
import Carousal2 from '../utils/Carousal2'
import { assets } from '../../assets/Home_frontend/assets'

const Home_frame_4 = () => {
    
  const images = [
    assets.home_drone,
    assets.home_drone,
    
  ]


  return (
    <div className="bg-[url('/asset/backround_2.svg')] bg-cover bg-center " style={{backgroundColor:"#111B22",padding:"7vw 5vw",color:"#FFFFFF"}}>
      <div>
        {/* ------------------------------------------------- */}
          <div className='max-w-[95vw] mt-[10vw]'>
                <Carousal2 images={images}/>
          </div>
           
          {/* ------------------------------------------------- */}
          <div style={{ justifyContent:"space-between",}} className='lg:flex grid-container-home-frame-4'>
            <div className='max-h-[21vw] flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>25+</p>
               <p className='d-font-p1'>Years Experience</p>
             </div>
             </div>

            <div className='max-h-[21vw] flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>375+</p>
               <p  className='d-font-p1'>Completed Projects</p>
             </div>
             </div>

            <div className='max-h-[21vw] flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>99%</p>
               <p  className='d-font-p1'>Positive Reviews</p>
             </div>
             </div>

            <div className='max-h-[21vw] flex'>
            <img src={assets.ab_side_stick} alt='' />
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>120+</p>
               <p  className='d-font-p1'>Expert Pilots</p>
             </div>
             </div>
             <div></div>

          </div>
      </div>

    </div>
  )
}

export default Home_frame_4