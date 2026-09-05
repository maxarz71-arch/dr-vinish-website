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
  FaFlask,
  FaTint,
  FaMicroscope,
} from 'react-icons/fa';

const ProstateEnlargement = () => {
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
            src="/images/treatments/prostate/prostate-banner.jpg"
            alt="Prostate Enlargement"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-[#7FE0F0] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Reconstructive Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaProcedures className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Prostate <span className="text-[#7FE0F0]">Enlargement</span>
                </h1>
                <p className="p-body text-sm text-white/70 mt-1">
                  Benign Prostatic Hyperplasia (BPH)
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Prostate Enlargement</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The prostate is a small organ about the size of a walnut. It lies below the bladder (where urine is stored) and surrounds the urethra (the tube that carries urine from the bladder). The prostate makes a fluid that helps to nourish sperm as part of the semen (ejaculatory fluid). Prostate problems are common in men 50 and older. A urologist is a specialist in diseases of the urinary system, including diagnosing and treating problems of the prostate gland.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="bg-[#0E7C90]/5 text-[#0E7C90] px-3 py-1 rounded-full text-xs font-medium border border-[#0E7C90]/10">Men 50+</span>
                <span className="bg-[#F77F00]/5 text-[#F77F00] px-3 py-1 rounded-full text-xs font-medium border border-[#F77F00]/10">Starts in 30s</span>
                <span className="bg-[#48CAE4]/5 text-[#48CAE4] px-3 py-1 rounded-full text-xs font-medium border border-[#48CAE4]/10">Symptoms after 50</span>
              </div>
            </div>

            {/* What is BPH */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">What is Benign Prostatic Hyperplasia?</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Benign prostatic hyperplasia is nonmalignant (noncancerous) enlargement of the prostate gland, a common occurrence in older men. It is also known as benign prostatic hyperplasia and abbreviated as <strong>BPH</strong>. BPH generally begins in a man's 30s, evolves slowly, and most commonly only causes symptoms after 50.
              </p>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#D62828]" size={16} />
                Symptoms of BPH
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                In BPH, the prostate gland grows in size. It may compress the urethra which courses through the center of the prostate. This can impede the flow of urine from the bladder through the urethra to the outside. It can cause urine to back up in the bladder (retention) leading to the need to urinate frequently during the day and night.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Frequent urination (day and night)',
                  'Slow flow of urine',
                  'Urgent need to urinate',
                  'Difficulty starting urinary stream',
                  'Urinary tract infections',
                  'Complete blockage of urethra (emergency)',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-[#3E4C56] text-sm bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#E8763C] shrink-0" size={12} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Investigations */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#F77F00]" size={16} />
                Investigations for Prostate
              </h2>
              
              <div className="space-y-3">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaFlask size={14} /> USG of KUB
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    An ultrasound procedure called transrectal ultrasonography (TRUS) may be used to help the doctor see where to take the needle biopsy. Ultrasound is not effective as a diagnostic tool by itself because it cannot differentiate very well between benign inflammations and cancer.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaTint size={14} /> Uroflometry
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Uroflowmetry is a diagnostic test used to measure the flow of urine during urination. The speed of urine flow is measured electronically and the flow rate is calculated as milliliters of urine passed per second. The peak flow rate, also known as <strong>Qmax</strong>, is generally used as the basis for determining the severity of any blockage or obstruction.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaFlask size={14} /> Urine Analysis
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Urinalysis is a basic tool for urologists. This test is aimed at looking for white blood cells and bacteria, signifying infection. The urine may also be cultured to identify the bacteria that are responsible for the infection.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaTint size={14} /> PSA (Prostate Specific Antigen)
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    The PSA blood test measures the level of a protein called prostate-specific antigen. It is able to detect early prostate cancer, although it has limitations. PSA testing is not recommended for men over age 75.
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#0E7C90]" size={16} />
                How is BPH Treated?
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mb-4">
                There are several different ways to treat BPH. Medical treatment of BPH is usually reserved for men who have significant symptoms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#0E7C90]/5 rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] mb-1">Alpha Blockers</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                    Relax the smooth muscles of the prostate and bladder neck. Side effects can include headaches, fatigue, or lightheadedness.
                  </p>
                </div>

                <div className="bg-[#F77F00]/5 rounded-xl p-4 border border-[#F77F00]/10">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] mb-1">5-alpha Reductase Inhibitors</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                    Block conversion of testosterone into DHT. Lead to <strong>25% reduction</strong> in prostate size over 6-12 months.
                  </p>
                </div>

                <div className="bg-[#D62828]/5 rounded-xl p-4 border border-[#D62828]/10 md:col-span-2">
                  <h3 className="p-display text-base font-semibold text-[#D62828] mb-1">Surgery or Office Procedures</h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                    Used in men who have not responded to medication or those with severe problems, such as complete inability to urinate.
                  </p>
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
                <div className="flex items-center gap-3 bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E] ml-auto">Men 50+</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Starts in</span>
                  <span className="p-body text-sm font-medium text-[#16232E] ml-auto">30s</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Symptoms after</span>
                  <span className="p-body text-sm font-medium text-[#16232E] ml-auto">50</span>
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
                <FaInfoCircle className="text-[#0E7C90]" size={14} />
                <h3 className="p-display text-base font-semibold text-[#16232E]">When to See a Doctor</h3>
              </div>
              <p className="p-body text-sm text-[#5B6B76] leading-relaxed">
                Get it checked if you experience difficulty urinating, frequent urination, or any urinary discomfort.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProstateEnlargement;