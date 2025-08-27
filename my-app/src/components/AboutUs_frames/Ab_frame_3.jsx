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
            <div style={{position:"relative"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", background:"#111B22",color:"white", padding:"13vh 1vw" }}>
         


              <div>
                 <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>    
              </div>
              <div className='overflow-hidden'>
                    <Ab_HorizontalSlider/>     
              </div>
                    
            </div>
                  <div style={{position:"absolute", top:"5%", right:"5%"}}>
                   <img src={assets.drone_frame_5} alt=''/>
                  </div>          
       </div> 
    </div>
  )
}

export default Ab_frame_3