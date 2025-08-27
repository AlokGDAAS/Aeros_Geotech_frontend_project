import React from 'react'

const Head_card = ({heading,des1,des2,para}) => {
  return (
    <div>
        <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"0rem auto"}}>
            <p className='d-font-h'>{heading}</p>
            <div className='flex flex-col md:flex-row gap-2 mb-[2vw] items-center'>
                <p className='d-font-d1  md:pb-[1.5vw]'>{des1}</p>
                <div className='flex flex-col w-fit'>
                    <p className='d-font-d2'>{des2}</p>
                    <hr style={{width:"6vw"}} className='hr1'/>
                    <hr style={{width:"10vw"}}  className='hr1'/>
                </div>
            </div>     

            <p style={{textAlign:"center" }} className='d-font-p1'>{para}</p>
        </div>
    </div>
  )
}

export default Head_card