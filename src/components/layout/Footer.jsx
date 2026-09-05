import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaArrowRight,
  FaHospital,
  FaUserMd,
  FaStethoscope,
  FaLinkedinIn,
  FaTwitter,
  FaDirections,
  FaArrowUp,
} from 'react-icons/fa';

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dr-vinish-kumar-singh-5b236421b/', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/dr_vinish', label: 'Twitter' },
  { icon: FaGoogle, href: 'https://g.page/r/CTsbYN10rYDmEAg/review', label: 'Google Review' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://www.youtube.com/', label: 'YouTube' },
];

const IMPORTANT_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Dr.', href: '/about' },
  {
    label: 'Conditions Treated',
    dropdown: true,
    items: [
      { label: 'Paediatric Urology', href: '/paediatric-urology' },
      { label: 'Reconstructive Urology', href: '/reconstructive-urology' },
      { label: 'Kidney Stones', href: '/kidney-stones' },
      { label: 'Prostate Enlargement', href: '/prostate-enlargement' },
      { label: 'Prostatitis', href: '/prostatitis' },
      { label: 'UTI Infection', href: '/uti-infection' },
      { label: 'Stricture Urethra', href: '/stricture-urethra' },
      { label: 'Urethritis', href: '/urethritis' },
      { label: 'Over Active Bladder', href: '/over-active-bladder' },
      { label: 'Ruptured Urethra', href: '/ruptured-urethra' },
      { label: 'Kidney/Renal Transplantation', href: '/kidney-transplant' },
    ],
  },
  {
    label: 'Andrology',
    dropdown: true,
    items: [
      { label: 'Male Infertility', href: '/male-infertility' },
      { label: 'Erectile Dysfunction', href: '/erectile-dysfunction' },
      { label: 'Penile Enlargement', href: '/penile-enlargement' },
      { label: 'Premature Ejaculation', href: '/premature-ejaculation' },
      { label: 'Chronic Orchialgia', href: '/chronic-orchialgia' },
      { label: 'Chronic Testicular Pain', href: '/chronic-testicular-pain' },
      { label: 'Varicocele Surgery', href: '/varicocele-surgery' },
    ],
  },
  {
    label: 'Male Urology',
    dropdown: true,
    items: [
      { label: 'Hypogonadism', href: '/hypogonadism' },
      { label: 'Varicocele', href: '/varicocele' },
      { label: 'Erectile Dysfunction', href: '/male-erectile-dysfunction' },
      { label: "Peyronie's Diseases", href: '/peyronies-disease' },
      { label: 'Loss Of Libido', href: '/loss-of-libido' },
      { label: 'Impotency', href: '/impotency' },
      { label: 'Male Infertility', href: '/male-infertility-male' },
      { label: 'Penile Curvature', href: '/penile-curvature' },
    ],
  },
  {
    label: 'Female Urology',
    dropdown: true,
    items: [
      { label: 'Recurrent Urinary Tract Infection', href: '/recurrent-uti' },
      { label: 'Urinary Incontinence', href: '/urinary-incontinence' },
      { label: 'Stress Urinary Incontinence', href: '/stress-urinary-incontinence' },
      { label: 'Voiding Difficulties', href: '/voiding-difficulties' },
      { label: 'Over Active Bladder', href: '/female-overactive-bladder' },
      { label: 'Cystocele', href: '/cystocele' },
      { label: 'Pelvic Organ Prolapse', href: '/pelvic-organ-prolapse' },
      { label: 'Nocturia', href: '/nocturia' },
    ],
  },
  { label: 'Renal Transplant', href: '/kidney-transplant' },
  { label: 'Gallery', href: '/gallery' },
  // ✅ ADMIN LINK - NETLIFY WALA ✅
  { label: '🔒 Admin Login', href: 'https://dr-vinish-adminpanel.netlify.app/admin/login', target: '_blank' },
];

