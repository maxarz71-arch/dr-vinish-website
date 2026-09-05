import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaClock,
  FaUtensils,
  FaCalendarCheck,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';

const KidneyStones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F8FC] via-[#F4FAFB] to-[#E0F2F5] pt-24 pb-16">
      
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

        .card-premium {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(14, 124, 144, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .card-premium:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(14, 124, 144, 0.2);
          border-color: rgba(14, 124, 144, 0.25);
        }

        .service-card {
          background: linear-gradient(135deg, rgba(14, 124, 144, 0.05), rgba(72, 202, 228, 0.08));
          border: 1px solid rgba(14, 124, 144, 0.08);
          transition: all 0.3s ease;
        }
        .service-card:hover {
          background: linear-gradient(135deg, rgba(14, 124, 144, 0.12), rgba(72, 202, 228, 0.15));
          border-color: rgba(14, 124, 144, 0.2);
          transform: scale(1.02);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/reconstructive-urology"
          className="group inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-all duration-300 mb-6 p-body text-sm font-medium bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0E7C90]/10 hover:shadow-md"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Reconstructive Urology
        </Link>

        {/* ===== HERO SECTION WITH IMAGE ===== */}
        <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-10 animate-fade-in-up">
          <img
            src="/images/treatments/kidneystone/kidneystone-banner.jpg"
            alt="Kidney Stones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E38]/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Reconstructive Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                <FaStethoscope className="text-2xl" />
              </div>
              <div>
                <h1 className="p-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  Kidney <span className="text-[#7FE0F0]">Stones</span>
                </h1>
                <p className="p-body text-sm text-white/70 mt-1 max-w-xl">
                  Solid crystal aggregations formed in kidneys from dietary minerals in urine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <div className="card-premium rounded-3xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E7C90] to-[#48CAE4] flex items-center justify-center text-white shadow-lg">
                  <FaInfoCircle size={16} />
                </div>
                <h2 className="p-display text-2xl font-semibold text-[#16232E]">Kidney Stones</h2>
              </div>
              <p className="p-body text-[#3E4C56] leading-relaxed text-base">
                A kidney stone, also known as a renal calculus is a solid concretion or crystal aggregation formed in the kidneys from dietary minerals in the urine. Urinary stones are typically classified by their location in the kidney (nephrolithiasis), ureter (ureterolithiasis), or bladder (cystolithiasis), or by their chemical composition (calcium-containing, struvite, uric acid, or other compounds).
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="bg-[#0E7C90]/5 rounded-xl px-4 py-2 border border-[#0E7C90]/10">
                  <span className="p-body text-xs text-[#5B6B76]">Men affected</span>
                  <p className="p-body text-xl font-bold text-[#0E7C90]">80%</p>
                </div>
                <div className="bg-[#F77F00]/5 rounded-xl px-4 py-2 border border-[#F77F00]/10">
                  <span className="p-body text-xs text-[#5B6B76]">First episode (Men)</span>
                  <p className="p-body text-xl font-bold text-[#F77F00]">30-40 yrs</p>
                </div>
                <div className="bg-[#48CAE4]/5 rounded-xl px-4 py-2 border border-[#48CAE4]/10">
                  <span className="p-body text-xs text-[#5B6B76]">Women</span>
                  <p className="p-body text-xl font-bold text-[#48CAE4]">Later age</p>
                </div>
              </div>
            </div>

            {/* Signs and Symptoms */}
            <div className="card-premium rounded-3xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D62828] to-[#E8763C] flex items-center justify-center text-white shadow-lg">
                  <FaExclamationTriangle size={16} />
                </div>
                <h2 className="p-display text-2xl font-semibold text-[#16232E]">Signs and Symptoms</h2>
              </div>
              <p className="p-body text-[#3E4C56] leading-relaxed text-base">
                The hallmark of stones that obstruct the ureter or renal pelvis is excruciating, intermittent pain that radiates from the flank to the groin or to the genital area and inner thigh. This particular type of pain, known as renal colic, is often described as one of the strongest pain sensations known. Renal colic caused by kidney stones is commonly accompanied by urinary urgency, restlessness, hematuria, sweating, nausea, and vomiting. It typically comes in waves lasting 20 to 60 minutes caused by peristaltic contractions of the ureter as it attempts to expel the stone. The embryological link between the urinary tract, the genital system, and the gastrointestinal tract is the basis of the radiation of pain to the gonads, as well as the nausea and vomiting that are also common in urolithiasis. Postrenal azotemia and hydronephrosis can be observed following the obstruction of urine flow through one or both ureters.
              </p>
            </div>

            {/* Causes */}
            <div className="card-premium rounded-3xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F77F00] to-[#E85D04] flex items-center justify-center text-white shadow-lg">
                  <FaUtensils size={16} />
                </div>
                <h2 className="p-display text-2xl font-semibold text-[#16232E]">Causes</h2>
              </div>
              <p className="p-body text-[#3E4C56] leading-relaxed text-base">
                Dietary factors that increase the risk of stone formation include low fluid intake and high dietary intake of animal protein, sodium, refined sugars, fructose and high fructose corn syrup, oxalate, grapefruit juice, apple juice, and cola drinks.
              </p>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-6">

            {/* Quick facts */}
            <div className="card-premium rounded-3xl p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-5 flex items-center gap-2">
                <FaClock className="text-[#0E7C90]" />
                At a Glance
              </h3>
              <dl className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-[#0E7C90]/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0E7C90]/10 flex items-center justify-center text-[#0E7C90]">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Most common in</dt>
                    <dd className="p-body text-sm font-medium text-[#16232E]">Men (80%)</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#F77F00]/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#F77F00]/10 flex items-center justify-center text-[#F77F00]">
                    <FaClock />
                  </div>
                  <div>
                    <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">First episode (Men)</dt>
                    <dd className="p-body text-sm font-medium text-[#16232E]">30-40 years</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#48CAE4]/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#48CAE4]/10 flex items-center justify-center text-[#48CAE4]">
                    <FaInfoCircle />
                  </div>
                  <div>
                    <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Women</dt>
                    <dd className="p-body text-sm font-medium text-[#16232E]">Later age</dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-[#0B2E38] to-[#123C4D] rounded-3xl p-6 shadow-xl animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="p-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#7FE0F0]" />
                Our Services
              </h3>
              <div className="space-y-3">
                <div className="service-card rounded-xl px-4 py-3 flex items-center gap-3">
                  <FaCheckCircle className="text-[#7FE0F0] shrink-0" size={16} />
                  <span className="p-body text-sm text-white font-medium">Complete Guide To Prevent Disease</span>
                </div>
                <div className="service-card rounded-xl px-4 py-3 flex items-center gap-3">
                  <FaCalendarCheck className="text-[#7FE0F0] shrink-0" size={16} />
                  <span className="p-body text-sm text-white font-medium">Online Appointment</span>
                </div>
                <div className="service-card rounded-xl px-4 py-3 flex items-center gap-3">
                  <FaPhoneAlt className="text-[#7FE0F0] shrink-0" size={16} />
                  <span className="p-body text-sm text-white font-medium">24 Hours Services</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyStones;