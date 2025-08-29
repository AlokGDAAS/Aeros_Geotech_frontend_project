import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'
import Home_frame_4_caraosel from '../utils/Home_frame_4_caraosel'

const Home_frame_4 = () => {
      
  const content = [
    {
      head:"25+",
      desc1:"Years Experience",
      
    },
    {
      head:"375+",
      desc1:"Completed Projects",
    
    },
    {
      head:"99%",
      desc1:"Positive Reviews",
      
    },
    {
      head:"120+",
      desc1:"Expert Pilots",
    
    }

  ]
  const images = [
    assets.home_drone,
    assets.home_drone,
    
  ]

  
    const Box = ({head,desc1})=>{
      return(
         <div>
            <div className='flex max-h-[20vw]' >    
  
              <img src={assets.side_stick} alt=''/>
               <div className='flex flex-col justify-between ml-[2vw]'>
                 <p className='home_frame_4_number'>{head}</p>
                 <div>
                 <p className='ab-frame_2_desc'>{desc1}</p>
               
                 </div>
               </div>
               </div>
         </div>
  
      )
    }


  return (
    <div className="bg-[url('/asset/backround_2.svg')] bg-cover bg-center py-[7vw]  px-[5vw]" style={{backgroundColor:"#111B22"}}>
      <div className=''>
        {/* ------------------------------------------------- */}
          <div className=''>
                <Home_frame_4_caraosel images={images}/>
          </div>
           
          {/* ------------------------------------------------- */}
          <div>
          <div className='grid grid-cols-2 md:flex flex-col md:flex-row md:flex-wrap gap-[2vw] '>
            {
              content.map((item,index)=>(
                <div key={index} className='md:min-w-[20%]'>

                  <Box head={item.head} desc1={item.desc1}/>

                </div>
              ))
            }
         
          </div>               
          </div>
      </div>

    </div>
  )
}

export default Home_frame_4