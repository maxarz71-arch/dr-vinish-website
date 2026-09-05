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
  FaBacteria,
  FaUserMd,
  FaSyringe,
} from 'react-icons/fa';

const Prostatitis = () => {
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
            src="/images/treatments/prostatitis/prostatitis-banner.jpg"
            alt="Prostatitis"
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
                  Prostatitis
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Inflammation of the prostate gland
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Prostatitis</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Prostatitis is a condition that involves inflammation of the prostate and sometimes the area around it. There are several types of prostatitis, each with a range of symptoms. Some men with the disease will experience severe pain and others will not be bothered; and the rest fall in between the two. However, the symptoms of the disease do have a significant impact on a man's quality of life.
              </p>
            </div>

            {/* Types */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-[#0E7C90]" size={16} />
                Types of Prostatitis
              </h2>
              
              <div className="space-y-3">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaBacteria size={14} /> Acute Bacterial Prostatitis
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    The least common type but most easily recognized. Usually caused by a sudden bacterial infection. A severe urinary tract infection associated often with fevers and chills. Can affect any age group but more common in middle age.
                  </p>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-2">
                    <strong>Symptoms:</strong> Painful urination, inability to empty the bladder, pain in lower back/abdomen/pelvis, fever and chills.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaBacteria size={14} /> Chronic Bacterial Prostatitis
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Similar to acute bacterial prostatitis but symptoms develop gradually and are less severe. Characterized by recurrent urinary tract infections. Can affect any age group but most common in young and middle-aged men. Patient would have undergone treatment multiple times.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Asymptomatic Inflammatory Prostatitis
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Men with prostatitis but have no symptoms, despite having inflammation of the prostate. Diagnosis is made when the patient is being evaluated for symptoms unrelated to prostatitis. Evidence of inflammation is found in biopsied tissue or specimens of urine, semen or prostatic fluid.
                  </p>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#0E7C90]" size={16} />
                What Causes Prostatitis?
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The direct causes of prostatitis are not fully known by the medical community. However, there are several accepted theories.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span><strong>Bacterial infections:</strong> Infections get into the prostate from the urethra by backward flow of infected urine into the prostate ducts. Bacterial prostatitis is not contagious and is not a sexually transmitted disease.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span><strong>Risk factors:</strong> Higher risk if the man has recently had a catheter or other instrument inserted into his urethra, an abnormality of his urinary tract or a recent bladder infection.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={12} />
                  <span><strong>Chronic pelvic pain syndrome:</strong> May be caused by organisms such as chlamydia, mycoplasma, ureaplasma or may be due to a chemical or immunologic reaction to an initial injury or previous infection.</span>
                </li>
              </ul>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Symptoms of Prostatitis
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The symptoms depend on the type of prostatitis infection. Often men do not notice any symptoms, while some experience symptoms similar to that of a urinary tract infection.
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Burning during urination',
                  'Urinary frequency (especially at night)',
                  'Perineal, testicular, bladder pain',
                  'Low back pain',
                  'Painful ejaculation',
                  'Fever and chills',
                  'Inability to empty bladder',
                  'Recurrent urinary tract infections',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={12} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#0E7C90]" size={16} />
                Treatment for Prostatitis
              </h2>
              
              <div className="space-y-3">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaSyringe size={14} /> Acute Bacterial Prostatitis
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Oral antibiotics (ciprofloxacin group of drugs)
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Home care: Plenty of fluids, pain medication, rest
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Hospitalization may be required for IV antibiotics
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaSyringe size={14} /> Chronic Bacterial Prostatitis
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Long-term antibiotics up to 8 weeks (ciprofloxacin, sulfa drugs, erythromycin)
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Can recur even with appropriate therapy
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Chronic Prostatitis (Without Infection)
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Chronic pain control, physical therapy, relaxation techniques
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Alpha-adrenergic blockers (Tamsulosin, Terazosin)
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Dutasteide to reduce congestion in prostate
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Asymptomatic Inflammatory Prostatitis
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      Treatment is not required
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      For infertility assessment: NSAIDs or antibiotics may be used
                    </li>
                  </ul>
                </div>
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Most common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Young &amp; middle-aged men</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Types</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">4 types</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Antibiotics, pain management</span>
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
                Get it checked if you experience burning during urination, urinary frequency, pelvic pain, fever, or recurrent urinary tract infections.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Prostatitis;