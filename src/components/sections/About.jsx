import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaAward, 
  FaBriefcase, 
  FaStethoscope, 
  FaArrowRight, 
  FaHeartbeat,
  FaUserMd,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaHospital,
  FaMicroscope
} from 'react-icons/fa';

const About = () => {
  const credentials = [
    { icon: FaGraduationCap, text: 'M.B.B.S., M.S., FIAGES, M.ch.' },
    { icon: FaAward, text: 'Fellowship in Andrology, USA' },
    { icon: FaBriefcase, text: 'Ex. Senior Consultant, Era Medical College' },
    { icon: FaBriefcase, text: 'Senior Consultant, T.S. Mishra Medical College' },
  ];

  // Bio content broken into scannable grid cards instead of dense paragraphs
  const infoCards = [
    {
      icon: FaMicroscope,
      label: 'Specialization',
      text: 'Endourology, Laparoscopic Urology, Reconstructive Urology and Andrology.',
    },
    {
      icon: FaHospital,
      label: 'Currently Practicing At',
      text: 'TS Mishra Hospital, Lucknow.',
    },
    {
      icon: FaGraduationCap,
      label: 'MBBS',
      text: 'KGMU, Lucknow — 2007.',
    },
    {
      icon: FaGraduationCap,
      label: 'MS',
      text: 'Govt. Medical College, Amritsar — 2012.',
    },
    {
      icon: FaGraduationCap,
      label: 'MCh',
      text: 'Institute of Nephro-Urology, Bangalore — 2017.',
    },
    {
      icon: FaHandHoldingHeart,
      label: 'Focus',
      text: 'Compassionate, precision-first urological & kidney transplant care.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        .about-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .about-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ===== DECORATIVE SHAPES ===== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48CAE4]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F77F00]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#48CAE4]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-12">
          <span className="about-body inline-flex items-center gap-2 bg-[#48CAE4]/10 text-[#48CAE4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-[#48CAE4]/20 mb-3">
            <FaHeartbeat className="text-[#48CAE4] animate-pulse" />
            About Dr. Vinish
          </span>
          <h2 className="about-display text-3xl md:text-4xl font-bold text-[#1E293B]">
            Expert Urological <span className="text-[#48CAE4]">Care</span>
          </h2>
          <p className="about-body text-[#64748B] text-sm max-w-2xl mx-auto mt-2">
            Dedicated to providing exceptional urological care with compassion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ===== LEFT: IMAGE WITH OVERLAY CARD ===== */}
          <div className="relative">
            {/* Corner line accents - top-left */}
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-[#1E293B] rounded-tl-2xl"></div>
            {/* Corner line accents - bottom-right */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-[#48CAE4] rounded-br-2xl"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/doctor/dr-vinish.jpg" 
                alt="Dr. Vinish Kumar Singh" 
                className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x460/48CAE4/FFFFFF?text=Dr.+Vinish';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-[#1E293B]/0 to-transparent"></div>
              
              {/* Overlay Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#48CAE4] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    V
                  </div>
                  <div>
                    <p className="about-body text-white text-sm font-medium leading-tight">Dr. Vinish Kumar Singh</p>
                    <p className="about-body text-white/70 text-xs leading-tight">Urologist & Kidney Transplant Surgeon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Top Right */}
            <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl px-4 py-3 border border-[#48CAE4]/10">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#48CAE4] text-lg" />
                <div>
                  <p className="about-body text-xs text-[#64748B]">Trusted</p>
                  <p className="about-body text-sm font-bold text-[#1E293B]">5000+ Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: CONTENT ===== */}
          <div>
            
            <h2 className="about-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-3">
              Dr. Vinish <span className="text-[#48CAE4]">Kumar Singh</span>
            </h2>
            <p className="about-body text-sm text-[#64748B] flex items-center gap-2 mb-6">
              <FaStethoscope className="text-[#48CAE4]" />
              Consultant Urologist, Andrologist &amp; Kidney Transplant Surgeon
            </p>

            {/* ===== BIO AS INFO GRID ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={i} 
                    className="group bg-[#E8F8FC] hover:bg-[#48CAE4]/10 rounded-xl p-3.5 border border-[#48CAE4]/10 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white text-[#48CAE4] shadow-sm flex-shrink-0">
                        <Icon className="text-xs" />
                      </span>
                      <span className="about-body text-[10px] font-semibold uppercase tracking-wider text-[#48CAE4]">
                        {card.label}
                      </span>
                    </div>
                    <p className="about-body text-xs text-[#1E293B] leading-snug pl-9">{card.text}</p>
                  </div>
                );
              })}
            </div>

            {/* ===== CREDENTIALS ===== */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {credentials.map((cred, i) => {
                const Icon = cred.icon;
                return (
                  <div key={i} className="flex items-center gap-2 bg-[#E8F8FC] px-3 py-2 rounded-xl border border-[#48CAE4]/10">
                    <Icon className="text-[#48CAE4] text-sm flex-shrink-0" />
                    <span className="about-body text-[10px] text-[#1E293B] font-medium leading-tight">{cred.text}</span>
                  </div>
                );
              })}
            </div>

            {/* ===== CTA ===== */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link 
                to="/about" 
                className="about-body group inline-flex items-center gap-2 bg-[#F77F00] hover:bg-[#E06A00] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <FaHeartbeat className="animate-pulse" />
                More About Us
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default React.memo(About);