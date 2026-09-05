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
  FaTint,
  FaFlask,
  FaBacteria,
  FaMale,
  FaFemale,
  FaHeartbeat,
} from 'react-icons/fa';

const Urethritis = () => {
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
          box-shadow: 0 8px 24px -8px rgba(14, 124, 144, 0.12);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/reconstructive-urology"
          className="group inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 p-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Reconstructive Urology
        </Link>

        {/* ===== HERO SECTION ===== */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10 animate-fade-in-up">
          <img
            src="/images/treatments/urethritis/urethritis-banner.jpg"
            alt="Urethritis"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Reconstructive Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  <span className="text-[#7FE0F0]">Urethritis</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Swelling and irritation (inflammation) of the urethra
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
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Urethritis</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Urethritis is swelling and irritation (inflammation) of the urethra. The urethra is the tube that carries urine from the body.
              </p>
            </div>

            {/* Causes, Incidence & Risk Factors */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#0E7C90]" size={16} />
                Causes, Incidence &amp; Risk Factors
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Urethritis may be caused by bacteria or a virus. The same bacteria that cause urinary tract infections (<strong>E. coli</strong>) and some sexually transmitted diseases (<strong>chlamydia, gonorrhea</strong>) can lead to urethritis. Viral causes of urethritis include herpes simplex virus and cytomegalovirus. Other causes include injury and sensitivity to the chemicals used in spermicides or contraceptive jellies, creams, or foams.
              </p>
            </div>

            {/* Symptoms — Men */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMale className="text-[#0E7C90]" size={16} />
                Symptoms in Men
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Blood in the urine or semen',
                  'Burning pain while urinating (dysuria)',
                  'Discharge from penis',
                  'Fever (rare)',
                  'Frequent or urgent urination',
                  'Itching, tenderness, or swelling in penis or groin area',
                  'Pain with intercourse or ejaculation',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Symptoms — Women */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaFemale className="text-[#0E7C90]" size={16} />
                Symptoms in Women
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Abdominal pain',
                  'Burning pain while urinating',
                  'Fever and chills',
                  'Frequent or urgent urination',
                  'Pelvic pain',
                  'Vaginal discharge',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#0E7C90]" size={16} />
                Treatment
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The goals of therapy are to:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span>Eliminate the cause of infection</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span>Improve symptoms</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span>Prevent the spread of infection</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            {/* Quick facts */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#0E7C90]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Condition</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Inflammation of urethra</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common causes</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Bacteria, Viruses</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Can affect</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Both men &amp; women</span>
                </div>
              </dl>
            </div>

            {/* Services */}
            <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="p-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#7FE0F0]" size={14} />
                Our Services
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCheckCircle className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">Complete Guide To Prevent Disease</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCalendarCheck className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">Online Appointment</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaPhoneAlt className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">24 Hours Services</span>
                </div>
              </div>
            </div>

            {/* When to see a doctor */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#0E7C90]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                Get it checked if you experience burning during urination, discharge from penis or vagina, pelvic pain, fever, or blood in urine.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Urethritis;