import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/images/hero/1.jpeg',
    '/images/hero/2.jpeg',
    '/images/hero/3.jpeg',
    '/images/hero/banner-1.jpg',
    '/images/hero/banner-2.jpg',
    '/images/hero/banner-3.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden shadow-md h-[75vh]">
      {/* ===== SLIDER IMAGES ===== */}
      <div 
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={imgSrc} 
              alt={`Hero Banner ${index + 1}`} 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ===== DOTS INDICATOR ===== */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? 'w-6 h-1.5 bg-white' 
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;