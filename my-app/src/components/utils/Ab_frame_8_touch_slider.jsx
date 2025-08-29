import React, { useState, useRef, useEffect } from "react";

const Ab_frame_8_touch_slider = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const autoSlideRef = useRef();

  // Handle touch start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  // Handle touch end (decide swipe direction)
  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      // swipe left
      nextSlide();
    }
    if (endX.current - startX.current > 50) {
      // swipe right
      prevSlide();
    }
  };

  // Next / Prev functions
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto Slide Effect
  useEffect(() => {
    autoSlideRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoSlideRef.current();
    };
    const intervalId = setInterval(play, interval); // autoplay every X ms
    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div
      className="overflow-hidden relative w-full max-w-[500px] mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};






export default Ab_frame_8_touch_slider