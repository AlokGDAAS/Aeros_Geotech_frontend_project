import React, { useState } from 'react'
import { assets } from '../../assets/Home_frontend/assets';

const AboutUsCards = ({image,heading,paragraph}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 70;

  return (
    <div >
        <div style={{padding:"4vh 2vw",backgroundColor:"#1A2731", borderRadius:"10px"}} className='hover:scale-105 transition-all duration-300' >
          <div className='flex items-center justify-between ' >
          <img src={image} alt='' style={{minWidth:"4vw" ,marginBottom:"1.5rem"}}/>

          </div>
        
            <p style={{marginBottom:"0.75rem"}} className='d-font-card-h1'>{heading}</p>
            <p style={{marginBottom:"1rem"}} className='d-font-card-p1'>{isExpanded ? paragraph : paragraph.substring(0, limit) + (paragraph.length > limit ? "..." : "")}</p>
        <p onClick={() => setIsExpanded(!isExpanded)} style={{cursor:"pointer"}} className='d-font-card-more'>LEARN MORE</p> 
        </div> 
    </div>
  )
}

export default AboutUsCards