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
  FaMoon,
  FaBed,
  FaPills,
} from 'react-icons/fa';

const Nocturia = () => {
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
            src="/images/treatments/nocturia/nocturia-banner.jpg"
            alt="Nocturia"
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
                  <span className="text-[#7FE0F0]">Nocturia</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding excessive nighttime urination & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Nocturia</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Nocturia (nocturnal enuresis) is a medical term for excessive urination especially at night and during sleep. This is a medical condition and a symptom of any of the different types of urinary disorder. This is a secondary bedwetting syndrome marked by involuntary loss of urine and is common in the elderly.
              </p>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                Bedwetting is prevalent in children from age 0 to about 4 years old. A child's bladder reaches maturity by the time the toddler is potty trained, usually at age 5. Although every child's bladder matures at different age, children generally stop bedwetting by the time they reach 6 years old. When a child suddenly starts bedwetting again after a long period of being dry then parents should start to worry.
              </p>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Nocturia Symptoms
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Waking up more than once at night to pass urine — disrupts normal sleep cycle</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Body produces a large amount of urine while sleeping — can be more than 2 litres per day</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Unable to hold high volume of urine at night — forced to wake up and urinate</span>
                </li>
              </ul>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                What Causes Nocturia?
              </h2>
              
              <div className="space-y-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBed size={14} /> Bed-Wetting Issues
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Children and individuals who have suffered from bed-wetting problems in the past can suffer from this disorder. The fear of accidentally bed wetting can also make a person hypersensitive to even minor urinating sensations.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaTint size={14} /> Drinking Excess Liquids
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Drinking a high amount of liquids before going to bed can result in high amount of urine in bladder. Limiting liquid intake before bedtime and avoiding caffeine or alcohol can prevent this problem.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaPills size={14} /> Medicinal Side Effects
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Diuretics — drugs that increase urine flow</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Drugs for bipolar disorders and cardiac conditions</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>Demeclocycline, Cardiac Glycosides, Phenytoin, Lithium, Propoxyphene, Methoxyflurane</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span>High intake of Vitamin D</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBaby size={14} /> Pregnancy
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Common due to frequent urination in both early and late pregnancy. Usually goes away with resolution of pregnancy. Gestational diabetes may also lead to this disorder.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaHeartbeat size={14} /> Disorders
                  </h3>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {[
                      'Prostate Gland enlargement',
                      'Kidney infection',
                      'Bladder infection',
                      'Congestive heart failure',
                      'Prostate cancer',
                      'Kidney failure',
                      'Diabetes',
                      'Edema of lower limbs',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-body text-sm text-[#5B6B76]">
                        <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#D62828]/20">
                  <h3 className="p-display text-base font-semibold text-[#D62828] flex items-center gap-2">
                    <FaMoon size={14} /> Sleep Apnea
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    A serious cause of this disease. Arises when there is a cessation in breathing for a few seconds for several times during a night. May lead to light sleep and prompt a person to get up and release urine.
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Nocturia Treatment
              </h2>
              
              <div className="space-y-4">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaPills size={14} /> Medications
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Diuretics (Furosemide, Bumetanide)</strong> — help in influencing urine production</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Imipramine</strong> — used to reduce production of urine</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Desmopressin (DDAVP)</strong> — influences kidneys in producing lesser amount of urine</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                      <span><strong>Anticholinergic drugs</strong> — reduce symptoms arising due to an overactive bladder</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaShieldAlt size={14} /> Lifestyle Modifications
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Reducing intake of fluids, caffeinated beverages, coffee and alcohol in the evening</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Limit intake of diuretics to specific times — mid-afternoon and six hours before bedtime</span>
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
                  <span className="p-body text-sm font-medium text-[#16232E]">Excessive nighttime urination</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Elderly, children</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Medications, lifestyle changes</span>
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
                If you frequently wake up at night to urinate, experience excessive nighttime urine production, or have sleep disruption, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Nocturia;