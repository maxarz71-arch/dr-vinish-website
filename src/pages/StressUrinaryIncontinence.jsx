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
  FaCut,
  FaBandAid,
  FaPills,
} from 'react-icons/fa';

const StressUrinaryIncontinence = () => {
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
            src="/images/treatments/stress-urinary-incontinence/stress-urinary-incontinence-banner.jpg"
            alt="Stress Urinary Incontinence"
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
                  Stress <span className="text-[#7FE0F0]">Urinary Incontinence</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding involuntary urine leakage during physical activity
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Stress Urinary Incontinence</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Stress incontinence is losing urine without meaning to during physical activity, such as coughing, sneezing, laughing, or exercise.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Causes
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Stress incontinence occurs because of poor function in the muscles that support the bladder or control the release of urine. The bladder expands as it fills with urine, but valve-like muscles at each end of the urethra normally stay closed, preventing urine release until you reach a bathroom. When the muscles supporting the bladder are weak, pressure can trigger urine release before you're ready.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Childbirth:</strong> Poor function of pelvic floor muscles or sphincter may occur because of tissue or nerve damage incurred during delivery.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Prostate surgery:</strong> In men, surgical removal of the prostate gland (prostatectomy) results in less urethral support.</span>
                </li>
              </ul>
            </div>

            {/* Contributing Factors */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Contributing Factors
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Urinary tract infection',
                  'Illnesses that cause chronic coughing or sneezing',
                  'Obesity',
                  'Smoking, which can cause frequent coughing',
                  'Diabetes',
                  'Excess consumption of caffeine or alcohol',
                  'Medications that cause rapid increase in urine production',
                  'Sports, such as tennis or running',
                ].map((factor, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Symptoms
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The main symptom of stress incontinence is losing urine without your control. It may occur when you:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Cough', 'Exercise', 'Have sexual intercourse', 'Sneeze', 'Stand', 'Take part in physical activity'].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnosis */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#5DA9B3]" size={16} />
                Exams and Tests
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The health care provider will perform a physical exam, including:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Genital exam in men',
                  'Pelvic exam in women',
                  'Rectal exam',
                  'Electromyogram (EMG) — rarely done',
                  'Pad test',
                  'Pelvic or abdominal ultrasound',
                  'Post-void residual (PVR)',
                  'Urodynamic studies',
                  'Cystoscopy',
                  'Urinalysis or urine culture',
                  'Urinary stress test',
                  'X-rays with contrast dye',
                ].map((test, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {test}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Treatment
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Treatment depends on how severe your symptoms are and how much they affect your everyday life.
              </p>
              
              <div className="space-y-4 mt-4">
                {/* Behavior Changes */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaInfoCircle size={14} /> Behavior Changes
                  </h3>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {[
                      'Drinking less fluid',
                      'Urinating more often',
                      'Avoiding jumping or running',
                      'Making bowel movements regular',
                      'Quitting smoking',
                      'Avoiding alcohol and caffeine',
                      'Losing weight',
                      'Avoiding bladder irritants',
                      'Keeping blood sugar under control',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pelvic Floor Muscle Training */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBandAid size={14} /> Pelvic Floor Muscle Training
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Kegel exercises</strong> — keep urethral sphincter strong</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Biofeedback and electrical stimulation</strong> — for those who have trouble doing exercises</span>
                    </li>
                  </ul>
                </div>

                {/* Medications */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaPills size={14} /> Medications
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {[
                      'Anticholinergic drugs (oxybutynin, tolterodine, Enablex, Sanctura, Vesicare, Oxytrol)',
                      'Antimuscarinic drugs',
                      'Alpha-adrenergic agonist drugs',
                      'Imipramine (tricyclic antidepressant)',
                      'Estrogen therapy (for postmenopausal women)',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Absorbent Pads & Catheters */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBandAid size={14} /> Absorbent Pads & Urinary Catheters
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Incontinence products such as absorbent pads, drip collectors, external catheters, and incontinence pads can be enormously helpful.
                  </p>
                </div>

                {/* TOT & TVT */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaCut size={14} /> TOT & TVT Procedures
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>TOT (Transobturator Tape):</strong> Polypropylene tape passed through small incisions in the inner thigh — acts as a 'backboard' to support the urethra. Takes about 30 minutes.</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>TVT (Tension-Free Vaginal Tape):</strong> Traditional method — tape ends passed behind the pubic bone through abdomen. TVT-O (newer) passes tape sideways through inner thigh — less risk of bladder damage.</span>
                    </li>
                  </ul>
                </div>

                {/* Surgeries */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaCut size={14} /> Surgeries
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {[
                      'Anterior vaginal repair or paravaginal repair',
                      'Artificial urinary sphincter',
                      'Collagen injections',
                      'Male sling',
                      'Retropubic suspensions',
                      'Tension-free vaginal tape',
                      'Vaginal sling procedures',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                        <span>{item}</span>
                      </li>
                    ))}
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
                  <span className="p-body text-sm font-medium text-[#16232E]">Urine leakage during physical activity</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common triggers</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Coughing, sneezing, laughing</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Behavior changes, exercises, surgery</span>
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
                If you experience involuntary urine leakage during physical activity, consult a specialist for evaluation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StressUrinaryIncontinence;