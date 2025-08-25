import React from 'react'


const CaraoselCard = ({image,name,para,signImage}) => {
  
  return (
    <div className='p-8 flex flex-col gap-6 hover:scale-x-110 hover:scale-y-105  transition-all duration-300' style={{backgroundColor:"#1A2731", borderRadius:"10px" }}>
        {/* -------------------------Image and  name--------------------------- */}
        <div className='flex gap-4'>
            <div>
                <img src={image} alt=''className='w-14 rounded-full'/>
            </div>
            <div className='flex flex-col justify-center'>
                <p style={{fontSize:"16px",lineHeight:"150%",letterSpacing:"0%", fontWeight:"500"}}>{name}</p>
                <p style={{fontSize:"16px",lineHeight:"150%",letterSpacing:"0%", fontWeight:"400",color:"#C6C6C6"}}>Founder</p>
            </div>
            
        </div>
         {/* -------------------------Statements--------------------------- */}
        <div>
           <p style={{fontSize:"14px",lineHeight:"150%",letterSpacing:"0%", fontWeight:"400",color:"#C6C6C6"}}>{para}</p>
        </div>
        {/* -------------------------Signature--------------------------- */}
        <div>
          <img src={signImage} alt='' className='w-33'/>
        </div>

    </div>
  )
}

export default CaraoselCard