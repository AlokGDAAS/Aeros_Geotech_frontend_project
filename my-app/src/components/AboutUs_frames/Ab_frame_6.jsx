import React from 'react'
import { assets } from '../../assets/Home_frontend/assets'

const Ab_frame_6 = () => {
  return (
    <div>
                   <div style={{padding:"100px 72px",backgroundColor:"#111B22"}}>
                       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
              
               
                           {/*-------------------------------Right section ------------------------------ */}
                           <div className='flex items-center'>
                             <div  style={{color:"white"}}>
                               <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"16%" ,color:"#08D7FC"}}>CERTIFICATIONS</p>
                               
                        <p style={{fontSize:"20px", fontWeight:"400", lineHeight:"150%" ,letterSpacing:"0%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, 
                          facere sapiente quaerat quibusdam, cupiditate distinctio quisquam reprehenderit voluptas porro,
                          libero aliquam hic nesciunt blanditiis. Totam aut labore officia fuga quisquam.</p>
                       
                             </div>
               
                           </div>

                          {/*-------------------------------Left section ------------------------------ */}
                           <div className='relative'>
                               <img src={assets.ab_frame_6_img} alt=''/>
                                <img src={assets.left_dotted_corner} alt='' style={{position:"absolute" ,bottom:"1.5%",right:"13%", zIndex:"1"}}/>
                                <img src={assets.right_dotted_corner} alt=''style={{position:"absolute",top:"1.5%",left:"1.25%", zIndex:"2"}}/>                                 
                           </div>  
        
               
                       </div>
                   </div>
    </div>
  )
}

export default Ab_frame_6