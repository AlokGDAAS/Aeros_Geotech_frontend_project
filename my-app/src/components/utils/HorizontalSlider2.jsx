import React, { useState } from "react";
import { assets } from "../../assets/Home_frontend/assets";
import CaraoselCard2 from "./CaraoselCard2";

const items = [
  {
    id: 1,
    image: assets.blog_image_1,
    date: "19 May 2022",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    
  },
  {
    id: 2,
    image: assets.blog_image_2,
    date: "10 April 2022",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
  {
    id: 3,
    image: assets.blog_image_3,
    date: "07 Jan 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
  {
    id: 4,
    image: assets.blog_image_4,
    date: "04 Dec 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
 
  },
  {
    id: 5,
    image: assets.blog_image_1,
    date: "12 March 2024",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
  
  },
  {
    id: 6,
    image: assets.blog_image_2,
    date: "26 June 2024",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
];

const HorizontalSlider2 = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= items.length - 4 ? items.length - 4: prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / 4)}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0" style={{width:"23%"}}>
              <CaraoselCard2
                image={item.image}
                date={item.date}
                para={item.para}
               
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

export default HorizontalSlider2;