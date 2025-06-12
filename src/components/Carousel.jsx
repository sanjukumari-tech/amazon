import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ images }) => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    containerRef.current.scrollTo({
      left: current * containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="relative overflow-hidden w-screen min-h-[300px] sm:min-h-[400px] md:min-h-[500px] pt-30 sm:pt-30 md:pt-28 lg:pt-19">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-80 md:h-[500px] "
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
