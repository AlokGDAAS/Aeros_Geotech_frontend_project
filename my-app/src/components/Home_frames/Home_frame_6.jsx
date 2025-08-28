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
        <div style={{ display:"flex" , flexDirection:"column", gap:"4rem", justifyContent:"space-between", background:"#111B22",color:"white", padding:"100px 72px" }}>
         
                 <div>
                   <Head_card heading={cont.heading} des1={cont.des1} des2={cont.des2} para={cont.para}/>
                 </div> 

              <div style={{gridTemplateColumns:"1fr 1fr 1fr", margin:"0px auto"}} className='flex flex-col md:grid'>
                  <div className='clients_card md:border-b md:border-b-[#08D7FC]'>
                     <img src={assets.jobor_logo} alt='' className='min-w-[50vw] md:min-w-[9vw]'/>
                  </div>

                  <div className='clients_card  md:border-b md:border-b-[#08D7FC] md:border-l md:border-l-[#08D7FC]'>
                     <img src={assets.fmc_logo} alt=''  className='min-w-[50vw] md:min-w-[9vw]'/>
                  </div>

                  <div className='clients_card  md:border-b md:border-b-[#08D7FC] md:border-l md:border-l-[#08D7FC]'>
                     <img src={assets.klk_logo} alt='' className='min-w-[50vw] md:min-w-[9vw]'/>
                  </div>

                  <div className='clients_card md:border-r md:border-r-[#08D7FC]'>
                     <img src={assets.bm_logo} alt='' className='min-w-[50vw] md:min-w-[9vw]'/>
                  </div>

                  <div className='clients_card md:border-r md:border-r-[#08D7FC]'>
                     <img src={assets.Sanyeong_logo} alt='' className='min-w-[50vw] md:min-w-[9vw]'/>
                  </div>

                  <div className='clients_card '>
                     <img src={assets.Probumi_logo} alt='' className='min-w-[50vw] md:min-w-[9vw]'/>
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