import React from 'react'
import Carousal2 from '../utils/Carousal2'
import { assets } from '../../assets/Home_frontend/assets'

const Ab_frame_2 = () => {

  const images = [
    assets.ab_drone_2,
    assets.ab_drone_2,
    assets.ab_drone_2    
  ];
  
  const content = [
    {
      head:"50+Kg",
      desc1:"50 Kg sprayding payload{1}",
      desc2:"40 Kg spraying payload(1)"
    },
    {
      head:"ACTIVE PHASED ARRAY",
      desc1:"Active phased array Radar+",
      desc2:"Binoculor vision"
    },
    {
      head:"DUAL AUTOMATIZED",
      desc1:"Dual automatized",
      desc2:"Spraying system"
    },
    {
      head:"SUPPORTS FLIGHT",
      desc1:"Supports flights spraying/spreading",
      desc2:"And RC Mapping"
    },
    {
      head:"IPX6K",
      desc1:"Core Modules",
      desc2:"IPX6K[2]"
    },
    {
      head:"EFI Generator",
      desc1:"EFI Generator",
      desc2:"15% fuel saving[3]"
    },
  ]

  const Box = ({head,desc1,desc2})=>{
    return(
       <div>
          <div className='flex max-h-[20vw]' >    

            <img src={assets.ab_side_stick} alt=''/>
             <div className='flex flex-col justify-between ml-[1vw]'>
               <p className='ab_frame_2_number'>{head}</p>
               <div>
               <p className='ab-frame_2_desc'>{desc1}</p>
               <p className='ab-frame_2_desc'>{desc2}</p>
               </div>
             </div>
             </div>
       </div>

    )
  }
  return (
    <div style={{backgroundColor:"#141D24"}} className='relative py-[2vw] md:py-[5vw] px-[5vw]'>
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
          <div className='flex flex-col md:flex-row md:flex-wrap gap-[2vw] mt-[8vw]'>
            {
              content.map((item,index)=>(
                <div key={index} className='md:min-w-[31%]'>

                  <Box head={item.head} desc1={item.desc1} desc2={item.desc2}/>

                </div>
              ))
            }
         
          </div>
      </div>
      <div className='absolute md:top-[0] md:left-[0]  top-[2vw] left-[1vw]   '>
        <img src={assets.ab_frame_2_corner_drone_1} alt='' className='max-w-[20vw]'/ >
      </div>
      <div className='absolute md:top-[0] md:right-[0] top-[2vw] right-[1vw]'>
        <img src={assets.ab_frame_2_corner_drone_2} alt='' className='max-w-[20vw]'/ >
      </div>
    </div>
  )
}

export default Ab_frame_2