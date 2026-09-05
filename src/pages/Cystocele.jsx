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
  FaBaby,
  FaWeight,
  FaCut,
  FaBandAid,
} from 'react-icons/fa';

const Cystocele = () => {
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
            src="/images/treatments/cystocele/cystocele-banner.jpg"
            alt="Cystocele"
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
                  <span className="text-[#7FE0F0]">Cystocele</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding fallen bladder & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Cystocele</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                A cystocele occurs when the wall between a woman's bladder and her vagina weakens and allows the bladder to droop into the vagina. This condition may cause discomfort and problems with emptying the bladder. A bladder that has dropped from its normal position may cause two kinds of problems — unwanted urine leakage and incomplete emptying of the bladder. In some women, a fallen bladder stretches the opening into the urethra, causing urine leakage when the woman coughs, sneezes, laughs, or moves in any way that puts pressure on the bladder.
              </p>
            </div>

            {/* Grades */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Grades of Cystocele
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20 text-center">
                  <span className="font-display text-3xl font-bold text-[#5DA9B3]">1</span>
                  <h3 className="p-display text-base font-semibold text-[#16232E] mt-1">Grade 1 (Mild)</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Bladder droops only a short way into the vagina.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20 text-center">
                  <span className="font-display text-3xl font-bold text-[#F77F00]">2</span>
                  <h3 className="p-display text-base font-semibold text-[#16232E] mt-1">Grade 2 (Moderate)</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Bladder sinks far enough to reach the opening of the vagina.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#D62828]/20 text-center">
                  <span className="font-display text-3xl font-bold text-[#D62828]">3</span>
                  <h3 className="p-display text-base font-semibold text-[#16232E] mt-1">Grade 3 (Advanced)</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Bladder bulges out through the opening of the vagina.
                  </p>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                What Causes a Cystocele?
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Childbirth:</strong> Muscle straining while giving birth.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Straining:</strong> Heavy lifting or repeated straining during bowel movements.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Menopause:</strong> The hormone estrogen helps keep muscles strong. When women go through menopause, muscles around the vagina and bladder may grow weak.</span>
                </li>
              </ul>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#5DA9B3]" size={16} />
                How is a Cystocele Diagnosed?
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Physical examination:</strong> Grade 2 or 3 cystocele can be diagnosed from description of symptoms and physical examination of the vagina.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Voiding Cystourethrogram:</strong> X-rays of the bladder during urination to see the shape and any blockages.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Other tests may be needed to find or rule out problems in other parts of the urinary system.</span>
                </li>
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                How is a Cystocele Treated?
              </h2>
              
              <div className="space-y-4">
                {/* No Treatment */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaInfoCircle size={14} /> No Treatment (Mild)
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    If a cystocele is not bothersome, the doctor may only recommend avoiding heavy lifting or straining that could cause the cystocele to worsen.
                  </p>
                </div>

                {/* Pessary */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaBandAid size={14} /> Pessary (Moderately Bothersome)
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    A device placed in the vagina to hold the bladder in place. Come in a variety of shapes and sizes. Must be removed regularly to avoid infection or ulcers.
                  </p>
                </div>

                {/* Surgery */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaCut size={14} /> Surgery (Large Cystoceles)
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Surgeon makes an incision in the wall of the vagina</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Repairs the area to tighten the layers of tissue</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Creates more support for the bladder</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Hospital stay: several days</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Recovery: 4 to 6 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Definition</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Bladder droops into vagina</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Grades</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">1 (mild) to 3 (advanced)</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Pessary, Surgery</span>
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
                If you experience pelvic pressure, discomfort, or difficulty emptying bladder, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cystocele;