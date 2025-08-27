import React from 'react'


const CaraoselCard = ({image,name,para,signImage}) => {
  
  return (
    <div className='md:py-[2.28vw] md:px-[2.28vw] py-[6vw] px-[6vw] flex flex-col gap-[1.71vw] hover:scale-x-110 hover:scale-y-105  transition-all duration-300' style={{backgroundColor:"#1A2731", borderRadius:"10px" }}>
        {/* -------------------------Image and  name--------------------------- */}
        <div className='flex gap-4'>
            <div>
                <img src={image} alt=''className='w-[4.7vw] rounded-full min-w-[50px]'/>
            </div>
            <div className='flex flex-col justify-center'>
                <p style={{fontWeight:"500"}} className='d-font-card-p1-w'>{name}</p>
                <p  className='d-font-card-p1' >Founder</p>
            </div>
            
        </div>
         {/* -------------------------Statements--------------------------- */}
        <div>
           <p className='d-font-card-p1'>{para}</p>
        </div>
        {/* -------------------------Signature--------------------------- */}
        <div className='pt-[2vw]'>
          <img src={signImage} alt='' className='w-[9.35vw] min-w-[80px]'/>
        </div>

    </div>
  )
}

export default CaraoselCard