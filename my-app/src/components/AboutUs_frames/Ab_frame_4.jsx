import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

const Ab_frame_4 = () => {
  return (
    <div style={{padding:"100px 72px",backgroundColor:"#141E25"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>

            {/*-------------------------------Left section ------------------------------ */}
            <div className='flex items-center'>
              <div>
            <p className='d-font-h'>CRETIFICATIONS</p>
            <div className='flex flex-col md:flex-row gap-2 mb-[2vw] items-center'>
                <p className='d-font-d1  md:pb-[1.5vw]'>All</p>
                <div className='flex flex-col w-fit'>
                    <p className='d-font-d1'>Certificates</p>
                    <hr style={{width:"6vw"}} className='hr1'/>
                    <hr style={{width:"10vw"}}  className='hr1'/>
                </div>
            </div>  
              <div style={{padding:"1vw 0rem"}}>
                <img src={assets.ab_frame_4_readmore} alt=''className='hover:scale-105 transition-all duration-300'/>
              </div>                
              </div>

            </div>
            {/*-------------------------------Right section ------------------------------ */}
            <div className='relative'>
                <img src={assets.ab_frame_4_img} alt='' style={{zIndex:"5"}}/>
                <img src={assets.left_dotted_corner} alt='' style={{position:"absolute" ,bottom:"1.5%",right:"1.5%", zIndex:"1"}}/>
                <img src={assets.right_dotted_corner} alt=''style={{position:"absolute",top:"1.5%",left:"1.25%", zIndex:"2"}}/>
            </div>

        </div>
    </div>
  )
}

export default Ab_frame_4