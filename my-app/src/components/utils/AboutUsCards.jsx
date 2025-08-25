import React, { useState } from 'react'

const AboutUsCards = ({image,heading,paragraph}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 70;

  return (
    <div >
        <div style={{padding:"4vh 2vw",backgroundColor:"#1A2731", borderRadius:"10px"}} className='hover:scale-105 transition-all duration-300' >
        <img src={image} alt='' style={{width:"4vw" ,marginBottom:"1.5rem"}}/>
            <p style={{fontSize:"20px", fontWeight:"500", lineHeight:"150%" ,letterSpacing:"0%",marginBottom:"0.75rem"}}>{heading}</p>
            <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%", color: "#C6C6C6",marginBottom:"1rem"}}>{isExpanded ? paragraph : paragraph.substring(0, limit) + (paragraph.length > limit ? "..." : "")}</p>
        <p onClick={() => setIsExpanded(!isExpanded)} style={{fontSize:"15px", fontWeight:"600", lineHeight:"100%" ,letterSpacing:"10%", color: "#08D7FC", cursor:"pointer"}}>LEARN MORE</p> 
        </div> 
    </div>
  )
}

export default AboutUsCards