import React, { useState } from 'react'
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";



const Carousel3 = ({images}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? images.length - 1 : prev + 1));
  };

  return (
    <div style={{background:"transparent"}}>
    <div>
          <div style={{gridTemplateColumns:"2fr 3fr 2fr"}} className='flex md:grid relative'>
             {/* ---button left---- */}
            <div className=' hidden md:block'>
                <div onClick={prevSlide} className='flex justify-center items-center'>
                  
                  <div className="vector-left p-[15px] mt-[50%]">
                     <VscTriangleLeft/>
                  </div>
                  
                </div>
            </div>
            {/* ---drone---- */}
            <div style={{display:"flex", alignItems:"center"}}>
            <div className=" w-full min-w-[50vw]  mx-auto overflow-hidden ">
                <div 
                  className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`slide-${index}`}
                      className=""
                    />
                  ))}
                </div> 



            </div>
            </div>
             {/* ---button right---- */}
             
              <div className=' hidden md:block'>
                <div onClick={nextSlide} className='flex justify-center items-center'>
                  <div  className="vector-right p-[15px] mt-[50%]">
                     <VscTriangleRight/>
                  </div>
                  </div>
               
            </div>

          </div>
    </div>
                     <div className='flex justify-center gap-[0.5rem] mt-[10vw]'>

                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={ i === current ? {backgroundColor:"#08D7FC" ,width:"2rem"}:{backgroundColor:"#ffffff7e"}}
                        className="h-3 w-3 rounded-full transition-all duration-300"
                      />
                    ))}
                 </div>

             <div className='md:hidden'>
              <div onClick={prevSlide} className='vector-left p-[10px] max-w-[40px] flex justify-center items-center absolute top-[30%] left-[0]'><VscTriangleLeft className=''/></div>
              <div onClick={nextSlide} className='vector-right p-[10px] max-w-[40px] flex justify-center items-center absolute top-[30%] right-[0]'><VscTriangleRight/></div>
            </div>    
    </div>
  );
};

export default Carousel3