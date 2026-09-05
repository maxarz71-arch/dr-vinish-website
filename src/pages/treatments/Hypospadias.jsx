import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaHospital,
  FaChild,
  FaHandHoldingHeart,
  FaInfoCircle,
  FaUserMd,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="h-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const Hypospadias = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .h-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .h-body { font-family: 'Inter', sans-serif; }
        .h-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/paediatric-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 h-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Paediatric Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/hypospadias/hypospadias-banner.jpg"
            alt="Hypospadias"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Hypospadias';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#E8763C] rounded-full px-4 py-1.5 shadow-lg">
            <span className="h-body text-xs font-semibold text-white uppercase tracking-wide flex items-center gap-1.5">
              <FaClock size={11} /> Repair: 6–9 months
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="h-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Paediatric Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="h-display text-3xl md:text-5xl font-semibold text-white">Hypospadias</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Description */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="h-body text-[#16232E] leading-relaxed">
                <strong>Hypospadias</strong> is a birth defect in boys where the urinary tract opening isn't at the
                tip of the penis. It can be associated with downward bending of the penis on erection, known as{' '}
                <strong>chordee</strong>.
              </p>

              {/* Timeline callout */}
              <div className="mt-5 flex gap-3 bg-[#FDF2ED] border border-[#E8763C]/25 rounded-xl p-4">
                <FaClock className="text-[#E8763C] mt-0.5 shrink-0" />
                <p className="h-body text-sm text-[#8A4A1F] leading-relaxed">
                  <strong>Plan ahead:</strong> surgical correction is the only treatment, and it's best done at{' '}
                  <strong>6–9 months</strong> of age — ideally before <strong>1½ years</strong>, once tissue is mature
                  enough for proper repair, and before toilet training begins.
                </p>
              </div>
            </div>

            {/* Causes & Symptoms */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <SectionHeading icon={FaInfoCircle}>Causes</SectionHeading>
                <div className="h-body text-[#5B6B76] text-sm leading-relaxed space-y-2">
                  <p>
                    Caused by a defect in the formation of the urethra, the tube that carries urine. Incomplete
                    formation leaves the opening on the underside of the penis instead of the tip.
                  </p>
                  <p>
                    Severity depends on how much of the urethra formed — the shorter it is, the more proximal the
                    opening sits.
                  </p>
                </div>
              </div>

              <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <SectionHeading icon={FaExclamationTriangle}>Symptoms</SectionHeading>
                <ul className="space-y-2">
                  {[
                    'Urinary opening not at the tip of the penis',
                    'Downward bending of the penis (chordee)',
                    'Abnormal, downward urine stream',
                    'Difficulty standing to urinate',
                  ].map((symptom, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 h-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2.5"
                    >
                      <FaCheckCircle className="text-[#E8763C] shrink-0" size={13} />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why treat */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaChild}>Why Treat Hypospadias?</SectionHeading>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaChild className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="h-body text-sm font-semibold text-[#16232E]">Standing urination</p>
                    <p className="h-body text-sm text-[#5B6B76] leading-relaxed">
                      Boys need a direct stream to urinate standing up; needing to sit can be a real social
                      disadvantage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaHandHoldingHeart className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="h-body text-sm font-semibold text-[#16232E]">Sexual function</p>
                    <p className="h-body text-sm text-[#5B6B76] leading-relaxed">
                      A straight penis matters for later sexual function, which is why early correction is important.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Treatment Options</SectionHeading>
              <p className="h-body text-[#5B6B76] text-sm leading-relaxed mb-5">
                Surgical correction is the only treatment for hypospadias. The ideal age for the operation is around{' '}
                1½ years, by which point tissue and skin are mature enough for proper suturing.
              </p>

              <div className="space-y-3">
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="h-display text-base font-semibold text-[#16232E] mb-1">Chordee Correction</h3>
                  <p className="h-body text-sm text-[#3E4C56] leading-relaxed">
                    Any bending of the penis is straightened out first.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="h-display text-base font-semibold text-[#16232E] mb-1">Urethroplasty</h3>
                  <p className="h-body text-sm text-[#3E4C56] leading-relaxed">
                    The urethra is extended to the tip of the penis — extra foreskin is sometimes used to construct
                    the new urethral tube.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="h-display text-base font-semibold text-[#16232E] mb-1">Post-Operative Care</h3>
                  <p className="h-body text-sm text-[#3E4C56] leading-relaxed">
                    A silastic stent diverts urine during healing. A plastic dressing is applied and can be removed at
                    home.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-3 bg-[#FDF2ED] p-4 rounded-xl border border-[#E8763C]/20">
                <FaInfoCircle className="text-[#E8763C] mt-0.5 shrink-0" size={14} />
                <p className="h-body text-xs text-[#8A4A1F] leading-relaxed">
                  <strong>Timing:</strong> if a second operation is needed (about 10% of cases), it's delayed by a
                  year — both can still be completed before toilet training.
                </p>
              </div>
            </div>

            {/* Complications */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Potential Complications</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Urethral fistula (abnormal opening)',
                  'Urethral stricture (narrowing)',
                  'Recurrent chordee (bending)',
                  'Cosmetic concerns',
                  'Need for a secondary surgery (~10%)',
                ].map((complication, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 h-body text-[#3E4C56] text-sm bg-[#FDF2ED] rounded-lg px-3 py-2.5"
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

              {/* Treatment window — leads sidebar */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-[#7FE0F0]" />
                  <h3 className="h-display text-base font-semibold text-white">Ideal Repair Window</h3>
                </div>
                <p className="h-display text-4xl font-semibold text-white mb-2">6–9 mo</p>
                <p className="h-body text-sm text-white/75 leading-relaxed">
                  Recommended surgical window, completed before 1½ years and before toilet training whenever
                  possible.
                </p>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="h-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaStethoscope className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="h-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Birth prevalence</dt>
                      <dd className="h-body text-sm text-[#16232E] mt-0.5">About 1 in 100–200 boys</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaUserMd className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="h-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Family history</dt>
                      <dd className="h-body text-sm text-[#16232E] mt-0.5">~20% chance</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="h-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Single-surgery success</dt>
                      <dd className="h-body text-sm text-[#16232E] mt-0.5">~90%</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Key points */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaInfoCircle className="text-[#0E7C90]" />
                  <h3 className="h-display text-base font-semibold text-[#16232E]">Key Points</h3>
                </div>
                <ul className="space-y-2 h-body text-sm text-[#5B6B76]">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Surgery is the only effective treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Early correction avoids social and functional issues
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Can be finished before toilet training
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

export default Hypospadias;