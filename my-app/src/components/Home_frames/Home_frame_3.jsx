import React from 'react'
import HorizontalSlider from '../utils/HorizontalSlider'
import { assets } from '../../assets/Home_frontend/assets'
import Head_card from '../utils/Head_card'




const Home_frame_3 = () => {

  const cont = {
    heading:"TESTIMONIAL",
    des1:"What Client Say About",
    des2:"Our Services",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam"
  }
  return (
    <div style={{background:"#0A192F",position:"relative"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", color:"white", padding:"13vh 1vw" }}>
         
              <div>
                <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
              </div>

              <div className=' overflow-hidden'>
              <HorizontalSlider/>               
              </div>
            </div>
                <div style={{position:"absolute", top:"37%", right:"2%",maxWidth:"20%"}} className='hidden md:block'>
                 <img src={assets.dron_4} alt=''style={{}}/>
                </div>
                <div style={{position:"absolute", top:"8%", left:"2%",maxWidth:"20%"}}  className='hidden md:block'>
                 <img src={assets.dron_5} alt='' />
                </div>
            </div>
     


  )
}

export default Home_frame_3