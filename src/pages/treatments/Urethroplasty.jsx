import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaClock,
  FaHospital,
  FaInfoCircle,
  FaCheckCircle,
  FaSmile,
  FaChartLine,
} from 'react-icons/fa';

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="ur-display text-xl font-medium text-[#16232E] mb-4 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-[#E8763C]/10 text-[#E8763C] flex items-center justify-center">
      <Icon size={14} />
    </span>
    {children}
  </h2>
);

const Urethroplasty = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ur-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ur-body { font-family: 'Inter', sans-serif; }
        .ur-eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.08em; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 24px -8px rgba(14,124,144,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/reconstructive-urology"
          className="inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 ur-body text-sm font-medium"
        >
          <FaArrowLeft size={13} /> Back to Reconstructive Urology
        </Link>

        {/* ===== HERO ===== */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
          <img
            src="/images/treatments/urethroplasty/urethroplasty-banner.jpg"
            alt="Urethroplasty Surgery"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400/0E7C90/FFFFFF?text=Urethroplasty+Surgery';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38]/90 via-[#0B2E38]/25 to-transparent" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <span className="ur-body text-xs font-semibold text-white uppercase tracking-wide flex items-center gap-1.5">
              <FaChartLine size={11} /> 95%+ success rate
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="ur-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] mb-2">
              Reconstructive Urology &middot; Procedure Guide
            </span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-lg" />
              </div>
              <h1 className="ur-display text-3xl md:text-5xl font-semibold text-white">Urethroplasty Surgery</h1>
            </div>
          </div>
        </div>

        {/* ===== LAYOUT: MAIN + SIDEBAR ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ---------- MAIN COLUMN ---------- */}
          <div className="lg:col-span-2 space-y-5">

            {/* Overview */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <p className="ur-body text-[#16232E] leading-relaxed">
                <strong>Urethroplasty</strong> is the open reconstruction of urethral stricture disease. It involves
                removing the narrowed segment and re-joining the two normal ends — a technique called{' '}
                <strong>excision and primary anastomosis</strong> — or reconstructing the urethra with grafted tissue
                when the stricture is longer.
              </p>

              {/* Outcome callout */}
              <div className="mt-5 flex gap-3 bg-[#EAF9F1] border border-[#2F9E68]/25 rounded-xl p-4">
                <FaCheckCircle className="text-[#2F9E68] mt-0.5 shrink-0" />
                <p className="ur-body text-sm text-[#1B5E3D] leading-relaxed">
                  <strong>What to expect:</strong> most patients describe a "night and day" change in their urine
                  stream after healing — often compared to going from a trickle to a fire hose. Success rates run{' '}
                  <strong>95%+</strong> across approaches.
                </p>
              </div>
            </div>

            {/* Surgical Approaches */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaHospital}>Surgical Approaches</SectionHeading>
              <div className="space-y-3">
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="ur-display text-base font-semibold text-[#16232E] mb-1">Excision &amp; Primary Anastomosis</h3>
                  <p className="ur-body text-sm text-[#3E4C56] leading-relaxed">
                    Best suited to short strictures involving the bulbar or membranous urethra.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="ur-display text-base font-semibold text-[#16232E] mb-1">Tissue Augmentation</h3>
                  <p className="ur-body text-sm text-[#3E4C56] leading-relaxed">
                    Uses penile skin or a buccal mucosa graft to widen the narrowed segment.
                  </p>
                </div>
                <div className="bg-[#0E7C90]/5 rounded-xl border border-[#0E7C90]/15 p-4">
                  <h3 className="ur-display text-base font-semibold text-[#16232E] mb-1">Two-Stage Repair</h3>
                  <p className="ur-body text-sm text-[#3E4C56] leading-relaxed">
                    A buccal mucosa or split-thickness skin graft is placed first, then later rolled into a new
                    urethra.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3 bg-[#F4FAFB] p-4 rounded-xl border border-[#0E7C90]/10">
                <FaInfoCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={14} />
                <p className="ur-body text-xs text-[#5B6B76] leading-relaxed">
                  The right approach is individual — it depends on stricture length, location, and what tissue is
                  available to work with.
                </p>
              </div>
            </div>

            {/* Recovery */}
            <div className="card-hover bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8">
              <SectionHeading icon={FaClock}>Recovery After Surgery</SectionHeading>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaHospital className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="ur-body text-sm font-semibold text-[#16232E]">Hospital stay</p>
                    <p className="ur-body text-sm text-[#5B6B76] leading-relaxed">
                      Generally 5 days or less, with minimal pain or swelling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                  <FaSmile className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="ur-body text-sm font-semibold text-[#16232E]">Mouth soreness</p>
                    <p className="ur-body text-sm text-[#5B6B76] leading-relaxed">
                      If a buccal graft was used, soreness resolves gradually over the following weeks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#F4FAFB] p-4 rounded-xl">
                <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="ur-body text-sm font-semibold text-[#16232E]">Catheter &amp; follow-up</p>
                  <p className="ur-body text-sm text-[#5B6B76] leading-relaxed">
                    A catheter stays in for 2–3 weeks, and a VCUG (voiding study) confirms healing before it's
                    removed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* Success rate — leads the sidebar */}
              <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartLine className="text-[#7FE0F0]" />
                  <h3 className="ur-display text-base font-semibold text-white">Success Rate</h3>
                </div>
                <p className="ur-display text-4xl font-semibold text-white mb-2">95%+</p>
                <p className="ur-body text-sm text-white/75 leading-relaxed">
                  Urethroplasty is the gold standard for stricture repair, with the highest long-term success rate of
                  any treatment option.
                </p>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <h3 className="ur-display text-lg font-semibold text-[#16232E] mb-4">At a Glance</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <FaHospital className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ur-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Hospital stay</dt>
                      <dd className="ur-body text-sm text-[#16232E] mt-0.5">Up to 5 days</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaClock className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ur-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Catheter duration</dt>
                      <dd className="ur-body text-sm text-[#16232E] mt-0.5">2–3 weeks</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" />
                    <div>
                      <dt className="ur-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Graft option</dt>
                      <dd className="ur-body text-sm text-[#16232E] mt-0.5">Buccal mucosa</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Key points */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaInfoCircle className="text-[#0E7C90]" />
                  <h3 className="ur-display text-base font-semibold text-[#16232E]">Key Points</h3>
                </div>
                <ul className="space-y-2 ur-body text-sm text-[#5B6B76]">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Excision &amp; anastomosis suits short strictures
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Buccal mucosa grafts suit longer strictures
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#0E7C90] mt-0.5 shrink-0" size={12} />
                    Most patients see a dramatic flow improvement
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

export default Urethroplasty;