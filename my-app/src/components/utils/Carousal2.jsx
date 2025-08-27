import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";



const Carousal2 = ({images}) => {
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
          <div style={{ gridTemplateColumns:"2fr 3fr 2fr"}} className="md:grid flex flex-col">
             {/* ---button left---- */}
            <div className="flex items-center justify-center">
              <div className="hidden md:block">
                <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }} >
                  
                  <div   style={{}} className="vector-left p-3">
                     <VscTriangleLeft />
                  </div>
                  
                </div>
                </div>
            </div>
            {/* ---drone---- */}
           
                <div className="w-full min-w-[90vw] md:min-w-[571px] mx-auto overflow-hidden">
                  <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        className="w-full min-w-full md:min-w-[571px] object-cover"
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
            <div className="flex justify-center gap-2 ">
            {/* for small devices start */}
            <div className="md:hidden">
              <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }} >
                  
                  <div   style={{}} className="vector-left p-3">
                     <VscTriangleLeft />
                  </div>
                  
                </div>
            </div>

            {/* for small devices end*/}

                <div onClick={nextSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{}} className="vector-right p-3">
                     <VscTriangleRight />
                  </div>
                  
                </div>
            </div>

          </div>
    </div>
    </div>
  );
};

export default Carousal2;