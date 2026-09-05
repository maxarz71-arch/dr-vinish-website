import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaClock,
  FaCalendarCheck,
  FaPhoneAlt,
  FaShieldAlt,
  FaProcedures,
  FaMicroscope,
  FaUserMd,
  FaHeartbeat,
  FaBrain,
  FaBolt,
  FaSmoking,
  FaGlassCheers,
  FaWeight,
  FaPills,
  FaDna,
  FaFrown,
  FaHeart,
} from 'react-icons/fa';

const LossOfLibido = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .p-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .p-body { font-family: 'Inter', sans-serif; }
        .p-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -8px rgba(93, 169, 179, 0.12);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 p-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Home
        </Link>

        {/* ===== HERO SECTION ===== */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10 animate-fade-in-up">
          <img
            src="/images/treatments/loss-of-libido/loss-of-libido-banner.jpg"
            alt="Loss of Libido"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Male Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Loss of <span className="text-[#7FE0F0]">Libido</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding low sex drive & treatment options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">What is Loss of Libido?</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Loss of libido (sex drive) is a common problem that can affect men and women of any age. It's normal for many people, especially women, to lose a bit of interest in sex as they get older, mainly because of diminishing levels of sex hormones or age-related health problems. But an unexpected loss of libido can indicate an underlying personal, medical or lifestyle problem, and can be upsetting to both partners in a relationship.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Causes
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                As is the case with women, lack of desire in men can be of either physical or psychological origin.
              </p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Physical Causes */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaHeartbeat size={14} /> Physical Causes
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {[
                      { icon: FaGlassCheers, text: 'Alcoholism — quite common' },
                      { icon: FaSmoking, text: 'Abuse of drugs such as cocaine' },
                      { icon: FaWeight, text: 'Obesity — slimming down often helps' },
                      { icon: FaDna, text: 'Anaemia' },
                      { icon: FaBolt, text: 'Hyperprolactinaemia — rare disorder' },
                      { icon: FaPills, text: 'Prescribed drugs (Proscar/finasteride)' },
                      { icon: FaBolt, text: 'Low testosterone level — rare' },
                      { icon: FaHeartbeat, text: 'Major disease such as diabetes' },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                          <Icon className="text-[#5DA9B3] shrink-0" size={12} />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Psychological Causes */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaBrain size={14} /> Psychological Causes
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {[
                      { icon: FaFrown, text: 'Depression — very common' },
                      { icon: FaBrain, text: 'Stress and overwork' },
                      { icon: FaBrain, text: 'Hang-ups from childhood' },
                      { icon: FaHeart, text: 'Latent homosexuality' },
                      { icon: FaFrown, text: 'Serious relationship problems' },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                          <Icon className="text-[#F77F00] shrink-0" size={12} />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#5DA9B3]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Definition</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Loss of sex drive</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common cause</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Depression, stress, obesity</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Affects</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Men & women of any age</span>
                </div>
              </dl>
            </div>

            <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="p-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#F77F00]" size={14} />
                Our Services
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCheckCircle className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">Complete Guide To Prevent Disease</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCalendarCheck className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">Online Appointment</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaPhoneAlt className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">24 Hours Services</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#5DA9B3]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                If you experience unexpected loss of sex drive affecting your relationship or quality of life, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LossOfLibido;