const TIMINGS = [
  { name: 'Rudraksh IVF & Urology Centre', time: '9:00 AM – 4:00 PM' },
  { name: 'Aarogyam Multi Speciality Clinic', time: '4:00 PM – 6:00 PM' },
  { name: 'Dr. Shilpi Maternity & Urology Center', time: '7:00 PM – 9:00 PM' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <footer className="relative bg-[#0F2A38] overflow-hidden border-t border-[#F77F00]/20">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
      `}</style>

      {/* AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F77F00]/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F77F00]/8 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* GRID: 4 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* COLUMN 1: ABOUT */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <FaUserMd className="text-[#F77F00] text-xs" />
              About Dr. Vinish Singh
            </h3>
            <div className="w-8 h-px bg-gradient-to-r from-[#F77F00] to-transparent mb-2"></div>
            <ul className="space-y-1.5 text-[11px] text-white/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 mt-1.5 rounded-full bg-[#F77F00] shrink-0"></span>
                Associate Professor at TSM Medical College since 2017.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 mt-1.5 rounded-full bg-[#F77F00] shrink-0"></span>
                Consultant Urologist, SKD Kanpur Road, Lucknow.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 mt-1.5 rounded-full bg-[#F77F00] shrink-0"></span>
                Consultant Urologist, Ajanta Hospital, Alambagh, Lucknow.
              </li>
            </ul>
          </div>

          {/* COLUMN 2: IMPORTANT LINKS */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <FaStethoscope className="text-[#F77F00] text-xs" />
              Important Links
            </h3>
            <div className="w-8 h-px bg-gradient-to-r from-[#F77F00] to-transparent mb-2"></div>
            <ul className="space-y-1.5 text-[11px]">
              {IMPORTANT_LINKS.map((link, index) => {
                if (link.dropdown) {
                  const isOpen = openDropdown === link.label;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="relative text-white/80 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5 group w-fit"
                      >
                        <FaArrowRight className="text-[#F77F00] text-[9px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="relative">
                          {link.label}
                          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#F77F00] group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span className="text-[9px] ml-1 text-white/40">▼</span>
                      </button>
                      {isOpen && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-[#F77F00]/30 pl-2">
                          {link.items.map((item, idx) => (
                            <li key={idx}>
                              <a
                                href={item.href}
                                className="text-white/70 hover:text-white transition-colors duration-300 text-[10px]"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }
                // ✅ ADMIN LINK KE LIYE SPECIAL HANDLING ✅
                if (link.label === '🔒 Admin Login') {
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-[#F77F00] hover:text-[#FF8F1A] transition-colors duration-300 inline-flex items-center gap-1.5 group w-fit font-medium"
                      >
                        <FaArrowRight className="text-[#F77F00] text-[9px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="relative">
                          {link.label}
                          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#F77F00] group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative text-white/80 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5 group w-fit"
                    >
                      <FaArrowRight className="text-[#F77F00] text-[9px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#F77F00] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: CLINIC TIMINGS */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <FaClock className="text-[#F77F00] text-xs" />
              Clinic Timings
            </h3>
            <div className="w-8 h-px bg-gradient-to-r from-[#F77F00] to-transparent mb-2"></div>
            <ul className="space-y-2 text-[11px]">
              {TIMINGS.map((clinic, i) => (
                <li key={clinic.name} className="flex gap-2 group hover:bg-white/10 p-1.5 rounded-lg transition-all duration-300">
                  <span className="font-display text-[#F77F00]/60 text-base leading-none pt-0.5 tabular-nums group-hover:text-[#F77F00] transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-medium text-white leading-snug group-hover:text-[#F77F00] transition-colors duration-300 text-[11px]">{clinic.name}</p>
                    <p className="text-white/60 text-[10px]">{clinic.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: MAP */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F77F00] text-xs" />
              Aarogyam Multispeciality Clinic
            </h3>
            <div className="w-8 h-px bg-gradient-to-r from-[#F77F00] to-transparent mb-2"></div>
            <div className="relative rounded-lg overflow-hidden shadow ring-1 ring-[#F77F00]/20 w-full h-32 group hover:ring-[#F77F00]/50 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d911638.1217851932!2d80.89642!3d26.805377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe680ad74dd601b3b!2sAarogyam%20multispeciality%20clinic!5e0!3m2!1sen!2sin!4v1618302985409!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Aarogyam Multispeciality Clinic Location"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
              ></iframe>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aarogyam+multispeciality+clinic+lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1 right-1 flex items-center gap-1 bg-black/40 hover:bg-[#F77F00] text-white text-[9px] px-1.5 py-0.5 rounded backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <FaDirections className="text-[9px]" /> Directions
              </a>
            </div>
          </div>

        </div>

        {/* VISIT US */}
        <div className="mt-4 pt-4 border-t border-[#F77F00]/20">
          <div className="rounded-lg bg-white/5 border border-[#F77F00]/20 p-3 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:min-w-[80px]">
                <FaHospital className="text-[#F77F00] text-base" />
                <h3 className="font-display text-sm font-semibold text-white">Visit Us</h3>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex-1 flex flex-col gap-0.5 text-[10px] text-white/80">
                  <span className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 cursor-default">
                    <FaMapMarkerAlt className="text-[#F77F00] text-[10px]" />
                    Aarogyam Multispeciality Clinic, Alambagh, Lucknow, UP
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 md:ml-auto">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    className="relative w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F77F00] hover:text-white hover:bg-[#F77F00] hover:border-[#F77F00] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="text-[9px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - ADMIN LINK YAHAN BHI */}
        <div className="mt-4 pt-3 border-t border-[#F77F00]/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-center flex-wrap">
            <p className="text-[9px] text-white/60">
              © {year} Dr. Vinish Singh — Urologist. All rights reserved.
            </p>
            
            <span className="text-[9px] text-white/40 hidden sm:inline">•</span>
            
            {/* 🔥 YEH RAHA ADMIN LINK 🔥 */}
            <a 
              href="https://dr-vinish-adminpanel.netlify.app/admin/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] text-[#F77F00]/80 hover:text-[#F77F00] transition-colors duration-300 hover:scale-105 inline-flex items-center gap-1"
            >
              🔒 Admin Login
            </a>
            
            <span className="text-[9px] text-white/40 hidden sm:inline">•</span>
            
            <div className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-300">
              <span className="text-[9px] text-white/50">Design and Developed by</span>
              <a
                href="https://codecrafter.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="/images/footer/cc.png"
                  alt="CODE/CRAFTER"
                  className="h-4 md:h-5 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const fallback = document.createElement('span');
                    fallback.className = 'text-[9px] font-semibold text-white/70 hover:text-white transition-colors duration-300';
                    fallback.textContent = 'CODE/RAFTER';
                    parent.appendChild(fallback);
                  }}
                />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* SCROLL TO TOP */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 group flex items-center justify-center w-10 h-10 rounded-full bg-[#F77F00] hover:bg-[#E06A00] text-white shadow-lg shadow-[#F77F00]/40 hover:shadow-[#F77F00]/60 hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 rounded-full border border-[#F77F00]/30 animate-ping-slow"></span>
          <FaArrowUp className="text-sm relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}

      <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-ping-slow { animation: none; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;