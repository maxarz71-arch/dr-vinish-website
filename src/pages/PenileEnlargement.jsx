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
  FaHeartbeat,
  FaCut,
  FaSyringe,
  FaWeight,
  FaRuler,
} from 'react-icons/fa';

const PenileEnlargement = () => {
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
          box-shadow: 0 8px 24px -8px rgba(93, 169, 179, 0.12);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 p-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Home
        </Link>

        {/* ===== HERO SECTION ===== */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10 animate-fade-in-up">
          <img
            src="/images/treatments/penile-enlargement/penile-enlargement-banner.jpg"
            alt="Penile Enlargement"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Andrology &middot; Procedure Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Penile <span className="text-[#7FE0F0]">Enlargement</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Surgical solutions for penile size enhancement
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
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">What is Penile Enlargement?</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Men with small penises are often under stress and anxiety. They lack self-confidence and feel that they cannot satisfy their partner. The solution to this problem is Penile Enlargement Surgery. You don't have to worry about the size of your penis anymore as Penile Enlargement Surgery in India is available across all the states.
              </p>
            </div>

            {/* Procedure Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Penile Enlargement Procedure
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Having a small penis not only breeds insecurity but also affects the psychological condition of the individual. In extreme cases, it also leads to suicide. Ideally, apart from people with small penises, even those with painful erections or penile tissue damage can undergo penile enlargement surgery. The demand for surgical procedures is low and is limited to men with birth defects or injury.
              </p>
            </div>

            {/* Surgical Procedures */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Surgical Procedures for Penis Enlargement
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                There are various surgical procedures for penis enlargement. However, the following are the most common and cost-effective procedures.
              </p>
              
              <div className="mt-4 space-y-4">
                {/* Penile Lengthening */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaRuler size={14} /> Penile Lengthening
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Penis-lengthening surgery extends the size of the penis by <strong>25%</strong> of its length when at rest. In some cases, it can be extended up to <strong>4 cm</strong>. The surgery increases the length by severing the suspensory ligament and attaching the penis to the pubic bone. The abdomen skin is moved to the penile shaft. The patient needs to be in good health to undergo this procedure.
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      Takes about <strong>2 hours</strong> to perform
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      Pain remains for <strong>2-3 weeks</strong> after surgery
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      No masturbation for <strong>6 weeks</strong> after surgery
                    </li>
                  </ul>
                </div>

                {/* Penile Girth Enlargement */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaWeight size={14} /> Penile Girth Enlargement
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Penile girth enlargement is done for men who have thin penises. It increases the diameter of the penis by upto <strong>50%</strong> of its normal size.
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <strong>Liposuction</strong> is used to extract fat from areas like abdomen, waistline, and pubic area
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      Fat is purified and injected around the penis shaft
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      Pain during erection and swelling for about a week
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            {/* Quick facts */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#5DA9B3]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Lengthening</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Up to 25% increase</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Girth enlargement</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Up to 50% increase</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Surgery time</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">~2 hours</span>
                </div>
              </dl>
            </div>

            {/* Services */}
            <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="p-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#F77F00]" size={14} />
                Our Services
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCheckCircle className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">Complete Guide To Prevent Disease</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCalendarCheck className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">Online Appointment</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaPhoneAlt className="text-[#F77F00] shrink-0" size={12} />
                  <span className="p-body text-sm">24 Hours Services</span>
                </div>
              </div>
            </div>

            {/* When to see a doctor */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#5DA9B3]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                If you are concerned about penile size, experiencing distress, or have birth defects/injury, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PenileEnlargement;