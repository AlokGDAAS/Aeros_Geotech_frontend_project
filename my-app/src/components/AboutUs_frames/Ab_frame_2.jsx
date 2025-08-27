import React from 'react'
import Carousal2 from '../utils/Carousal2'
import { assets } from '../../assets/Home_frontend/assets'

const Ab_frame_2 = () => {

  const images = [
  
   
    assets.ab_drone_2,
    assets.ab_drone_2,
    assets.ab_drone_2
    
  ];
  return (
    <div style={{backgroundColor:"#141D24", padding:"7vw 5vw", }}>
        <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"4rem auto", color:"#C6C6C6"}}>
            <p style={{padding:"1rem 2rem"}} className='d-font-h'>KEY POINTS</p>     

            <p style={{textAlign:"center"}} className='d-font-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
            facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
            libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
            facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
            libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.
            </p>
        </div>
       <div>
        {/* ------------------------------------------------- */}
          <div className='max-w-[100vw] overflow-hidden'>
             <Carousal2 images={images}/>
          </div>
           
          {/* ------------------------------------------------- */}
          <div style={{ justifyContent:"space-between",}} className='lg:flex grid-container-home-frame-4'>
            <div className=' flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>50Kg</p>
               <p className='d-font-p1'>50 Kg sprayding payload{1}</p>
               <p className='d-font-p1'>40 Kg spraying payload(1)</p>
             </div>
             </div>

            <div className=' flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>ACTIVE PHASED ARRAY</p>
               <p  className='d-font-p1'>Active phased array Radar+</p>
               <p  className='d-font-p1'>Binoculor vision</p>
             </div>
             </div>

            <div className=' flex'>
            <img src={assets.ab_side_stick} alt=''/>
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>DUAL AUTOMATIZED</p>
               <p  className='d-font-p1'>Dual automatized</p>
               <p  className='d-font-p1'>Spraying system</p>
             </div>
             </div>

            <div className=' flex'>
            <img src={assets.ab_side_stick} alt='' />
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>SUPPORTS FLIGHT</p>
               <p  className='d-font-p1'>Supports flights spraying/spreading</p>
               <p  className='d-font-p1'>And RC Mapping</p>
             </div>
             </div>

            <div className=' flex'>
            <img src={assets.ab_side_stick} alt='' />
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>IPX6K</p>
               <p  className='d-font-p1'>Core Modules</p>
               <p  className='d-font-p1'>IPX6K[2]</p>
             </div>
             </div>

            <div className=' flex'>
            <img src={assets.ab_side_stick} alt='' />
             <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingLeft:"1.5rem"}} className='ab_frame_2_box' >
               <p className='home_frame_4_number'>EFI Generator</p>
               <p  className='d-font-p1'>EFI Generator</p>
               <p  className='d-font-p1'>15% fuel saving[3]</p>
             </div>
             </div>
            

          </div>
      </div>
    </div>
  )
}

export default Ab_frame_2