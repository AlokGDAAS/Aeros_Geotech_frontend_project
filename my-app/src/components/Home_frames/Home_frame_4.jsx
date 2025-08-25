import React from 'react'
import Carousal2 from '../utils/Carousal2'

const Home_frame_4 = () => {



  return (
    <div className="bg-[url('/asset/backround_2.svg')] bg-cover bg-center px-1" style={{backgroundColor:"#111B22",padding:"100px 72px",color:"#FFFFFF"}}>
      <div>
        {/* ------------------------------------------------- */}

           <Carousal2/>
          {/* ------------------------------------------------- */}
          <div style={{display:"flex", justifyContent:"evenly", maxWidth:"90vw"}}>
             <div style={{width:"25%"}} className='home_frame_4_box'>
               <p className='home_frame_4_number'>25+</p>
               <p style={{fontSize:"20px",fontWeight:"400",lineHeight:"150%" ,letterSpacing:"0%"}}>Years Experience</p>
             </div>

             <div style={{width:"25%"}} className='home_frame_4_box'>
               <p className='home_frame_4_number'>375+</p>
               <p style={{fontSize:"20px",fontWeight:"400",lineHeight:"150%" ,letterSpacing:"0%"}}>Completed Projects</p>
             </div>

             <div style={{width:"25%"}} className='home_frame_4_box'>
               <p className='home_frame_4_number'>99%</p>
               <p style={{fontSize:"20px",fontWeight:"400",lineHeight:"150%" ,letterSpacing:"0%"}}>Positive Reviews</p>
             </div>

             <div style={{width:"25%"}} className='home_frame_4_box'>
               <p className='home_frame_4_number'>120+</p>
               <p style={{fontSize:"20px",fontWeight:"400",lineHeight:"150%" ,letterSpacing:"0%"}}>Expert Pilots</p>
             </div>

          </div>
      </div>

    </div>
  )
}

export default Home_frame_4