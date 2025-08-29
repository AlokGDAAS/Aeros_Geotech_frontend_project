import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'
import Head_card from '../utils/Head_card'

const Home_frame_6 = () => {

       const cont = {
       heading:"CLIENTS",
       des1:"Our",
       des2:"Clients",
       para:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit,facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam"
     }
   
 
  return (
       <div style={{position:"relative"}}>
        <div style={{ gap:"4rem", background:"#111B22"}} className='flex flex-col justify-between md:py-[6.94vw] mx:px-[5vw] py-[5vh]'>
         
                 <div>
                   <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
                 </div> 
                   <div className='px-[4vw]'>
                     <div className="grid grid-cols-2 md:grid-cols-3 clients_card mx-auto 
                                    divide-x divide-y divide-[#08D7FC] ">
                     
                     <div className="flex items-center justify-center p-4">
                        <img src={assets.jobor_logo} alt="Jobor Logo" />
                     </div>

                     <div className="flex items-center justify-center p-4 border-r-0 md:border-r ">
                        <img src={assets.fmc_logo} alt="FMC Logo" />
                     </div>

                     <div className="flex items-center justify-center p-4 md:border-r-0">
                        <img src={assets.klk_logo} alt="KLK Logo" />
                     </div>

                     <div className="flex items-center justify-center p-4 md:border-b-0  border-r-0 md:border-r ">
                        <img src={assets.bm_logo} alt="BM Logo" />
                     </div>

                     <div className="flex items-center justify-center p-4 border-b-0">
                        <img src={assets.Sanyeong_logo} alt="Sanyeong Logo" />
                     </div>

                     <div className="flex items-center justify-center p-4">
                        <img src={assets.Probumi_logo} alt="Probumi Logo" />
                     </div>
                     </div>
                  </div>
            </div>
               <div style={{position:"absolute"}} className='max-w-[16vw] md:top-[10%] md:left-[6%] top-[3%] left-[10%]'>
               <img src={assets.drone_frame_6} alt='' className='min-w-[20vw] md:min-w-[9vw]'/>
               </div> 

            </div>
  )
}

export default Home_frame_6