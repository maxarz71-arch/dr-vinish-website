import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaClock,
  FaUserMd,
  FaBandAid,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="p-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const Phimosis = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .p-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .p-body { font-family: 'Inter', sans-serif; }
        .p-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/paediatric-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 p-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Paediatric Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/phimosis/phimosis-banner.jpg"
            alt="Phimosis"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Phimosis';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Paediatric Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="p-display text-3xl md:text-5xl font-semibold text-white">Phimosis</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Description */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="p-body text-[#16232E] leading-relaxed">
                <strong>Phimosis</strong> is a condition in which the foreskin is too tight to pull all the way back.
                It's normal in all baby boys and may persist for some years, until the foreskin becomes supple and
                stretched enough for the head of the penis to be seen completely.
              </p>
              <p className="p-body text-[#5B6B76] text-sm leading-relaxed mt-3">
                In some cases, tight foreskin can result in permanent phimosis. Scarring may be caused by infection,
                inflammation, or forced stretching of the foreskin before it's ready.
              </p>

              {/* Reassurance callout */}
              <div className="mt-5 flex gap-3 bg-[#EAF9F1] border border-[#2F9E68]/25 rounded-xl p-4">
                <FaInfoCircle className="text-[#2F9E68] mt-0.5 shrink-0" />
                <p className="p-body text-sm text-[#1B5E3D] leading-relaxed">
                  <strong>Good to know:</strong> physiological phimosis in infancy is completely normal and usually
                  resolves on its own by around age 1. Only about <strong>10% of boys</strong> go on to develop
                  scarring that needs attention.
                </p>
              </div>
            </div>

            {/* Symptoms */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Symptoms of Phimosis</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Bulging of the foreskin',
                  'Difficulty urinating',
                  'Inability to pull back the foreskin',
                  'Pain and itching of the tip of the penis',
                  'Swelling of the tip of the penis',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 p-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2.5"
                  >
                    <FaCheckCircle className="text-[#E8763C] shrink-0" size={13} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaInfoCircle}>Causes of Phimosis</SectionHeading>
              <p className="p-body text-[#5B6B76] text-sm leading-relaxed">
                Phimosis is congenital and physiological up to around age 1, typically improving and resolving on its
                own after that. Not all boys and men with risk factors will develop it — but scarring of the foreskin
                can lead to persistent phimosis.
              </p>
            </div>

            {/* Treatment */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaBandAid}>How Is Phimosis Treated?</SectionHeading>
              <p className="p-body text-[#5B6B76] text-sm leading-relaxed mb-5">
                Phimosis in infancy is nearly always physiological and only needs treatment if it's causing urinary
                discomfort or obstruction. Mild cases in older children or adults often respond to nonsurgical
                measures — tight cases, or ones that don't respond, are treated surgically.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Non Surgical */}
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-5">
                  <h3 className="p-display text-base font-semibold text-[#16232E] mb-3">Non-Surgical</h3>
                  <ul className="space-y-3 p-body text-[#3E4C56] text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={13} />
                      <span><strong>Topical steroid cream</strong> — betamethasone applied for 4–6 weeks; simple, inexpensive, and highly effective.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={13} />
                      <span><strong>Stretching</strong> — manual, or with balloons or other tools, producing a gradual permanent increase in size.</span>
                    </li>
                  </ul>
                </div>

                {/* Surgical */}
                <div className="bg-[#E8763C]/5 rounded-xl border border-[#E8763C]/20 p-5">
                  <h3 className="p-display text-base font-semibold text-[#16232E] mb-3">Surgical</h3>
                  <ul className="space-y-3 p-body text-[#3E4C56] text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={13} />
                      <span><strong>Circumcision</strong> — complete removal of the foreskin; effective for pathological phimosis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={13} />
                      <span><strong>Dorsal slit</strong> — a single incision along the upper foreskin from tip to corona.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={13} />
                      <span><strong>Frenuloplasty</strong> — for a short frenulum that's preventing prepuce retraction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={13} />
                      <span><strong>Preputioplasty</strong> — a limited dorsal slit with transverse closure; less pain, shorter healing than full circumcision.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Complications */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Potential Complications</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Recurrent urinary tract infection',
                  'Difficulty ejaculating',
                  'Difficulty urinating',
                  'Infertility',
                ].map((complication, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 p-body text-[#3E4C56] text-sm bg-[#FDF2ED] rounded-lg px-3 py-2.5"
                  >
                    <FaExclamationTriangle className="text-[#E8763C] shrink-0" size={12} />
                    {complication}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Usually resolves by</dt>
                      <dd className="p-body text-sm text-[#16232E] mt-0.5">Around age 1</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Non-surgical options</dt>
                      <dd className="p-body text-sm text-[#16232E] mt-0.5">Steroid cream, stretching</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaExclamationTriangle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Scarring risk</dt>
                      <dd className="p-body text-sm text-[#16232E] mt-0.5">~10% of boys</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* When to see a doctor */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaUserMd className="text-[#7FE0F0]" />
                  <h3 className="p-display text-base font-semibold text-white">When to See a Doctor</h3>
                </div>
                <p className="p-body text-sm text-white/75 leading-relaxed">
                  Get it checked if there's pain, swelling, difficulty urinating, or tightness that persists well
                  beyond early childhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phimosis;