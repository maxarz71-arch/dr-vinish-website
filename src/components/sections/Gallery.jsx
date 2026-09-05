import React from 'react';
import { FaImages, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  // Sirf 4 images homepage ke liye
  const images = [
    { id: 1, src: '/images/gallery/gallery-1.jpg' },
    { id: 2, src: '/images/gallery/gallery-2.jpg' },
    { id: 3, src: '/images/gallery/gallery-3.jpg' },
    { id: 4, src: '/images/gallery/gallery-4.jpg' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#E8F8FC] py-16 md:py-20">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        .g-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .g-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ===== DECORATIVE BACKGROUND ===== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48CAE4]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F77F00]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10 md:mb-14">
          <span className="g-body inline-flex items-center gap-2 bg-[#48CAE4]/10 text-[#48CAE4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-[#48CAE4]/20 mb-3">
            <FaImages className="text-[#48CAE4]" />
            Gallery
          </span>
          <h2 className="g-display text-3xl md:text-4xl lg:text-5xl font-medium text-[#1E293B] leading-tight">
            Our <span className="text-[#48CAE4]">Memories</span>
          </h2>
          <p className="g-body text-[#64748B] text-sm md:text-base max-w-2xl mx-auto mt-3">
            Glimpses from our journey — conferences, events, and achievements
          </p>
        </div>

        {/* ===== 4 IMAGES GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-[#48CAE4]/5"
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/48CAE4/FFFFFF?text=Gallery';
                }}
              />
             
            </div>
          ))}
        </div>

        {/* ===== SEE MORE BUTTON ===== */}
        <div className="text-center mt-10 md:mt-12">
          <a
            href="/gallery"
            className="g-body group inline-flex items-center gap-3 bg-[#F77F00] hover:bg-[#E06A00] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-[#F77F00]/30 hover:shadow-xl hover:shadow-[#F77F00]/40 transition-all duration-300 hover:-translate-y-1"
          >
            <span>See More</span>
            <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;