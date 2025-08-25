import React from 'react'
import { assets } from '../assets/Home_frontend/assets'
import {FaAngleDown} from 'react-icons/fa'

const Footer = () => {
  return (
   <div style={{backgroundColor:"#18222A",}}>
    <div style={{ padding:"4.5rem", color:"white"}} className='footer'>
       <div style={{display:"grid", gridTemplateColumns:"2fr 3fr", margin:"0px auto"}}>

         {/* ----------------------------------Input Box-------------------------------- */}
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
               <img src={assets.nav_icon_1} alt='' style={{marginBottom:"1.5rem"}}/>
            </div>
            <div>
                <p style={{fontSize:"16px", fontWeight:"400" ,lineHeight:"150%",letterSpacing:"0%",marginBottom:"1.5rem"}}>Change Your Point Of View Change Your History</p>
            </div>
            <div style={{display:"flex",gap:"1rem", color:"#828282",marginBottom:"1.5rem"}}>
               <input type='text' placeholder='Email Address' style={{backgroundColor:"white",padding:"0px 4rem",borderRadius:"8px"}}/>
               <img src={assets.arrow_icons} alt=''className='hover:scale-108 transition-all duration-300 rounded'  />
            </div>
            <div style={{display:"flex",gap:"1rem"}}>
               <img src={assets.twitter} alt='' style={{cursor:"pointer"}}/>
               <img src={assets.facebook} alt='' style={{cursor:"pointer"}}/>
               <img src={assets.linked_in} alt='' style={{cursor:"pointer"}}/>
               <img src={assets.Yout_icon} alt='' style={{cursor:"pointer"}}/>
            </div>
        </div>

      <div className='flex'>
   {/* ----------------------------------Contact-------------------------------- */}     
        <div className='w-full'>
   
           <ul style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center", gap:"1rem",color:"white"}}>
            <li style={{fontSize:"20px" , fontWeight:"600", lineHeight:"150%",letterSpacing:"0%"}}>Contact</li>
            <li>admin@geotech.com</li>
            <li>+805-72399999</li>
            <li>Aeros Geotech Sdn. Bhd. 2A Lintang Maju 1/1 Taman Sarai Maju 134300 Bagan Serai Prak</li>
           </ul>
        </div>

   {/* ----------------------------------Explore-------------------------------- */}     
        <div className='w-full'>
    
           <ul style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center", gap:"1rem"}}>
            <li style={{fontSize:"20px" , fontWeight:"600", lineHeight:"150%",letterSpacing:"0%",color:"white"}}>Explore</li>
            <li>Home</li>
            <li className='flex items-center gap-1'>Product<FaAngleDown/></li>
            <li className='flex items-center gap-1'>Drone as Service<FaAngleDown/></li>
            <li>Blog</li>
            <li>About Us</li>
            <li>training</li>
           </ul>
        </div>

   {/* ----------------------------------Support-------------------------------- */}
        <div className='w-full'>
         
           <ul style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center", gap:"1rem"}}>
            <li style={{fontSize:"20px" , fontWeight:"600", lineHeight:"150%",letterSpacing:"0%",color:"white"}}>Support</li>
            <li>Support Desk</li>
            <li>Career</li>
            <li>FAQS</li>
            <li>Contact</li>
            <li>Call Center</li>
           </ul>
        </div>
       </div>  
        </div>
    </div>
     <hr style={{border:"1px solid #777777"}}/>

     <div style={{display:"flex" , justifyContent:"space-between", padding:"1rem 4rem" ,color:"#E4E4E4"}}>
      <p style={{fontSize:"16px", fontWeight:"400" ,lineHeight:"32px",letterSpacing:"0%"}}>Copyright&copy;2025 Alok Dev</p>
      <p style={{fontSize:"16px", fontWeight:"400" ,lineHeight:"32px",letterSpacing:"0%"}}>Privacy Policy <span>Terms and Conditions</span></p>
     </div>

    </div>
  )
}

export default Footer