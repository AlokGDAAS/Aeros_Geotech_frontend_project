import React, { useState } from "react";

import CaraoselCard from "./CaraoselCard";
import { assets } from "../../assets/Home/assets";

const items = [
  {
    id: 1,
    image: assets.miller_english_pic,
    name: "Miller_English",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Miller_English,
  },
  {
    id: 2,
    image: assets.garcia_spanish_pic,
    name: "Garcia_Spanish",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Garcia_Spanish,
  },
  {
    id: 3,
    image: assets.smith_english_pic,
    name: "Smith_English",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Smith_English,
  },
  {
    id: 4,
    image: assets.miller_english_pic,
    name: "Miller_English 4",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Miller_English,
  },
  {
    id: 5,
    image: assets.upload_area,
    name: "Miller_English 5",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Miller_English,
  },
  {
    id: 6,
    image: assets.upload_area,
    name: "Miller_English 6",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    signImage: assets.Miller_English,
  },
];

const HorizontalSliderCheck = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= items.length - 3 ? items.length - 3: prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-2"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0 p-2" style={{width:"32%"}}>
              <CaraoselCard
                image={item.image}
                name={item.name}
                para={item.para}
                signImage={item.signImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
            <div>
                <div onClick={prevSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{}} className="vector-left">
                     <img src={assets.vector_l} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
            </div>
            <div>
                <div onClick={nextSlide} style={{display:"flex", alignItems:"center" }}>
                  <div style={{}} className="vector-right">
                     <img src={assets.vector_r} alt='' style={{padding:"15px"}}/>
                  </div>
                  
                </div>
            </div>
      </div>
    </div>
  );
};

export default HorizontalSliderCheck;


