import React, { useState } from 'react'
import { assets } from '../../assets/Home_frontend/assets';
import AB_CarouselCard from './AB_CarouselCard';

const items = [
  {
    id: 1,
    image: assets.ab_frame_3_img_1,
    head: "3S(Sales,Service and Spare part)",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
    
  },
  {
    id: 2,
    image: assets.ab_frame_3_img_2,
    head: "Agriculture",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
  {
    id: 3,
    image: assets.ab_frame_3_img_3,
    head: "Inspection",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
  {
    id: 4,
    image: assets.ab_frame_3_img_4,
    head: "Geo Mapping",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
 
  },
  {
    id: 5,
    image: assets.ab_frame_3_img_1,
    head: "Agriculture",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
  
  },
  {
    id: 6,
    image: assets.ab_frame_3_img_2,
    head: "Geo Mapping",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit, facere sapiente quaerat quibusdam...",
   
  },
];

const Ab_HorizontalSlider = () => {
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
              <AB_CarouselCard
                image={item.image}
                head={item.head}
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

export default Ab_HorizontalSlider