import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

const Home_frame_7 = () => {
  return (
    <div  style={{backgroundColor:"#142029ff", padding:"5vw"}}>
        <div style={{backgroundColor:"#182731ff",borderRadius:"10px"}} className="bg-[url('/asset/backround_2.svg')] bg-cover bg-center p-[6vw] md:p-0">
            <div style={{padding:"3.47vw 5vw",display:"flex", justifyContent:"space-between", alignItems:"center"}} className='flex-col md:flex-row'>
                <p  className='d-font-p2 text-center md:text-start'>What are you waiting for? Contact us right now<br className='hidden md:block'/> and get a free quote for your project</p>
                <div className='flex justify-between items-center md:flex-col w-full md:w-1/4 px-[4vw] pt-[10vw] md:py-[0] md:pt-[0] gap-[4vw] md:gap-[0.5vw]'>
                  <div>
                       <img src={assets.free_quote} alt='' className='hover:scale-105 duration-300 cursor-pointer max-w-[30vw] '/>
                  </div>
                  <div>
                    <img src={assets.contact_trans} alt=''className='hover:scale-105 duration-300 cursor-pointer max-w-[30vw]'/>
                  </div>
                 

                

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home_frame_7