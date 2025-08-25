import React from 'react'
import Carousal1 from '../utils/Carousal1'
import HorizontalSlider from '../utils/HorizontalSlider'
import { assets } from '../../assets/Home/assets'




const Home_frame_3 = () => {
  return (
    <div style={{background:"#0A192F",position:"relative"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", color:"white", padding:"13vh 1vw" }}>
         
              <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"0rem auto"}}>
                <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"16%" ,color:"#08D7FC"}}>TESTIMONIAL</p>
                <div className='flex gap-2 mb-2'>
                      <p style={{fontSize:"48px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%"}}>What Client Say About </p>
                      <div className='flex flex-col w-fit'>
                        <p style={{fontSize:"48px", fontWeight:"600", lineHeight:"150%" ,letterSpacing:"0%" ,color:"#08D7FC"}}>Our Service</p>
                        <hr style={{border:"2px solid #08D7FC", width:"6vw", margin:"3px auto", borderRadius:"10px" ,}}/>
                        <hr style={{border:"2px solid #08D7FC", width:"10vw" ,margin:"3px auto",borderRadius:"10px"}}/>
                       </div>
                </div>     

                <p style={{fontSize:"20px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%",textAlign:"center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
                  facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
                  libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.</p>
              </div>

              <div>
              <HorizontalSlider/>               
              </div>
            </div>
                <div style={{position:"absolute", top:"37%", right:"2%"}}>
                 <img src={assets.dron_4} alt=''/>
                </div>
                <div style={{position:"absolute", top:"8%", left:"2%"}}>
                 <img src={assets.dron_5} alt='' />
                </div>
            </div>
     


  )
}

export default Home_frame_3