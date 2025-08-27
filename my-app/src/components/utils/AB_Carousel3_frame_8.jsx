import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";



const AB_Carousel3_frame_8 = ({images}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? images.length - 1 : prev + 1));
  };

  return (
    <div className="mt-8">
    <div>
          <div>
           

            </div>
            {/* ---drone---- */}
            <div className="mx-auto overflow-hidden" style={{maxWidth:"410px"}}>
                <div 
                  className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`slide-${index}`}
                      className="min-w-[410px]"
                    />
                  ))}
                </div> 



            </div>


          </div>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>

            <div>
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,height:"18vh", gap:"1rem"}}>

                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={ i === current ? {backgroundColor:"#08D7FC" ,width:"32px"}:{backgroundColor:"#ffffff7e"}}
                        className="h-3 w-3 rounded-full transition-all duration-300"
                      />
                    ))}
                 </div>
            </div>

                {/* ---button ---- */}
            <div>
            <div style={{display:"flex", gap:"1rem"}}>
                  {/* ---button left---- */}
                <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }}>
                  
                  <div   style={{}} className="vector-left">
                     <img src={assets.vector_l} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
                             {/* ---button right---- */}
            <div>
                <div onClick={nextSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{}} className="vector-right">
                     <img src={assets.vector_r} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
            </div>
            </div>
          </div>
    </div>
    </div>
  );
};

export default AB_Carousel3_frame_8