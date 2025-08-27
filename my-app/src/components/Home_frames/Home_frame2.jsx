import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'
import AboutUsCards from '../utils/AboutUsCards'

const Home_frame2 = () => {

  const card1={
    image:assets.planting_icon,
    heading:"Drone in Agriculture",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  const card2={
    image:assets.quality_control_icon,
    heading:"Drone in Inspection",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  const card3={
    image:assets.cluster_1,
    heading:"Drone in Geomapping",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }

  const card4={
    image:assets.search_icon,
    heading:"Search and Rescue",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,"
  }
  return (
    <div style={{position:"relative",background:"#111b22"}} className='py-[15vw] md:py-[0]'>
       <div style={{  color:"white", }} className='grid-container p-13vw lg:py-[13vh] px-[10vw]'>
        <div>
           <AboutUsCards image={card1.image} heading={card1.heading} paragraph={card1.paragraph} />
        </div>
        <div>
           <AboutUsCards image={card2.image} heading={card2.heading} paragraph={card2.paragraph} />
        </div>
        <div>
              <AboutUsCards image={card3.image} heading={card3.heading} paragraph={card3.paragraph} />
        </div>
        <div>
             <AboutUsCards image={card4.image} heading={card4.heading} paragraph={card4.paragraph} />
        </div>

    </div>
    <div style={{position:"absolute",}} className='bottom-[3%] right-[3.5%] md:bottom-[10%] md:right-[8%]'>
     <img src={assets.left_dotted_corner} alt=''/>
    </div>
    <div style={{position:"absolute", }} className='top-[3%] left-[3.5%] md:top-[10%] md:left-[8%]'>
     <img src={assets.right_dotted_corner} alt='' />
    </div>
   </div> 
  )
}

export default Home_frame2