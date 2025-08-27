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
    <div style={{backgroundColor:"#111B22",color:"#FFFFFF"}}>
        <div>
              <div className='pt-[4vw] pb-[1vw]'>
                <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
              </div>
        </div>

    <div className='bg-[url(/asset/ab_frame_8_bg.svg)] bg-cover bg-center' style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
        <div></div>
        <div style={{backgroundColor:"#1A2731", width:"44vw", padding:"40px",borderRadius:"20px" }} className='my-20'>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{fontSize:"36px", fontWeight:"500", lineHeight:"150%", letterSpacing:"0%"}}>DJI Agras t20</p>
                <img src={assets.ab_frame_8_more} alt=''/>
            </div>
            <div>
                <AB_Carousel3_frame_8 images={images}/>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Ab_frame_8