import React from 'react'
import { assets } from '../../assets/Home/assets'

const Home_frame_7 = () => {
  return (
    <div  style={{backgroundColor:"#142029ff", padding:"4.5rem"}}>
        <div style={{backgroundColor:"#182731ff",borderRadius:"10px"}} className="bg-[url('/asset/backround_2.svg')] bg-cover bg-center px-1">
            <div style={{padding:"3.125rem 4.5rem",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p style={{fontSize:"2.2vw", fontWeight:"500", lineHeight:"150%",letterSpacing:"0%", color:"#FFFFFF"}}>What are you waiting for? Contact us right now<br/> and get a free quote for your project</p>
                <div>
                    <img src={assets.free_quote} alt='' style={{marginBottom:"1rem"}} className='hover:scale-105 duration-300 cursor-pointer'/>
                    <img src={assets.contact_trans} alt=''className='hover:scale-105 duration-300 cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home_frame_7