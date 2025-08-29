import React from 'react'
import { assets } from '../assets/Home_frontend/assets'
import {FaAngleDown} from 'react-icons/fa'
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
   <div style={{backgroundColor:"#18222A"}}>
    <div style={{ padding:"2rem", color:"white"}} className='footer'>
       <div style={{gridTemplateColumns:"2fr 3fr", margin:"0px auto"}} className='flex flex-col md:grid'>

         {/* ----------------------------------Input Box-------------------------------- */}
        <div className='flex flex-col items-center md:items-start'>
            <div>
               <img src={assets.nav_icon_1} alt='' />
            </div>
            <div>
                <p className='d-font-card-p1-w my-[4vw] md:my-[2vw]'>Change Your Point Of View Change Your History</p>
            </div>
            <div style={{display:"flex",gap:"1rem", color:"#828282",marginBottom:"1.5rem",}} className='md:flex-row'>
               <input type='text' placeholder='Email Address' style={{backgroundColor:"white",borderRadius:"5px"}} className='md:max-w-[19vw] max-w-[60vw] px-[3vw] py-[1vw]'/>
               <img src={assets.arrow_icons} alt=''className='hover:scale-108 transition-all duration-300 rounded max-w-[18vw]'  />
            </div>
            <div style={{}} className='flex gap-[3vw] md:gap-[1vw]'>
               <img src={assets.twitter} alt='' className='min-w-[12vw] md:min-w-[3vw] cursor-pointer hover:scale-110 duration-300 '/>
               <img src={assets.facebook} alt='' className='min-w-[12vw] md:min-w-[3vw] cursor-pointer hover:scale-110 duration-300 ' />
               <img src={assets.linked_in} alt=''  className='min-w-[12vw] md:min-w-[3vw] cursor-pointer hover:scale-110 duration-300 '/>
               <img src={assets.Yout_icon} alt=''  className='min-w-[12vw] md:min-w-[3vw] cursor-pointer hover:scale-110 duration-300 '/>
            </div>
        </div>

      <div className='flex flex-col md:flex-row gap-2 md:justify-between mt-[4vw] items-center text-center md:text-start point'>
   {/* ----------------------------------Contact-------------------------------- */}     
        <div className='md:max-w-1/4 '>
   
           <ul className='flex flex-col justify-center gap-[1rem]  '>
            <li className='d-font-card-h2-E4'>Contact</li>
            <li className='d-font-card-p1-E4 '><IoMailOutline className='inline' /> admin@geotech.com</li>
            <li className='d-font-card-p1-E4 '><FiPhoneCall className='inline' /> +805-72399999</li>
            <li className='d-font-card-p1-E4 max-w-[40vw]'><div className=''> <GrLocation className='inline'/> Aeros Geotech Sdn. Bhd. 2A Lintang Maju 1/1 Taman Sarai Maju 134300 Bagan Serai Prak</div></li>
            
          
           </ul>
        </div>

   {/* ----------------------------------Explore-------------------------------- */}     
        <div className=' md:max-w-1/4'>
    
           <ul style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center", gap:"1rem"}}>
            <li className='d-font-card-h2-E4'>Explore</li>
            <li className='d-font-card-p1-E4'>Home</li>
            <li className='d-font-card-p1-E4  '>Product <FaAngleDown className='inline'/></li>
            <li className='d-font-card-p1-E4  '>Drone as Service <FaAngleDown className='inline'/></li>
            <li className='d-font-card-p1-E4'>Blog</li>
            <li className='d-font-card-p1-E4'>About Us</li>
            <li className='d-font-card-p1-E4'>training</li>
           </ul>
        </div>

   {/* ----------------------------------Support-------------------------------- */}
        <div className='md:max-w-1/4'>
         
           <ul style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center", gap:"1rem"}}>
            <li className='d-font-card-h2-E4'>Support</li>
            <li className='d-font-card-p1-E4'>Support Desk</li>
            <li className='d-font-card-p1-E4'>Career</li>
            <li className='d-font-card-p1-E4'>FAQS</li>
            <li className='d-font-card-p1-E4'>Contact</li>
            <li className='d-font-card-p1-E4'>Call Center</li>
           </ul>
        </div>
        <div className='max-w-1/4 hidden md:block'>

        </div>
       </div>  
        </div>
    </div>
     <hr style={{border:"1px solid #777777"}}/>

     <div className='flex justify-between px-[4vw] py-[4vw] md:px-[2vw] md:py-[1vw]'>
      <p className='d-font-card-p1-E4'>Copyright&copy;2025 Alok Dev</p>
      <p className='d-font-card-p1-E4'>Privacy Policy <span>Terms and Conditions</span></p>
     </div>

    </div>
  )
}

export default Footer