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
  FaSearch,
  FaBookMedical,
} from 'react-icons/fa';

const ChronicOrchialgia = () => {
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
            src="/images/treatments/chronic-orchialgia/chronic-orchialgia-banner.jpg"
            alt="Chronic Orchialgia"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Andrology &middot; Surgical Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Chronic <span className="text-[#7FE0F0]">Orchialgia</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding chronic testicular pain & surgical treatment
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Microsurgical Denervation of the Spermatic Cord</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Cord stripping is also known as the Microsurgical denervation of the spermatic cord. It is a technique to manage Chronic Orchialgia — chronic testicular pain. You can say for men that this surgery is very important to change the life of those whose pain has no definite cause and symptoms.
              </p>
            </div>

            {/* Procedure */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                The Surgical Procedure
              </h2>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <FaClock className="text-[#5DA9B3] shrink-0 mt-0.5" size={14} />
                  <span>Takes <strong>45 minutes</strong> to complete the surgery</span>
                </li>
                <li className="flex items-start gap-3 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <FaCut className="text-[#5DA9B3] shrink-0 mt-0.5" size={14} />
                  <span>Specialist makes a <strong>2-inch cut</strong> near the groin area to reach the spermatic cord</span>
                </li>
                <li className="flex items-start gap-3 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <FaMicroscope className="text-[#5DA9B3] shrink-0 mt-0.5" size={14} />
                  <span>Uses a <strong>microscope</strong> to separate the tiny nerves in the spermatic cord</span>
                </li>
                <li className="flex items-start gap-3 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <FaShieldAlt className="text-[#5DA9B3] shrink-0 mt-0.5" size={14} />
                  <span><strong>Lymph gland</strong> and other arteries of the testicle remain untouched</span>
                </li>
              </ul>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Introduction
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Chronic orchialgia or testicular pain is currently and historically a challenging condition to treat. It is a diagnostic and remedial challenge for surgeons. Conventional medicine and treatment have worked as the first line of therapy. For those who leave conventional therapy, medical mediation may be needed. We aim to give a review of currently possible healing options and novel medical therapy options.
              </p>
            </div>

            {/* Methods */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaSearch className="text-[#5DA9B3]" size={16} />
                Methods
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                A survey and synopsis of the current research were conducted using PubMed. Report considering therapy options for chronic orchialgia were classified. The following search words were used to identify research that was related to this survey:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Chronic orchialgia',
                  'Scrotal content pain',
                  'Testicular pain',
                  'MDSC (Microsurgical denervation of the spermatic cord)',
                ].map((term, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {term}
                  </li>
                ))}
              </ul>
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Procedure</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">MDSC</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Surgery time</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">45 minutes</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Incision</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">2 inches near groin</span>
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
                If you experience chronic testicular pain with no definite cause, consult a specialist for evaluation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronicOrchialgia;