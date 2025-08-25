import React, { useState } from 'react'



const CaraoselCard2 = ({image,date,para}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 70;    
  return (
    <div>
    <div className='flex flex-col hover:scale-105 transition-all duration-300' style={{backgroundColor:"#1A2731", borderRadius:"10px", maxWidth:"21.25vw",padding:"12px" ,gap:"24px" }}>
        {/* -------------------------Image and  name--------------------------- */}
        <div className=''>
            
                <img src={image} alt=''className=''/>            
        </div>
         {/* -------------------------Statements--------------------------- */}
         <div>
            <p>{date}</p>
         </div>
        <div>
           <p style={{fontSize:"16px",lineHeight:"150%",letterSpacing:"0%", fontWeight:"400",color:"#C6C6C6"}}>{isExpanded ? para : para.substring(0, limit) + (para.length > limit ? "..." : "")}</p>
        </div>
        {/* -------------------------Signature--------------------------- */}
        <div>
          <p onClick={() => setIsExpanded(!isExpanded)} style={{fontSize:"15px",lineHeight:"100%",letterSpacing:"0%", fontWeight:"600",color:"#08D7FC",cursor:"pointer"}}>READ ARTICLE</p>
        </div>

    </div>
    </div>
  )
}

export default CaraoselCard2