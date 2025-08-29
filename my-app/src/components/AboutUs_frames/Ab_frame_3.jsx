import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'
import Ab_HorizontalSlider from '../utils/Ab_HorizontalSlider'
import Head_card from '../utils/Head_card'

const Ab_frame_3 = () => {

    const cont = {
    heading:"CORE BUSINESS",
    des1:"Traverse, Built, ",
    des2:"Encourage",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam"
  }

  return (
    <div>
            <div className='relative py-[8vw] md:py-[5vw] px-[5vw]'style={{background:"#111B22"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between",  }}>
         


              <div className='pt-[9vh] md:pt-0'>
                 <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>    
              </div>
              <div className='overflow-hidden'>
                    <Ab_HorizontalSlider/>     
              </div>
                    
            </div>
                  <div className='absolute md:top-[0] md:right-[0] top-[4vh] right-[36vw]'>
                   <img src={assets.ab_frame_3_corner_drone_1} alt='' className='max-w-[25vw]'/>
                  </div>          
       </div> 
    </div>
  )
}

export default Ab_frame_3