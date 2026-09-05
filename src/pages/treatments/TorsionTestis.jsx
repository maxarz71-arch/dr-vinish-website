import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaHospital,
  FaAmbulance,
  FaUserMd,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="tt-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const TorsionTestis = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .tt-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .tt-body { font-family: 'Inter', sans-serif; }
        .tt-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }

        @keyframes pulse-urgent { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }
        .pulse-dot { animation: pulse-urgent 1.6s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/paediatric-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 tt-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Paediatric Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/torsion-testis/torsion-testis-banner.jpg"
            alt="Torsion Testis"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Torsion+Testis';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 bg-red-600 rounded-full pl-2.5 pr-4 py-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white pulse-dot" />
            <span className="tt-body text-xs font-semibold text-white uppercase tracking-wide">Surgical Emergency</span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="tt-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Paediatric Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="tt-display text-3xl md:text-5xl font-semibold text-white">Torsion Testis</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Description */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="tt-body text-[#16232E] leading-relaxed">
                <strong>Testicular torsion</strong> is a surgical emergency that can result in loss of the affected
                testicle if not treated promptly. It's a painful condition caused by the spermatic cord twisting on
                itself, cutting off blood flow to the testicle — tissue without blood flow cannot survive. Torsion is
                the most common cause of testicle loss in adolescent males.
              </p>

              {/* Urgency callout */}
              <div className="mt-5 flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <FaExclamationTriangle className="text-red-600 mt-0.5 shrink-0" />
                <p className="tt-body text-sm text-red-700 leading-relaxed">
                  <strong>Act immediately:</strong> the testicle is usually only salvageable if treated within{' '}
                  <strong>4–6 hours</strong> of symptoms starting. Sudden, severe testicular pain needs emergency care
                  right away — don't wait to see if it passes.
                </p>
              </div>
            </div>

            {/* Causes */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaStethoscope}>Causes</SectionHeading>
              <div className="tt-body text-[#5B6B76] text-sm leading-relaxed space-y-3">
                <p>
                  Most cases stem from the <strong className="text-[#16232E]">bell clapper deformity</strong>, an
                  anatomical variation present in around <strong>12% of males</strong> that lets the spermatic cord
                  twist more easily, compromising blood flow to the testicle.
                </p>
                <p>
                  It can happen spontaneously or after trauma, and there's no way to detect the deformity in advance.
                  In about <strong>40%</strong> of men who have it, the deformity is present on both sides.
                </p>
              </div>
            </div>

            {/* Symptoms */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Symptoms</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Excruciating one-sided testicular pain',
                  'Sudden swelling of the scrotum',
                  'Elevated testicle',
                  'Nausea and vomiting',
                  'Abdominal pain',
                  'History of previous testicular pain',
                  'Fever may accompany it',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 tt-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2.5"
                  >
                    <FaCheckCircle className="text-[#E8763C] shrink-0" size={13} />
                    {symptom}
                  </li>
                ))}
              </ul>
              <p className="tt-body text-xs text-[#8A97A0] mt-3">
                Most common between ages 12–18, but it can occur at any age, including in newborns.
              </p>
            </div>

            {/* Treatment */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Treatment</SectionHeading>
              <p className="tt-body text-[#5B6B76] text-sm leading-relaxed mb-5">
                Surgery is the only real treatment for testicular torsion. On rare occasions a physician can manually
                untwist the testicle, but this isn't common practice — testicular pain should always be evaluated
                immediately rather than waiting it out.
              </p>

              <div className="space-y-3">
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="tt-display text-base font-semibold text-[#16232E] mb-1">Detorsion (Untwisting)</h3>
                  <p className="tt-body text-sm text-[#3E4C56] leading-relaxed">
                    If the child reaches surgery within 4–6 hours of onset, the cord is derotated to restore
                    circulation and the testis may be salvaged.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="tt-display text-base font-semibold text-[#16232E] mb-1">Orchiopexy</h3>
                  <p className="tt-body text-sm text-[#3E4C56] leading-relaxed">
                    If detorsion succeeds, the testicle is sutured within the scrotum to prevent future twisting. The
                    other testicle is usually fixed too, to prevent bilateral torsion.
                  </p>
                </div>
                <div className="bg-[#E8763C]/5 rounded-xl border border-[#E8763C]/20 p-4">
                  <h3 className="tt-display text-base font-semibold text-[#16232E] mb-1">Orchiectomy</h3>
                  <p className="tt-body text-sm text-[#3E4C56] leading-relaxed">
                    If the testicle can't be salvaged, it's removed.
                  </p>
                </div>
              </div>
            </div>

            {/* Complications */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Potential Complications</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Loss of the affected testicle',
                  'Infertility, if both testicles are affected',
                  'Testicular atrophy',
                  'Chronic pain',
                ].map((complication, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 tt-body text-[#3E4C56] text-sm bg-[#FDF2ED] rounded-lg px-3 py-2.5"
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

              {/* Golden window — leads the sidebar since it's the single most important fact */}
              <div className="bg-red-600 rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaAmbulance className="text-white" />
                  <h3 className="tt-display text-base font-semibold text-white">Golden Window</h3>
                </div>
                <p className="tt-display text-4xl font-semibold text-white mb-2">4–6 hrs</p>
                <p className="tt-body text-sm text-white/85 leading-relaxed">
                  From symptom onset to the best chance of saving the testicle. Every hour of delay lowers the odds —
                  go to emergency care immediately, don't wait it out at home.
                </p>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="tt-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="tt-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common age group</dt>
                      <dd className="tt-body text-sm text-[#16232E] mt-0.5">12–18 years</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaStethoscope className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="tt-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Bell clapper deformity</dt>
                      <dd className="tt-body text-sm text-[#16232E] mt-0.5">~12% of males</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaExclamationTriangle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="tt-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Bilateral cases</dt>
                      <dd className="tt-body text-sm text-[#16232E] mt-0.5">~40% of those affected</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* When to see a doctor */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaUserMd className="text-[#7FE0F0]" />
                  <h3 className="tt-display text-base font-semibold text-white">Remember</h3>
                </div>
                <p className="tt-body text-sm text-white/75 leading-relaxed">
                  Any adolescent male with sudden, severe testicular pain should get emergency medical attention
                  immediately — this is not a "wait and see" condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorsionTestis;