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
  FaSmoking,
  FaBrain,
  FaBolt,
  FaCut,
  FaBandAid,
  FaPills,
} from 'react-icons/fa';

const UrinaryIncontinence = () => {
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
            src="/images/treatments/urinary-incontinence/urinary-incontinence-banner.jpg"
            alt="Urinary Incontinence"
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
                  Urinary <span className="text-[#7FE0F0]">Incontinence</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding involuntary urine leakage & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Urinary Incontinence</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Urinary Incontinence is the involuntary leakage of urine where the person urinates even when she does not want to. The patient suffers from a weakened control over the urinary sphincter or even a total loss. This problem is quite common and affects a lot of people. It is much more common among women than men. The person cannot prevent urine from leaking out.
              </p>
            </div>

            {/* Types of Incontinence */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Classification of Urinary Incontinence
              </h2>
              
              <div className="space-y-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaTint size={14} /> Stress Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    One of the most common kinds, especially in multiparous mothers and menopausal women. 'Stress' relates to increased physical intra-abdominal pressure like heavy weight lifting, sneezing, coughing, laughing or climbing stairs. Urine leaks out due to loss of support to pelvic floor and weakness of the urinary sphincter.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaBolt size={14} /> Urge Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Second most common type — sudden and involuntary contraction of the bladder wall causes an urge to urinate which cannot be stopped. Causes include UTI, prostate enlargement, neurogenic bladder, overactive bladder, interstitial cystitis, small capacity bladder.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Mixed Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Symptoms of both stress and urge incontinence would be present.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaTint size={14} /> Overflow Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Common in men with prostate gland problems. The bladder is full and cannot hold any more urine — urine overflows and leaks as dribbling.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBrain size={14} /> Functional Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Person knows there is a need to urinate but cannot make it to the bathroom in time due to problems in mobility. Causes include dementia, poor dexterity, poor eyesight or mobility, confusion, anxiety, depression.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaExclamationTriangle size={14} /> Total Incontinence
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Person leaks urine continuously or has periodic uncontrollable leakage. Causes include congenital problems, a hole (fistula) in the bladder and vagina, injury to the spinal cord, or injury to the urinary sphincter.
                  </p>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Causes of Different Types of Urinary Incontinence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaTint size={14} /> Stress Incontinence
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Hysterectomy and other surgical procedures', 'Obesity', 'Age', 'Menopause', 'Pregnancy and childbirth'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaBolt size={14} /> Urge Incontinence
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Enlarged prostate', 'Neurological conditions (stroke, MS, Parkinson\'s)', 'Cystitis or inflammation of the bladder lining'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#F77F00] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaTint size={14} /> Overflow Incontinence
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Urinary stones', 'A tumour pressing against the bladder', 'Enlarged prostate gland', 'Constipation', 'Post surgeries (hernia, hip replacement, spinal)', 'Prolonged labor'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaExclamationTriangle size={14} /> Total Incontinence
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Spinal cord injury impairing nerve signals', 'Anatomical defect from birth', 'A fistula (tube/channel) between bladder and nearby area', 'Trauma or surgical damage to the sphincter'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#F77F00] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                  <FaInfoCircle size={14} /> Other Causes
                </h3>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {['Alcohol', 'Medications (diuretics, sedatives, sleeping tablets, muscle relaxants)', 'Urinary tract infections'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Risk Factors in Urinary Incontinence
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Smoking',
                  'Obesity',
                  'Old age',
                  'Kidney disease',
                  'Diabetes',
                  'Neurological problems',
                  'Spinal cord injury',
                  'Diseases in the prostate',
                ].map((risk, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Treatment Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaClock size={14} /> Bladder Training
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Double voiding', 'Delaying the event', 'Toilet timetable'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaSyringe size={14} /> Medications
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Various medications available for treating incontinence.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaProcedures size={14} /> Medical Devices
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {['Pessary', 'Urethral inserts', 'Botox', 'Radiofrequency therapy', 'Sacral nerve stimulator', 'Bulking agents'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#F77F00] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaCut size={14} /> Surgery
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Surgical options available for severe cases of incontinence.
                  </p>
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
                  <span className="p-body text-sm font-medium text-[#16232E]">Involuntary urine leakage</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">More common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Women</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Types</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">6 types</span>
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
                If you experience involuntary urine leakage affecting your daily life, consult a specialist for evaluation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UrinaryIncontinence;