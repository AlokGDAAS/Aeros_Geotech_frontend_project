import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

const Ab_frame_1 = () => {
  return (
    <div className='bg-[#141D24] pt-[20vw]  md:p-[5vw] md:pt-[5vw] max-w-[100vw]'>
        <div className='flex flex-row justify-center items-center'>
            <div>
                <img src={assets.ab_about_us_img} alt='' className='max-w-[53vw]'/>
            </div>

            <div>
                <img src={assets.ab_drone_1} alt='' className='max-w-[34vw]'/>
            </div>

        </div>

        {/* ================== bottom =================== */}
        <div>
        <div className="flex justify-center  items-end ">
          <img src={assets.bottom_left} alt="Bottom Left" className="max-w-[14vw] lg:max-w-[16vw]"/>
          <img src={assets.bottom_middle} alt="Bottom Middle" className="max-w-[50vw] lg:max-w-[61vw]" />
          <img src={assets.bottom_right} alt="Bottom Right" className="max-w-[14vw] lg:max-w-[16vw]"/>
        </div>
        </div>
    </div>
  )
}

export default Ab_frame_1