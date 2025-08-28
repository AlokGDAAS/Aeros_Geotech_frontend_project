import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";



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
            <div className="mx-auto max-w-[29vw] w-full overflow-hidden">
                <div 
                  className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`slide-${index}`}
                      className="min-w-[23.47vw]  m-[3vw]"
                    />
                  ))}
                </div> 



            </div>


          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">

            <div className="flex justify-center items-center ">
                 <div className="">

                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={ i === current ? {backgroundColor:"#08D7FC" ,width:"2vw"}:{backgroundColor:"#ffffff7e"}}
                        className="min-h-[7px] min-w-[7px] rounded-full transition-all duration-300 ml-[0.5vw]"
                      />
                    ))}
                 </div>
            </div>

                {/* ---button ---- */}
            <div>
            <div style={{display:"flex", gap:"1rem"}}>
                  {/* ---button left---- */}
                <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }}>
                  
                  <div className="vector-left-frame-8 p-[1.05vw]">
                       <VscTriangleLeft className=""/>
                  </div>
                  
                </div>
                             {/* ---button right---- */}
            <div>
                <div onClick={nextSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{}} className="vector-right-frame-8  p-[1.05vw]">
                     <VscTriangleRight/>
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