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
  FaBolt,
  FaSyringe,
  FaFlask,
  FaDna,
} from 'react-icons/fa';

const ChronicTesticularPain = () => {
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
            src="/images/treatments/chronic-testicular-pain/chronic-testicular-pain-banner.jpg"
            alt="Chronic Testicular Pain"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Andrology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Chronic <span className="text-[#7FE0F0]">Testicular Pain</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding long-term testicular pain & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">What is Chronic Testicular Pain?</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                It is a long term pain in the testes. Chronic Testicular pain is named <strong>Orchialgia</strong> in the medical term. The periodic and constant discomfort in the testicles for approximately <strong>3 months</strong> is known as Chronic Testicular Pain. Mostly this testicular pain caused due to infection, cancer, surgery, and testicular torsion. It's not an unusual dilemma for men of every age, but it is observed more commonly in <strong>young adults</strong>.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Common Causes
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { icon: FaBolt, text: 'Infection' },
                  { icon: FaDna, text: 'Cancer' },
                  { icon: FaProcedures, text: 'Surgery' },
                  { icon: FaBolt, text: 'Testicular Torsion' },
                ].map((cause, idx) => {
                  const Icon = cause.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                    >
                      <Icon className="text-[#5DA9B3] shrink-0" size={12} />
                      {cause.text}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Key Facts */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Key Facts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <p className="p-body text-xs text-[#8A97A0] uppercase tracking-wide font-semibold">Duration</p>
                  <p className="p-body text-lg font-bold text-[#16232E]">3+ months</p>
                </div>
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <p className="p-body text-xs text-[#8A97A0] uppercase tracking-wide font-semibold">Most common in</p>
                  <p className="p-body text-lg font-bold text-[#F77F00]">Young adults</p>
                </div>
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20 sm:col-span-2">
                  <p className="p-body text-xs text-[#8A97A0] uppercase tracking-wide font-semibold">Medical term</p>
                  <p className="p-body text-lg font-bold text-[#5DA9B3]">Orchialgia</p>
                </div>
              </div>
            </div>

            {/* When to See a Doctor */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#F77F00]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                When to See a Doctor
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                To avoid these symptoms of chronic pain, you should visit a testicle doctor specialist.
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Periodic or constant testicular pain lasting 3+ months',
                  'Pain interfering with daily activities',
                  'Pain accompanied by swelling or fever',
                  'Previous history of testicular torsion or surgery',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#F77F00] shrink-0" size={10} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            {/* Quick facts */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#5DA9B3]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Medical term</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Orchialgia</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Duration</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">3+ months</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Young adults</span>
                </div>
              </dl>
            </div>

            {/* Services */}
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

            {/* When to see a doctor */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#5DA9B3]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">Need Help?</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                If you are experiencing chronic testicular pain, consult a specialist for proper diagnosis and treatment.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronicTesticularPain;