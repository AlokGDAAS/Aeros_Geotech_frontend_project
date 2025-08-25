import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";

const images = [

  assets.drone_frame_4,
  assets.drone_frame_4,
  assets.drone_frame_4,
];

const Carousal2 = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? images.length - 1 : prev + 1));
  };

  return (
    <div>
    <div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 3fr 2fr"}}>
             {/* ---button left---- */}
            <div>
                <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }}>
                  
                  <div   style={{margin:"40%"}} className="vector-left">
                     <img src={assets.vector_l} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
            </div>
            {/* ---drone---- */}
            <div className=" w-full min-w-[571px]  mx-auto overflow-hidden rounded-2xl shadow-lg ">
                <div 
                  className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`slide-${index}`}
                      className="min-w-[571px]"
                    />
                  ))}
                </div> 


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
             {/* ---button right---- */}
            <div>
                <div onClick={nextSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{margin:"40%"}} className="vector-right">
                     <img src={assets.vector_r} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
            </div>

          </div>
    </div>
    </div>
  );
};

export default Carousal2;