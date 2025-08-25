import React from 'react'
import HorizontalSlider2 from '../utils/HorizontalSlider2'
import { assets } from '../../assets/Home_frontend/assets'




const Home_frame_5 = () => {
  return (
    <div style={{position:"relative"}}>
    <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", background:"#0A192F",color:"white", padding:"13vh 1vw" }}>
         
              <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"0rem auto"}}>
                <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"16%" ,color:"#08D7FC"}}>BLOG & NEWS</p>
                <div className='flex gap-2 mb-2'>
                      <p style={{fontSize:"48px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%"}}>Recent Post &</p>
                      <div className='flex flex-col w-fit'>
                        <p style={{fontSize:"48px", fontWeight:"600", lineHeight:"150%" ,letterSpacing:"0%" ,color:"#08D7FC"}}>Article</p>
                        <hr style={{border:"2px solid #08D7FC", width:"6vw", margin:"3px auto", borderRadius:"10px" ,}}/>
                        <hr style={{border:"2px solid #08D7FC", width:"10vw" ,margin:"3px auto",borderRadius:"10px"}}/>
                       </div>
                </div>     

                <p style={{fontSize:"20px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%",textAlign:"center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
                  facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
                  libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.</p>
              </div>

              <div>
                     
              </div>
                  <HorizontalSlider2/>        
            </div>
                  <div style={{position:"absolute", top:"5%", right:"5%"}}>
                   <img src={assets.drone_frame_5} alt=''/>
                  </div>          
       </div>     

      
     


  )
}

export default Home_frame_5