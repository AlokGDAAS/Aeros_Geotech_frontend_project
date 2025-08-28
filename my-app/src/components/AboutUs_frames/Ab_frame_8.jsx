import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'
import AB_Carousel3_frame_8 from '../utils/AB_Carousel3_frame_8'
import Head_card from '../utils/Head_card'

const Ab_frame_8 = () => {

    const cont = {
    heading:"DRONE",
    des1:"Drone",
    des2:"Models",
    para:""
  }
   
   const images =[
    assets.ab_frame_8_drone_1,
    assets.ab_frame_8_drone_1,
    assets.ab_frame_8_drone_1,
    assets.ab_frame_8_drone_1,
    assets.ab_frame_8_drone_1,
   ]

  return (
    <div style={{backgroundColor:"#111B22"}}>
        <div>
              <div className='pt-[4vw] pb-[1vw]'>
                <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
              </div>
        </div>

    <div className='bg-[url(/asset/ab_frame_8_bg.svg)] bg-cover bg-center flex flex-row'>
        <div className='w-1/2'></div>
        <div>
        <div style={{backgroundColor:"#1A2731",borderRadius:"20px" }} className='my-20 p-[2.7vw]'>
            <div className='flex justify-between flex-col md:flex-row items-center'>
                <p className='d-font-p3'>DJI Agras t20</p>
                <img src={assets.ab_frame_8_more} alt='' className='max-w-[10.55vw] mt-[4vw] md:mt-0'/>
            </div>
            <div>
                <AB_Carousel3_frame_8 images={images}/>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Ab_frame_8