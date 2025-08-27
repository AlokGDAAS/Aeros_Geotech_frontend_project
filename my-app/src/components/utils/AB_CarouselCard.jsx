import React, { useState } from 'react'


const AB_CarouselCard = ({image,head,para}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 70;    
  return (
    <div>
    <div className='flex flex-col hover:scale-105 transition-all duration-300' style={{backgroundColor:"#1A2731", borderRadius:"10px",padding:"12px" ,gap:"24px" }}>
        {/* -------------------------Image--------------------------- */}
        <div className=''>
            
                <img src={image} alt=''className=''/>            
        </div>
         {/* -------------------------Head--------------------------- */}
         <div>
            <p style={{fontSize:"24px" , fontWeight:"500", lineHeight:"150%" ,letterSpacing:"0%"}}>{head}</p>
         </div>
        <div>
           <p style={{fontSize:"16px",lineHeight:"150%",letterSpacing:"0%", fontWeight:"400",color:"#C6C6C6"}}>{isExpanded ? para : para.substring(0, limit) + (para.length > limit ? "..." : "")}</p>
        </div>
        {/* -------------------------Learn more--------------------------- */}
        <div>
          <p onClick={() => setIsExpanded(!isExpanded)} style={{fontSize:"15px",lineHeight:"100%",letterSpacing:"0%", fontWeight:"600",color:"#08D7FC",cursor:"pointer"}}>LEARN MORE</p>
        </div>

    </div>
    </div>
  )
}

export default AB_CarouselCard