import React, { useEffect } from 'react';
import { FaInstagram, FaHeartbeat } from 'react-icons/fa';

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F8FC] via-white to-[#E8F8FC] py-16 md:py-24">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .ig-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ig-body { font-family: 'Inter', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>

      {/* ===== DECORATIVE BACKGROUND ===== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48CAE4]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F77F00]/6 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#48CAE4]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#48CAE4]/20 rounded-full px-5 py-2.5 shadow-lg mb-4">
            <FaInstagram className="text-[#E4405F] text-lg" />
            <span className="ig-body text-xs font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">Instagram</span>
            <FaHeartbeat className="text-[#48CAE4] animate-pulse text-sm" />
          </div>
          <h2 className="ig-display text-3xl md:text-4xl lg:text-5xl font-medium text-[#1E293B]">
            Instagram <span className="text-[#48CAE4]">Feed</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-4 rounded-full"></div>
          <p className="ig-body text-sm text-[#64748B] mt-3 max-w-2xl mx-auto">
            Follow <strong className="text-[#1E293B]">@drvinishurosurgeon</strong> for health tips, patient stories, and expert insights.
          </p>
        </div>

        {/* ===== WIDGET CONTAINER — GOOGLE REVIEWS STYLE ===== */}
        <div className="relative group">
          {/* Glow behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#48CAE4]/20 via-[#F77F00]/10 to-[#48CAE4]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main Card */}
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8 lg:p-10">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#48CAE4] via-[#F77F00] to-[#48CAE4] rounded-3xl opacity-20 blur-sm"></div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#F77F00] text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg shadow-[#F77F00]/30 animate-float">
              📸 Latest Posts
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#48CAE4] text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg shadow-[#48CAE4]/30 animate-float" style={{ animationDelay: '1.5s' }}>
              ❤️ Follow @drvinishurosurgeon
            </div>

            <div className="relative">
              {/* Elfsight Widget */}
              <div 
                className="elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c" 
                data-elfsight-app-lazy
              />
            </div>
          </div>
        </div>

      </div>

      {/* ===== CUSTOM WIDGET STYLES ===== */}
      <style jsx global>{`
        /* Elfsight Widget - Instagram Feed Custom Styles */
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c {
          font-family: 'Inter', sans-serif !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-post {
          border-radius: 16px !important;
          border: 1px solid rgba(72, 202, 228, 0.15) !important;
          background: rgba(255, 255, 255, 0.6) !important;
          backdrop-filter: blur(4px) !important;
          transition: all 0.3s ease !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-post:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px rgba(72, 202, 228, 0.15) !important;
          border-color: rgba(72, 202, 228, 0.4) !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-posts-grid {
          gap: 16px !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-header {
          background: transparent !important;
          padding: 16px 0 !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-header-user-name {
          color: #1E293B !important;
          font-weight: 600 !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-header-user-bio {
          color: #64748B !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-load-more {
          background: #48CAE4 !important;
          color: white !important;
          border-radius: 50px !important;
          padding: 10px 30px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-load-more:hover {
          background: #1E4A7A !important;
          transform: scale(1.02) !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-post-caption {
          color: #1E293B !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-post-meta {
          color: #64748B !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-dots .eapps-dot.active {
          background-color: #48CAE4 !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-dots .eapps-dot {
          background-color: #48CAE4/30 !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-arrow {
          background-color: #48CAE4 !important;
          color: white !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          box-shadow: 0 4px 15px rgba(72, 202, 228, 0.3) !important;
        }
        .elfsight-app-58488abd-7f18-45e9-92d2-13ab2546b67c .eapps-instagram-feed-arrow:hover {
          background-color: #1E4A7A !important;
          transform: scale(1.05) !important;
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;