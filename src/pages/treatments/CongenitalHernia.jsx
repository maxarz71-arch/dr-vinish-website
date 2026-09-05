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
  FaHospital,
  FaLightbulb,
  FaClipboardCheck,
  FaHeartbeat,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="ch-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const CongenitalHernia = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ch-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ch-body { font-family: 'Inter', sans-serif; }
        .ch-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/paediatric-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 ch-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Paediatric Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/congenital-hernia/congenital-hernia-banner.jpg"
            alt="Congenital Hernia/Hydrocele"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Congenital+Hernia';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="ch-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Paediatric Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="ch-display text-3xl md:text-5xl font-semibold text-white">Congenital Hernia / Hydrocele</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Description */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="ch-body text-[#16232E] leading-relaxed">
                <strong>A hydrocele</strong> is a scrotal collection of clear fluid in a thin-walled sack that also
                contains the testicle. Very rarely, due to the shared embryological background of male and female
                gonadal structures, female children or women may also experience a hydrocele — in this case, the sack
                and connection exist in the labia majora. A hydrocele may involve one side (unilateral) or both sides
                (bilateral) of the scrotum.
              </p>

              {/* Reassurance callout */}
              <div className="mt-5 flex gap-3 bg-[#EAF9F1] border border-[#2F9E68]/25 rounded-xl p-4">
                <FaInfoCircle className="text-[#2F9E68] mt-0.5 shrink-0" />
                <p className="ch-body text-sm text-[#1B5E3D] leading-relaxed">
                  <strong>Good to know:</strong> hydroceles are usually not dangerous and most resolve on their own
                  within <strong>6–12 months</strong> of birth. Surgery is only needed if it persists, or if it's
                  linked to an inguinal hernia.
                </p>
              </div>
            </div>

            {/* Causes & Risk Factors */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaInfoCircle}>Causes &amp; Risk Factors</SectionHeading>
              <div className="ch-body text-[#5B6B76] text-sm leading-relaxed space-y-3">
                <p>
                  Hydroceles are common in newborn infants. During normal development, the testicles descend through
                  a tube from the abdomen into the scrotum. <strong className="text-[#16232E]">Hydroceles occur when
                  this tube doesn't close</strong> — fluid drains from the abdomen through the open tube and builds up
                  in the scrotum.
                </p>
                <p>
                  Hydroceles normally go away a few months after birth. Sometimes a hydrocele occurs alongside an
                  inguinal hernia.
                </p>
                <div>
                  <p className="font-medium text-[#16232E] mb-1.5">Other causes include:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                      Fluid or blood blockage in the spermatic cord (more common in older men)
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                      Inflammation or injury of the testicle or epididymis
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Symptoms</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Painless swollen testicle',
                  'Feels like a water balloon',
                  'May occur on one or both sides',
                  'Scrotum appears enlarged',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 ch-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2.5"
                  >
                    <FaCheckCircle className="text-[#E8763C] shrink-0" size={13} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signs & Tests */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaClipboardCheck}>Signs &amp; Tests</SectionHeading>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FaLightbulb className="text-[#0E7C90]" size={14} />
                    <h4 className="ch-display text-sm font-medium text-[#16232E]">Transillumination</h4>
                  </div>
                  <p className="ch-body text-xs text-[#5B6B76] leading-relaxed">
                    Shining a light through the swollen scrotum. If it glows through, that indicates clear fluid.
                  </p>
                </div>
                <div className="bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FaClipboardCheck className="text-[#0E7C90]" size={14} />
                    <h4 className="ch-display text-sm font-medium text-[#16232E]">Physical Exam</h4>
                  </div>
                  <p className="ch-body text-xs text-[#5B6B76] leading-relaxed">
                    A non-tender, swollen scrotum. The testicle itself may be hard to feel due to the fluid.
                  </p>
                </div>
                <div className="bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10 md:col-span-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FaHeartbeat className="text-[#0E7C90]" size={14} />
                    <h4 className="ch-display text-sm font-medium text-[#16232E]">Ultrasound</h4>
                  </div>
                  <p className="ch-body text-xs text-[#5B6B76] leading-relaxed">
                    May be done to confirm the diagnosis, since a hydrocele can make testicular self-exams harder.
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Treatment</SectionHeading>
              <p className="ch-body text-[#5B6B76] text-sm leading-relaxed mb-5">
                Hydroceles are usually not dangerous. Ones linked to an inguinal hernia should be fixed with surgery
                as quickly as possible, and hydroceles that don't resolve on their own after a few months may also
                need surgery.
              </p>

              <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-5">
                <h3 className="ch-display text-base font-semibold text-[#16232E] mb-2">Herniotomy</h3>
                <p className="ch-body text-sm text-[#3E4C56] leading-relaxed">
                  A surgical procedure that corrects both a congenital hydrocele and a hernia by closing the open
                  connection into the abdominal cavity.
                </p>
              </div>
            </div>

            {/* Complications */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Potential Complications</SectionHeading>
              <ul className="space-y-2.5">
                {[
                  'Slow loss of testicular size and quality',
                  'Strangulation, if a related hernia is left untreated',
                  'Strangulation is an emergency surgical situation',
                ].map((complication, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 ch-body text-[#3E4C56] text-sm bg-[#FDF2ED] rounded-lg px-3 py-2.5"
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
                <h3 className="ch-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaStethoscope className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ch-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Newborns affected</dt>
                      <dd className="ch-body text-sm text-[#16232E] mt-0.5">~10%</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ch-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Self-resolution</dt>
                      <dd className="ch-body text-sm text-[#16232E] mt-0.5">Usually 6–12 months</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ch-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Affected sides</dt>
                      <dd className="ch-body text-sm text-[#16232E] mt-0.5">One or both</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaInfoCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ch-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Typical pain level</dt>
                      <dd className="ch-body text-sm text-[#16232E] mt-0.5">Usually painless</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* When to see a doctor */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaUserMd className="text-[#7FE0F0]" />
                  <h3 className="ch-display text-base font-semibold text-white">When to See a Doctor</h3>
                </div>
                <p className="ch-body text-sm text-white/75 leading-relaxed">
                  Seek urgent care for sudden swelling, pain, redness, or vomiting — these can signal a strangulated
                  hernia, which needs emergency surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongenitalHernia;