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
  FaBrain,
  FaHeartbeat,
  FaUtensils,
} from 'react-icons/fa';

const OverActiveBladder = () => {
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
            src="/images/treatments/over-active-bladder/over-active-bladder-banner.jpg"
            alt="Over Active Bladder"
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
                  Over Active <span className="text-[#7FE0F0]">Bladder</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Urinary urgency with or without urge incontinence
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Over Active Bladder</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Over Active Bladder (OAB) is defined as "Urinary urgency with or without urge incontinence usually with frequency and nocturia if there are no infection or any proven other etiology." The bladder relies on a healthy urinary tract for proper functionalities. The communication pathways also need to be intact between the brain, spinal cord and the bladder muscles. There could be several conditions affecting the parts of the body and causing the bladder muscle to contract involuntarily and repeatedly.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#0E7C90]" size={16} />
                Causes of Overactive Bladder
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The overactive bladder is generally a result of the involuntary and repeated muscle contractions in the bladder muscles. It might take when the bladder is full or even when it is not. Only in those cases where the exact cause of this bladder over activity is not known is termed as OAB.
              </p>
              
              <div className="mt-4 space-y-4">
                {/* Idiopathic */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Idiopathic Detrusor Overactivity
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    There are no identifiable cause of this.
                  </p>
                </div>

                {/* Neurogenic */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaBrain size={14} /> Neurogenic Detrusor Overactivity
                  </h3>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <p className="p-body text-xs font-semibold text-[#0E7C90]">Brain Level</p>
                      <ul className="mt-1 space-y-1">
                        {['Stroke', "Parkinson's Disease", 'Brain tumors', 'Traumatic Brain Injury', 'Multiple Sclerosis'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                            <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="p-body text-xs font-semibold text-[#0E7C90]">Spinal Cord Level</p>
                      <ul className="mt-1 space-y-1">
                        {['Spinal cord Injury', 'Spinal cord tumor', 'Multiple Sclerosis', 'Transverse Myelitis', 'Myelodysplasia', 'Diabetic Neuropathy'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                            <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Non Neurological */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaHeartbeat size={14} /> Non-Neurological Conditions
                  </h3>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Bladder Infection', 'Bladder Outlet Obstruction (Prostate, Stricture)', 'Bladder Stones', 'Bladder Tumors'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Risk Factors of Overactive Bladder
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Gender — More common in women',
                  'Age — Risk increases with age',
                  'Type A personality, high tension jobs',
                  'Obesity — Excess weight affects bladder',
                ].map((risk, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Triggers */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaUtensils className="text-[#F77F00]" size={16} />
                Triggers for Overactive Bladder
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Drinking too much alcohol or caffeine',
                  'Eating acidic foods (citrus fruits, tomatoes)',
                  'Carbonated drinks (cola)',
                  'Constipation',
                  'Not having enough fluids',
                  'Not taking fibrous foods in diet',
                ].map((trigger, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {trigger}
                  </li>
                ))}
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Definition</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Urinary urgency ± incontinence</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">More common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Women</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Key triggers</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Caffeine, alcohol, acidic foods</span>
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
                Get it checked if you experience frequent urgency, urge incontinence, or symptoms affecting your daily life.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OverActiveBladder;