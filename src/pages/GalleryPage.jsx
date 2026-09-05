import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCamera,
  FaNewspaper,
  FaTrophy,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImage,
} from 'react-icons/fa';
import { getGallery } from '../api';

// ✅ FALLBACK DATA (AGAR API SE DATA NA AAYE)
const FALLBACK_GALLERY = {
  photos: [
    { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'Gallery 1' },
    { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'Gallery 2' },
    { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'Gallery 3' },
    { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'Gallery 4' },
    { id: 5, src: '/images/gallery/gallery-5.jpeg', alt: 'Gallery 5' },
    { id: 6, src: '/images/gallery/gallery-6.jpg', alt: 'Gallery 6' },
    { id: 7, src: '/images/gallery/gallery-7.jpg', alt: 'Gallery 7' },
    { id: 8, src: '/images/gallery/gallery-8.jpg', alt: 'Gallery 8' },
    { id: 9, src: '/images/gallery/gallery-9.jpg', alt: 'Gallery 9' },
    { id: 10, src: '/images/gallery/gallery-10.jpg', alt: 'Gallery 10' },
    { id: 11, src: '/images/gallery/gallery-12.jpg', alt: 'Gallery 11' },
    { id: 12, src: '/images/gallery/gallery-13.jpg', alt: 'Gallery 12' },
    { id: 13, src: '/images/gallery/gallery-14.jpg', alt: 'Gallery 13' },
    { id: 14, src: '/images/gallery/gallery-15.jpg', alt: 'Gallery 14' },
    { id: 15, src: '/images/gallery/gallery-16.jpg', alt: 'Gallery 15' },
    { id: 16, src: '/images/gallery/gallery-17.jpg', alt: 'Gallery 16' },
  ],
  news: [
    { id: 1, src: '/images/news-and-media/1.jpeg', alt: 'News 1' },
    { id: 2, src: '/images/news-and-media/2.jpeg', alt: 'News 2' },
    { id: 3, src: '/images/news-and-media/3.jpg', alt: 'News 3' },
    { id: 4, src: '/images/news-and-media/4.jpg', alt: 'News 4' },
    { id: 5, src: '/images/news-and-media/5.jpeg', alt: 'News 5' },
    { id: 6, src: '/images/news-and-media/6.jpeg', alt: 'News 6' },
    { id: 7, src: '/images/news-and-media/7.jpeg', alt: 'News 7' },
    { id: 8, src: '/images/news-and-media/8.jpeg', alt: 'News 8' },
    { id: 9, src: '/images/news-and-media/9.jpeg', alt: 'News 9' },
    { id: 10, src: '/images/news-and-media/10.jpg', alt: 'News 10' },
    { id: 11, src: '/images/news-and-media/11.jpeg', alt: 'News 11' },
    { id: 12, src: '/images/news-and-media/12.jpeg', alt: 'News 12' },
    { id: 13, src: '/images/news-and-media/13.jpeg', alt: 'News 13' },
    { id: 14, src: '/images/news-and-media/14.jpg', alt: 'News 14' },
    { id: 15, src: '/images/news-and-media/15.jpg', alt: 'News 15' },
    { id: 16, src: '/images/news-and-media/16.jpg', alt: 'News 16' },
  ],
  awards: [
    { id: 1, src: '/images/awards-and-achievement/gallery-1.jpg', alt: 'Award 1' },
    { id: 2, src: '/images/awards-and-achievement/gallery-2.jpg', alt: 'Award 2' },
    { id: 3, src: '/images/awards-and-achievement/gallery-3.jpg', alt: 'Award 3' },
  ],
};

