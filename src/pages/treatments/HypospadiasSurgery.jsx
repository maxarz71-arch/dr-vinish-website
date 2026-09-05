import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaClock,
  FaHospital,
  FaInfoCircle,
  FaCheckCircle,
  FaBandAid,
  FaChartLine,
  FaUserMd,
  FaChild,
  FaExclamationTriangle,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="hs-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const HypospadiasSurgery = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .hs-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .hs-body { font-family: 'Inter', sans-serif; }
        .hs-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/reconstructive-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 hs-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Reconstructive Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/hypospadias-surgery/hypospadias-surgery-banner.jpg"
            alt="Hypospadias Surgery"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Hypospadias+Surgery';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <span className="hs-body text-xs font-semibold text-white uppercase tracking-wide flex items-center gap-1.5">
              <FaChartLine size={11} /> 1 in 300 males
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="hs-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Reconstructive Urology &middot; Procedure Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="hs-display text-3xl md:text-5xl font-semibold text-white">Hypospadias Surgery</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Overview */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="hs-body text-[#16232E] leading-relaxed">
                <strong>Hypospadias</strong> is a condition where the urethral opening is proximal to the normal glanular location. 
                It is a <strong>developmental abnormality</strong> that occurs in <strong>1 in 300 males</strong>. 
                Surgical correction is the standard treatment to restore normal function and appearance.
              </p>

              {/* Outcome callout */}
              <div className="mt-5 flex gap-3 bg-[#EAF9F1] border border-[#2F9E68]/25 rounded-xl p-4">
                <FaCheckCircle className="text-[#2F9E68] mt-0.5 shrink-0" />
                <p className="hs-body text-sm text-[#1B5E3D] leading-relaxed">
                  <strong>What to expect:</strong> surgical correction provides a straight penis, a meatus at the tip of the penis, 
                  and normal urinary function with <strong>high success rates</strong>.
                </p>
              </div>
            </div>

            {/* Why Repair */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaUserMd}>Why Repair Hypospadias?</SectionHeading>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserMd className="text-[#0E7C90]" />
                    <h3 className="hs-display text-base font-semibold text-[#16232E]">Functional</h3>
                  </div>
                  <p className="hs-body text-sm text-[#3E4C56] leading-relaxed">
                    Ability to void while standing. Abnormal deflection may necessitate seated urination.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <FaChild className="text-[#0E7C90]" />
                    <h3 className="hs-display text-base font-semibold text-[#16232E]">Cosmetic &amp; Psychological</h3>
                  </div>
                  <p className="hs-body text-sm text-[#3E4C56] leading-relaxed">
                    Potential psychological stress associated with having a genital anomaly. Acceptable cosmetic appearance is important.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4 md:col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <FaExclamationTriangle className="text-[#0E7C90]" />
                    <h3 className="hs-display text-base font-semibold text-[#16232E]">Fertility &amp; Sexual Function</h3>
                  </div>
                  <p className="hs-body text-sm text-[#3E4C56] leading-relaxed">
                    Abnormal deflection of ejaculate may preclude effective insemination. Chordee can prevent vaginal insertion or cause painful erections.
                  </p>
                </div>
              </div>
            </div>

            {/* Surgical Goals */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Surgical Goals</SectionHeading>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Straight penis — repair curvature (orthoplasty)',
                  'Urethra with meatus at tip (urethroplasty)',
                  'Natural conical glans (glansplasty)',
                  'Cosmetically acceptable penile skin',
                  'Normal-appearing scrotum'
                ].map((goal, idx) => (
                  <div key={idx} className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-3 flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    <p className="hs-body text-sm text-[#3E4C56]">{goal}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10">
                <FaInfoCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={14} />
                <p className="hs-body text-xs text-[#5B6B76] leading-relaxed">
                  <strong>Result:</strong> Suitable for future sexual intercourse, standing urination, and acceptable cosmetic appearance.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* Quick Facts */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartLine className="text-[#7FE0F0]" />
                  <h3 className="hs-display text-base font-semibold text-white">Quick Facts</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="hs-display text-3xl font-semibold text-white">1:300</p>
                    <p className="hs-body text-sm text-white/75">Birth prevalence</p>
                  </div>
                  <div>
                    <p className="hs-display text-3xl font-semibold text-white">3 mo+</p>
                    <p className="hs-body text-sm text-white/75">Age for surgery</p>
                  </div>
                  <div>
                    <p className="hs-display text-3xl font-semibold text-white">90%+</p>
                    <p className="hs-body text-sm text-white/75">Successful outcome</p>
                  </div>
                </div>
              </div>

              {/* At a Glance */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="hs-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaHospital className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="hs-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</dt>
                      <dd className="hs-body text-sm text-[#16232E] mt-0.5">Surgical Correction</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="hs-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Age for Surgery</dt>
                      <dd className="hs-body text-sm text-[#16232E] mt-0.5">3 months or older</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaBandAid className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="hs-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Type</dt>
                      <dd className="hs-body text-sm text-[#16232E] mt-0.5">Developmental abnormality</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Key Points */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaInfoCircle className="text-[#0E7C90]" />
                  <h3 className="hs-display text-base font-semibold text-[#16232E]">Key Points</h3>
                </div>
                <ul className="space-y-2 hs-body text-sm text-[#5B6B76]">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Surgical correction is the standard treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Recommended age: 3 months or older
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Goals: function + appearance + fertility
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    90%+ successful outcomes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypospadiasSurgery;