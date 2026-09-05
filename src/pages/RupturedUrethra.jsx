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
  FaBandAid,
  FaBicycle,
  FaCarCrash,
  FaXRay,
} from 'react-icons/fa';

const RupturedUrethra = () => {
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
          box-shadow: 0 8px 24px -8px rgba(14, 124, 144, 0.12);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BACK BUTTON ===== */}
        <Link
          to="/reconstructive-urology"
          className="group inline-flex items-center gap-2 text-[#0E7C90] hover:text-[#08404D] transition-colors mb-6 p-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Reconstructive Urology
        </Link>

        {/* ===== HERO SECTION ===== */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-10 animate-fade-in-up">
          <img
            src="/images/treatments/ruptured-urethra/ruptured-urethra-banner.jpg"
            alt="Ruptured Urethra"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Reconstructive Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Ruptured <span className="text-[#7FE0F0]">Urethra</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Urethral trauma — Causes, Symptoms & Diagnosis
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
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Ruptured Urethra</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Fortunately urethral injuries are uncommon. But injuries can occur as a result of straddle-type falls or pelvic fractures.
              </p>
            </div>

            {/* Normal Conditions */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#0E7C90]" size={16} />
                What Happens Under Normal Conditions?
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The urethra is a tube through which urine (and in males, semen) leaves the body. In males, the urethra begins at the bladder and then extends through the prostate gland, perineum and the entire length of the penis. The anterior urethra goes from the tip of the penis through the perineum, the space between the scrotum and the anus. The posterior urethra is deep within the body. In females, the urethra is much shorter and extends from the bladder to just in front of the vagina outside the body. Normally, urine flow can be controlled, the stream is strong, the urine is clear and there is never any visible blood in the urine.
              </p>
            </div>

            {/* What is Urethral Trauma */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                What is Urethral Trauma?
              </h2>
              
              <div className="space-y-4">
                {/* Anterior */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaBicycle size={14} /> Anterior Urethral Trauma
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Usually the result of straddle-like injuries. This trauma occurs when a person sustains injury from a sharp blow to the perineum since the urethra is located near the skin in this area. This injury can occur, for example, when a child forcefully straddles a bicycle seat or bar or a fence. Trauma to the anterior urethra can lead to scarring called a urethral stricture, scarring that can slow or block the flow of urine from the penis.
                  </p>
                </div>

                {/* Posterior */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaCarCrash size={14} /> Posterior Urethral Trauma
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Almost always occurs as a result of severe injuries such as pelvic fractures following automobile accidents or falls from significant heights. In males, posterior urethral trauma may result in the urethra being completely torn just below the prostate. These severe injuries can also lead to scar tissue that slows or blocks the normal flow of urine. For females, urethral injuries are rare and almost always related to pelvic fractures or cuts, tears, or direct trauma to the vaginal area.
                  </p>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#D62828]" size={16} />
                Symptoms of Urethral Trauma
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Leakage of urine into surrounding tissues',
                  'Swelling, inflammation, infection',
                  'Abdominal pain',
                  'Inability to urinate',
                  'Retention of urine in bladder',
                  'Blood in the urine (hematuria)',
                  'Blood at the tip of the penis (in males)',
                  'Swelling and bruising of penis, scrotum, perineum',
                  'Pain in the affected area',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#D62828] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#0E7C90]" size={16} />
                How is Urethral Trauma Diagnosed?
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Individuals who have blood at the end of the penis or in the urine or who cannot urinate following an injury to the urethral area should see a physician immediately so that an appropriate evaluation (including X-rays) can be performed.
              </p>
              <div className="mt-4 bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                  <FaXRay size={14} /> Urethrography (X-Ray)
                </h3>
                <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                  In any patient who suffers a pelvic fracture, an X-ray of the urethra is routinely performed because of the high incidence of urethral injury (about <strong>10%</strong>) associated with such injuries. This X-ray is performed by injecting x-ray contrast dye into the opening of the urethra. X-rays are taken to see if any of the dye leaks out of the urethra, which indicates an injury.
                </p>
              </div>
            </div>

          </div>

          {/* ---------- SIDEBAR ---------- */}
          <div className="lg:col-span-1 space-y-4">

            {/* Quick facts */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="p-display text-lg font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaClock className="text-[#0E7C90]" size={14} />
                At a Glance
              </h3>
              <dl className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common cause</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Straddle injuries, pelvic fractures</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Key symptom (Males)</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Blood at tip of penis</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Pelvic fracture risk</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">~10% urethral injury</span>
                </div>
              </dl>
            </div>

            {/* Services */}
            <div className="bg-[#0B2E38] rounded-2xl shadow-sm p-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="p-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#7FE0F0]" size={14} />
                Our Services
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCheckCircle className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">Complete Guide To Prevent Disease</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaCalendarCheck className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">Online Appointment</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 p-2 rounded-lg hover:bg-white/5 transition">
                  <FaPhoneAlt className="text-[#7FE0F0] shrink-0" size={12} />
                  <span className="p-body text-sm">24 Hours Services</span>
                </div>
              </div>
            </div>

            {/* When to see a doctor */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <FaUserMd className="text-[#0E7C90]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                Get it checked immediately if you experience blood at the tip of penis, blood in urine, or inability to urinate following an injury.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RupturedUrethra;