const GalleryPage = () => {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('photos');
  const [galleryData, setGalleryData] = useState(FALLBACK_GALLERY);
  const [loading, setLoading] = useState(true);

  // ✅ API SE GALLERY FETCH KARO
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery();
        if (data && data.length > 0) {
          // API data ko category ke hisaab se group karo
          const grouped = {
            photos: data.filter(item => item.type === 'photo').map(item => ({
              id: item._id,
              src: item.image,
              alt: item.title || 'Photo',
            })),
            news: data.filter(item => item.type === 'news').map(item => ({
              id: item._id,
              src: item.image,
              alt: item.title || 'News',
            })),
            awards: data.filter(item => item.type === 'award').map(item => ({
              id: item._id,
              src: item.image,
              alt: item.title || 'Award',
            })),
          };
          setGalleryData(grouped);
        } else {
          setGalleryData(FALLBACK_GALLERY);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setGalleryData(FALLBACK_GALLERY);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const getCurrentImages = () => {
    if (activeTab === 'news') return galleryData.news;
    if (activeTab === 'awards') return galleryData.awards;
    return galleryData.photos;
  };

  const currentImages = getCurrentImages();
  const getTabTitle = () => {
    if (activeTab === 'news') return 'News & Media';
    if (activeTab === 'awards') return 'Award & Achievement';
    return 'Photo Gallery';
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(currentImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < currentImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, currentImages]);

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#news') setActiveTab('news');
    else if (hash === '#awards') setActiveTab('awards');
    else setActiveTab('photos');
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .g-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .g-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out forwards;
        }

        .image-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          aspect-ratio: 1 / 1;
        }
        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .image-card:hover img {
          transform: scale(1.08);
        }
        .image-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .image-card:hover::after {
          opacity: 1;
        }
        .image-card .overlay-icon {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          color: white;
          background: rgba(93, 169, 179, 0.85);
          padding: 0.5rem;
          border-radius: 50%;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
          z-index: 10;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .image-card:hover .overlay-icon {
          opacity: 1;
          transform: translateY(0);
        }

        .image-card .count-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          color: white;
          font-size: 0.65rem;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.15);
          z-index: 10;
          font-family: 'Inter', sans-serif;
        }

        .tab-btn {
          transition: all 0.3s ease;
          position: relative;
        }
        .tab-btn.active {
          background: #5DA9B3;
          color: white;
          box-shadow: 0 4px 12px rgba(93, 169, 179, 0.3);
        }
        .tab-btn.active svg {
          color: white !important;
        }
        .tab-btn:not(.active):hover {
          background: rgba(93, 169, 179, 0.1);
          border-color: rgba(93, 169, 179, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 g-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#5DA9B3]/20 rounded-full px-6 py-2.5 shadow-lg mb-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5DA9B3] to-[#08404D] flex items-center justify-center text-white">
              <FaImage className="text-sm" />
            </div>
            <span className="g-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5DA9B3]">Gallery</span>
          </div>
          
          <h1 className="g-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E293B]">
            <span className="text-[#5DA9B3]">{getTabTitle()}</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5DA9B3] to-[#F77F00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => setActiveTab('photos')}
            className={`tab-btn ${activeTab === 'photos' ? 'active' : ''} g-body px-5 py-2 rounded-full text-sm font-medium bg-white/80 text-[#1E293B] border border-[#DCE7E7] transition-all duration-300 flex items-center gap-2`}
          >
            <FaCamera className={`text-xs ${activeTab === 'photos' ? 'text-white' : 'text-[#5DA9B3]'}`} />
            Photo Gallery
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''} g-body px-5 py-2 rounded-full text-sm font-medium bg-white/80 text-[#1E293B] border border-[#DCE7E7] transition-all duration-300 flex items-center gap-2`}
          >
            <FaNewspaper className={`text-xs ${activeTab === 'news' ? 'text-white' : 'text-[#5DA9B3]'}`} />
            News & Media
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`tab-btn ${activeTab === 'awards' ? 'active' : ''} g-body px-5 py-2 rounded-full text-sm font-medium bg-white/80 text-[#1E293B] border border-[#DCE7E7] transition-all duration-300 flex items-center gap-2`}
          >
            <FaTrophy className={`text-xs ${activeTab === 'awards' ? 'text-white' : 'text-[#5DA9B3]'}`} />
            Award & Achievement
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#64748B]">Loading gallery...</p>
          </div>
        ) : currentImages.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {currentImages.map((image, index) => (
                <div
                  key={image.id}
                  className="image-card animate-fade-in-up shadow-md hover:shadow-xl cursor-pointer"
                  style={{ animationDelay: `${(index % 8) * 50 + 150}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/5DA9B3/FFFFFF?text=Image';
                    }}
                  />
                  <span className="count-badge">#{String(index + 1).padStart(2, '0')}</span>
                  <div className="overlay-icon">
                    <FaExpand size={14} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 text-xs text-[#64748B] g-body">
              Showing <span className="font-semibold text-[#5DA9B3]">{currentImages.length}</span> photos
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white/80 rounded-2xl border border-[#5DA9B3]/20">
            <FaImage className="text-6xl text-[#5DA9B3]/30 mx-auto mb-4" />
            <p className="g-body text-[#64748B]">No images available in this category.</p>
          </div>
        )}

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm"
            aria-label="Next image"
            disabled={currentIndex === currentImages.length - 1}
          >
            <FaChevronRight />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600/5DA9B3/FFFFFF?text=Image+Not+Found';
              }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
              {currentIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;