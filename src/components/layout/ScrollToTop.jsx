import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  return (
    <button
      className={`fixed bottom-8 right-8 bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg shadow-blue-700/35 transition-all duration-300 z-50 cursor-pointer border-none ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;