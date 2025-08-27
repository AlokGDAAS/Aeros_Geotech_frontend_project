import React from 'react'
import HorizontalSlider2 from '../utils/HorizontalSlider2'
import { assets } from '../../assets/Home_frontend/assets'
import Head_card from '../utils/Head_card'




const Home_frame_5 = () => {

    const cont = {
    heading:"BLOG & NEWS",
    des1:"Recent Post &",
    des2:"Article",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam"
  }



  return (
    <div style={{position:"relative"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", background:"#0A192F",color:"white", padding:"13vh 1vw" }}>

        
              <div>
                <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
              </div>                     
             
              <div className='overflow-hidden'>
                  <HorizontalSlider2/> 
               </div>          
            </div>
                  <div style={{position:"absolute", top:"5%", right:"5%"}} className='max-w-[20vw]'>
                   <img src={assets.drone_frame_5} alt=''/>
                  </div>          
       </div>     

      
     


  )
}

export default Home_frame_5