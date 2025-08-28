import React, { useState } from "react";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";

const Ab_frame_7_carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1)); // loop
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1)); // loop
  };

  return (
    <div className="pt-[8vw] md:pt-[4vw]">
    <div className="relative">
    <div className=" w-full max-w-[50vw] mx-auto overflow-hidden">
      {/* --- Slider wrapper --- */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>



    </div>
          <div>
      {/* --- Navigation buttons --- */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[5%] -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition text-white text-xl bg-yellow-700"
      >
        <VscTriangleLeft className="text-white text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className=" absolute top-1/2 right-[5%] -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition text-white text-xl bg-yellow-700"
      >
        <VscTriangleRight className="text-white text-xl" />
      </button>
      </div>
    </div>
       {/* --- Indicators (dots) --- */}
      <div className="flex justify-center gap-2 py-[8vw] md:py-[2vw]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#08D7FC] w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};



    
    
    // <div className="relative bg-transparent w-full">
    //   {/* --- Slider --- */}
    //   <div className="flex items-center">
    //     <div className="w-full min-w-[50vw] mx-auto overflow-hidden">
    //       <div
    //         className="flex transition-transform ease-out duration-500"
    //         style={{ transform: `translateX(-${current * 100}%)` }}
    //       >
    //         {images.map((src, index) => (
    //           <img
    //             key={index}
    //             src={src}
    //             alt={`slide-${index}`}
    //             className="w-full object-cover"
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* --- Indicators (dots) --- */}
    //   <div className="flex justify-center gap-2 mt-8">
    //     {images.map((_, i) => (
    //       <button
    //         key={i}
    //         onClick={() => setCurrent(i)}
    //         className={`h-3 rounded-full transition-all duration-300 ${
    //           i === current ? "bg-[#08D7FC] w-8" : "bg-white/50 w-3"
    //         }`}
    //       />
    //     ))}
    //   </div>

    //   {/* --- Navigation buttons --- */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
    //   >
    //     <VscTriangleLeft className="text-white text-xl" />
    //   </button>

    //   <button
    //     onClick={nextSlide}
    //     className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
    //   >
    //     <VscTriangleRight className="text-white text-xl" />
    //   </button>
    // </div>


export default Ab_frame_7_carousel;

