import React, { useState } from 'react'



const CaraoselCard2 = ({image,date,para}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 70;    
  return (
    <div >
    <div className='flex flex-col hover:scale-105 transition-all duration-300 p-[2vw] md:p-[1vw] bg-[#1A2731] mb-[1vw] min-w-[30vw] md:min-w-[13vw]' style={{borderRadius:"10px",gap:"1vw"}}>
        {/* -------------------------Image and  name--------------------------- */}
        <div className=''>
            
                <img src={image} alt=''className=''/>            
        </div>
         {/* -------------------------Statements--------------------------- */}
         <div >
            <p className='d-font-card-p1-w'>{date}</p>
         </div>
        <div>
           <p className='d-font-card-p1'>{isExpanded ? para : para.substring(0, limit) + (para.length > limit ? "..." : "")}</p>
        </div>
        {/* -------------------------Read--------------------------- */}
        <div>
          <p onClick={() => setIsExpanded(!isExpanded)} style={{cursor:"pointer",paddingBottom:"1vw"}} className='d-font-card-more'>READ ARTICLE</p>
        </div>

    </div>
    </div>
  )
}

export default CaraoselCard2