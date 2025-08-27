import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

import AboutUsCards2 from '../utils/AboutUsCards2'

const Home_frame_1 = () => {

  const card1={
    image:assets.experience_icon,
    heading:"Years of Experience",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  const card2={
    image:assets.badge_icon,
    heading:"Professional Pilots",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  const card3={
    image:assets.money_icon,
    heading:"Affordable Price",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  return (
    <div  style={{backgroundColor:"#0A192F", position:"relative"}}>
          <div className='lg:grid flex flex-col px-[10vw] py-[6vw] md:px-[6vw]' style={{gridTemplateColumns:"2fr 1fr 1fr",gap:"2rem"}}>
            {/*-------------------------------Left section ------------------------------ */}
            <div className='flex items-center'>
              <div >
                <p className='d-font-h'>About Us</p>
                <p className='d-font-d1'>Gives you the visible</p>
                <div className='flex flex-col w-fit'>
                <p className='d-font-d2'>difference</p>
                <hr style={{border:"2px solid #08D7FC", width:"6vw", margin:"3px auto", borderRadius:"10px" ,}}/>
                <hr style={{border:"2px solid #08D7FC", width:"10vw" ,margin:"3px auto",borderRadius:"10px"}}/>
                </div>
                <p className='d-font-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
                  facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
                  libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.</p>
              </div>
            </div>
            {/*-------------------------------Middile section ------------------------------ */}

            <div style={{display:"flex", flexDirection:"column" ,gap:"2rem",color:"white"}}>
              <AboutUsCards2 image={card1.image} heading={card1.heading} paragraph={card1.paragraph}/>
              <AboutUsCards2 image={card2.image} heading={card2.heading} paragraph={card2.paragraph}/>            
            </div>
            {/*-------------------------------Right section ------------------------------ */}
            
              <div  style={{color:"white"}} className='flex items-center'>
                <AboutUsCards2 image={card3.image} heading={card3.heading} paragraph={card3.paragraph}/>
              </div>

        
          </div>
          <div style={{ position:"absolute",top:"24%", right:"1%"}} className='hidden lg:block'>
             <img src={assets.dron_2} alt=''/>
          </div>
           
    </div>
  )
}

export default Home_frame_1