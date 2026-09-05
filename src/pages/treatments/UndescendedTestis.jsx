import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaHospital,
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
  FaInfoCircle,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="ut-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const UndescendedTestis = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ut-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ut-body { font-family: 'Inter', sans-serif; }
        .ut-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/paediatric-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 ut-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Paediatric Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/undescended-testis/undescended-testis-banner.jpg"
            alt="Undescended Testis"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Undescended+Testis';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#E8763C] rounded-full px-4 py-1.5 shadow-lg">
            <span className="ut-body text-xs font-semibold text-white uppercase tracking-wide flex items-center gap-1.5">
              <FaClock size={11} /> Treat before age 1
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="ut-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Paediatric Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="ut-display text-3xl md:text-5xl font-semibold text-white">Undescended Testis</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Description */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="ut-body text-[#16232E] leading-relaxed">
                <strong>The testicle</strong> produces both male hormone and sperm. Before a child is born, the
                testicle migrates down from high in the abdomen, passing through the abdominal wall and groin, to
                settle into its normal position in the scrotum.
              </p>

              {/* Timeline callout */}
              <div className="mt-5 flex gap-3 bg-[#FDF2ED] border border-[#E8763C]/25 rounded-xl p-4">
                <FaClock className="text-[#E8763C] mt-0.5 shrink-0" />
                <p className="ut-body text-sm text-[#8A4A1F] leading-relaxed">
                  <strong>Timing matters:</strong> about <strong>75%</strong> of undescended testicles come down on
                  their own within the first <strong>3 months</strong>. If it hasn't happened by then, treatment is
                  recommended <strong>before age 1</strong>, since damage to the sperm-producing cells can begin
                  around that age.
                </p>
              </div>
            </div>

            {/* When testicle is not in scrotum */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaInfoCircle}>When a Testicle Isn't in the Scrotum</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Atrophied before birth due to torsion or blockage',
                  'Incompletely descended, within the inguinal canal',
                  'Remains within the abdominal cavity',
                  'Retractile — descends during a warm bath or exam',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 ut-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2.5"
                  >
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why treat */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaShieldAlt}>Why Treat an Undescended Testicle?</SectionHeading>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaHeartbeat className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="ut-body text-sm font-semibold text-[#16232E]">Fertility</p>
                    <p className="ut-body text-sm text-[#5B6B76] leading-relaxed">
                      The scrotum keeps testicles cooler, which matters for sperm production. Moving it into place
                      early lowers the risk of fertility problems later.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaUserMd className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="ut-body text-sm font-semibold text-[#16232E]">Protection</p>
                    <p className="ut-body text-sm text-[#5B6B76] leading-relaxed">
                      A testicle in the scrotum is less prone to injury, alongside the cosmetic benefit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#FDF2ED] p-4 rounded-xl border border-[#E8763C]/15">
                  <FaExclamationTriangle className="text-[#E8763C] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="ut-body text-sm font-semibold text-[#16232E]">Cancer detection</p>
                    <p className="ut-body text-sm text-[#5B6B76] leading-relaxed">
                      Undescended testicles carry a higher cancer risk, and monthly self-exams are only possible once
                      the testicle is in the scrotum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Treatment Options</SectionHeading>
              <p className="ut-body text-[#5B6B76] text-sm leading-relaxed mb-5">
                We recommend treatment before one year of age — early damage to the germ cells that produce sperm can
                begin around this point.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Hormone therapy */}
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-5">
                  <h3 className="ut-display text-base font-semibold text-[#16232E] mb-3">Hormone Therapy</h3>
                  <div className="ut-body text-[#3E4C56] text-sm">
                    <p><strong>HCG injections</strong> — given several times a week over several weeks.</p>
                    <p className="text-xs text-red-600 font-medium mt-2">Success rate as low as 10%</p>
                  </div>
                </div>

                {/* Surgery */}
                <div className="bg-[#E8763C]/5 rounded-xl border border-[#E8763C]/20 p-5">
                  <h3 className="ut-display text-base font-semibold text-[#16232E] mb-3">Surgery (Orchiopexy)</h3>
                  <ul className="space-y-2.5 ut-body text-[#3E4C56] text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={12} />
                      <span><strong>Outpatient procedure</strong> — a small groin incision, with hernia repair if needed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={12} />
                      <span><strong>Laparoscopy</strong> — for testes that can't be felt, via a small incision below the belly button.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#E8763C] mt-0.5 shrink-0" size={12} />
                      <span><strong>Orchiectomy</strong> — removal of a very small, abnormal gonad, likely torsed before birth.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex gap-3 bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10">
                <FaShieldAlt className="text-[#0E7C90] mt-0.5 shrink-0" size={14} />
                <p className="ut-body text-xs text-[#5B6B76] leading-relaxed">
                  <strong className="text-[#16232E]">Note:</strong> if a boy is left with only one functioning
                  testis, we recommend anchoring it to reduce the risk of torsion.
                </p>
              </div>
            </div>

            {/* Complications */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaExclamationTriangle}>Potential Complications</SectionHeading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Fertility problems, if left untreated',
                  'Increased risk of testicular cancer',
                  'Hernia associated with undescended testis',
                  'Torsion risk, if not corrected',
                ].map((complication, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 ut-body text-[#3E4C56] text-sm bg-[#FDF2ED] rounded-lg px-3 py-2.5"
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

              {/* Treatment window — leads, since it's the single most actionable fact */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-[#7FE0F0]" />
                  <h3 className="ut-display text-base font-semibold text-white">Treatment Window</h3>
                </div>
                <p className="ut-display text-4xl font-semibold text-white mb-2">By age 1</p>
                <p className="ut-body text-sm text-white/75 leading-relaxed">
                  If the testicle hasn't descended by 3 months on its own, treatment is recommended before the first
                  birthday to protect fertility.
                </p>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="ut-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaStethoscope className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ut-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Boys at birth</dt>
                      <dd className="ut-body text-sm text-[#16232E] mt-0.5">~4% affected</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ut-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Self-resolution</dt>
                      <dd className="ut-body text-sm text-[#16232E] mt-0.5">~75% by 3 months</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaHospital className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ut-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Most effective fix</dt>
                      <dd className="ut-body text-sm text-[#16232E] mt-0.5">Orchiopexy</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* When to see a doctor */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaUserMd className="text-[#0E7C90]" />
                  <h3 className="ut-display text-base font-semibold text-[#16232E]">Key Points</h3>
                </div>
                <ul className="space-y-2 ut-body text-sm text-[#5B6B76]">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Surgery (orchiopexy) is the most effective treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Early treatment improves fertility outcomes
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Makes future cancer self-checks possible
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

export default UndescendedTestis;