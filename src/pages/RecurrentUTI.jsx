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
  FaTint,
  FaHeartbeat,
  FaFlask,
  FaSyringe,
  FaFemale,
  FaBacteria,
  FaPrescription,
} from 'react-icons/fa';

const RecurrentUTI = () => {
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
            src="/images/treatments/recurrent-uti/recurrent-uti-banner.jpg"
            alt="Recurrent Urinary Tract Infection"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Female Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Recurrent <span className="text-[#7FE0F0]">UTI</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding recurrent urinary tract infections in women
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Recurrent Urinary Tract Infection</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                A urinary tract infection or UTI is a bacterial infection that occurs when bacteria invade the urinary tract system; the bacteria multiply throughout the urinary track system. While the majority of urinary tract infections or UTIs are not serious, they often cause severe symptoms such as pain and/or burning upon urination. The urinary tract system is the body's filtering system for removal of liquid waste. The urinary tract consists of the kidneys, bladder, ureters and urethra.
              </p>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                About half of all women will have at least one UTI in her lifetime, while many women suffer through several infections throughout their lifetime. Women are particularly susceptible to urinary tract infections or UTI. This is because women have a shorter urinary tract than men. The good news is that these infections are easily treated with antibiotics. However, some women seem prone to recurrent UTIs than others and for them it can be a frustrating battle.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaBacteria className="text-[#5DA9B3]" size={16} />
                What Causes Urinary Tract Infections?
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The most common cause of UTIs is bacteria from the bowel that live on the skin near the rectum or in the vagina, which can spread and enter the urinary tract through the urethra. Once these bacteria enter the urethra, they travel upward, causing infection in the bladder and sometimes other parts of the urinary tract.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Sexual intercourse:</strong> During sexual activity, bacteria in the vaginal area are sometimes massaged into the urethra. Women who change sexual partners or begin having sexual intercourse more frequently may experience UTIs more often.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Waiting too long to urinate:</strong> Can cause the bladder to stretch beyond its capacity, weakening the bladder muscle and increasing the risk of UTIs.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Other risk factors:</strong> Pregnancy, having UTIs as a child, menopause, or diabetes.</span>
                </li>
              </ul>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Symptoms of Urinary Tract Infections
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Symptoms of UTI or bladder infection are not easy to miss and include:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Strong urge to urinate that cannot be delayed',
                  'Sharp pain or burning sensation in the urethra when urine is released',
                  'Very little urine is released',
                  'Urine may be tinged with blood',
                  'Soreness in the lower abdomen, back, or sides',
                  'Frequent urination cycle repeats',
                  'Back pain, chills, fever, nausea, vomiting (if kidneys affected)',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                Proper diagnosis is vital since these symptoms also can be caused by other problems such as vaginal infections. Only your physician can make the distinction and make a correct diagnosis.
              </p>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#5DA9B3]" size={16} />
                How is a Diagnosis of UTI Made?
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>The number of bacteria and white blood cells in a urine sample is the basis for diagnosing UTIs.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Urine is examined under a microscope and cultured in a substance that promotes the growth of bacteria.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>A pelvic exam also may be necessary.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>At-home test for UTI is available over-the-counter (OTC) — about 90% reliable.</span>
                </li>
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaSyringe className="text-[#5DA9B3]" size={16} />
                What is the Treatment for Urinary Tract Infections?
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Antibiotics</strong> are the usual treatment for bladder infections and other UTIs.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>It's important that all antibiotics are taken as prescribed — do not stop early.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>An additional urine test may be ordered about a week after completing treatment.</span>
                </li>
              </ul>
            </div>

            {/* Prevention */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-[#5DA9B3]" size={16} />
                Tips for Preventing Urinary Tract Infections
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Practice good personal hygiene — wipe from front to back',
                  'Drink plenty of fluids (water) each day',
                  'Empty the bladder as soon as the urge occurs',
                  'Urinate before and after sex',
                  'Vitamin C makes urine acidic and reduces harmful bacteria',
                  'Cranberry juice may help reduce frequency of bladder infections',
                  'Change sexual positions that cause less friction on the urethra',
                  'Some physicians prescribe antibiotics immediately following sex for frequent UTIs',
                ].map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#5DA9B3]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Affects</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">50% of women</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common cause</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Bacteria from bowel</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Antibiotics</span>
                </div>
              </dl>
            </div>

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

            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#5DA9B3]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                If you experience frequent UTIs, seek medical evaluation for proper diagnosis and treatment.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurrentUTI;