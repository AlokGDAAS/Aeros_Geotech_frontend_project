import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

const Home_frame_6 = () => {
  return (
       <div style={{position:"relative"}}>
        <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", background:"#111B22",color:"white", padding:"100px 72px" }}>
         
              <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"80vw",margin:"0rem auto"}}>
                <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"16%" ,color:"#08D7FC"}}>CLIENTS</p>
                <div className='flex gap-2 mb-2'>
                      <p style={{fontSize:"48px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%"}}>Our</p>
                      <div className='flex flex-col w-fit'>
                        <p style={{fontSize:"48px", fontWeight:"600", lineHeight:"150%" ,letterSpacing:"0%" ,color:"#08D7FC"}}>Service</p>
                        <hr style={{border:"2px solid #08D7FC", width:"6vw", margin:"3px auto", borderRadius:"10px" ,}}/>
                        <hr style={{border:"2px solid #08D7FC", width:"10vw" ,margin:"3px auto",borderRadius:"10px"}}/>
                       </div>
                </div>     

                <p style={{fontSize:"20px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%",textAlign:"center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
                  facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
                  libero aliquam.</p>
              </div>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", margin:"0px auto"}} >
                <div className='clients_card' style={{borderBottom:"1px solid #08D7FC"}}>
                   <img src={assets.jobor_logo} alt=''/>
                </div>
                <div className='clients_card' style={{borderBottom:"1px solid #08D7FC",borderLeft:"1px solid #08D7FC"}}>
                   <img src={assets.fmc_logo} alt=''/>
                </div>
                <div className='clients_card' style={{borderBottom:"1px solid #08D7FC",borderLeft:"1px solid #08D7FC"}}>
                   <img src={assets.klk_logo} alt=''/>
                </div>
                <div className='clients_card' style={{borderRight:"1px solid #08D7FC"}}>
                   <img src={assets.bm_logo} alt=''/>
                </div>
                <div className='clients_card' style={{borderRight:"1px solid #08D7FC"}}>
                   <img src={assets.Sanyeong_logo} alt=''/>
                </div>
                <div className='clients_card' style={{}}>
                   <img src={assets.Probumi_logo} alt=''/>
                </div>
              </div>
            </div>
               <div style={{position:"absolute", top:"10%", left:"5%"}}>
               <img src={assets.drone_frame_6} alt=''/>
               </div> 
            </div>
  )
}

export default Home_frame_6