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
  FaFlask,
  FaSyringe,
  FaHospital,
  FaBandAid,
  FaCut,
} from 'react-icons/fa';

const StrictureUrethra = () => {
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
            src="/images/treatments/stricture-urethra/stricture-urethra-banner.jpg"
            alt="Stricture Urethra"
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
                  Stricture <span className="text-[#7FE0F0]">Urethra</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Narrowing of the urethra — Causes, Symptoms & Treatment
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Stricture Urethra</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The urethra is the soft tube that allows urine to be passed out of the bladder. In men, the urethra is a thin tube like structure that starts from the lower opening of the bladder and traverses the entire length of the penis. It measures 21 cm in men. In women, it is a shorter tube coming off the lower opening of bladder and is between 2.5 to 4 centimeters (cm) in length. The urethra has a sphincter that is normally closed to keep urine inside the bladder. When bladder fills with urine, there are both voluntary and involuntary controls to open the urethral sphincter to allow urine to come out.
              </p>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                Urethral stricture refers to any narrowing of the urethra for any reason whether or not it actually impacts the flow of urine out of the bladder. Any inflammation of urethra can result in scarring, which then can lead to a stricture or a narrowing of the urethra. Trauma, infection, tumors, surgeries, or any other cause of scarring may lead to urethral narrowing or stricture. Urethral stricture is significantly more common in men and boys compared to women and girls.
              </p>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#0E7C90]" size={16} />
                Causes of Urethral Stricture
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Trauma from injury or accidents',
                  'Pelvic injury or trauma',
                  'Previous procedures involving the urethra',
                  'Previous prostate surgery (TURP)',
                  'Infections of the urethra (STDs, urethritis, gonorrhea, chlamydia)',
                  'Prostate infection or inflammation (prostatitis)',
                  'Previous hypospadias surgery',
                  'Congenital malformations of the urethra',
                ].map((cause, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {cause}
                  </li>
                ))}
              </ul>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Symptoms of Urethral Stricture
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Decreased urine stream',
                  'Difficulty starting urine flow',
                  'Painful urination (dysuria)',
                  'Urinary tract infection (UTI)',
                  'Urinary retention',
                  'Incomplete emptying of bladder',
                  'Dribbling of urine',
                  'Spraying or double streaming urine',
                  'Blood in the urine (hematuria)',
                  'Blood in the semen',
                  'Urinary incontinence',
                  'Pelvic pain',
                  'Discharge from the urethra',
                ].map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#0E7C90] shrink-0" size={10} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Investigations */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#0E7C90]" size={16} />
                Investigations for Stricture Urethra
              </h2>
              
              <div className="space-y-3">
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaFlask size={14} /> Ultrasonography
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Ultrasound scan of the bladder is done to assess the effects of the stricture on the urinary system. Scan may show residual urine in bladder, urine retention, bladder wall thickening, dilatation of the kidney and ureter.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaFlask size={14} /> Urethrography
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    A retrograde urethrogram is a routine radiologic procedure used to image the urethra. Stricture urethra is seen as a segmental narrowing in caliber of the urethral lumen of varying length.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaTint size={14} /> Uroflowmetry
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Uroflowmetry is a diagnostic test done to check for abnormalities in the amount or flow rate of a patient's urine. Less than the normal flow rates indicates obstruction to flow of urine.
                  </p>
                </div>

                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaMicroscope size={14} /> Cystoscopy
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Cystoscopy is endoscopy of the urinary bladder via the urethra. It is carried out with a cystoscope under anesthesia. Tiny surgical instruments can be inserted through the cystoscope that allows your doctor to remove samples of tissue (biopsy) or samples of urine.
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#0E7C90]/10 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#0E7C90]" size={16} />
                Treatment for Urethral Stricture
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Surgery remains the only treatment for individuals with symptoms of urethral narrowing. Many surgical procedures are available for treating urethral strictures. Depending on the cause, type, severity of stricture and other medical and social aspects, the most appropriate procedure may be recommended for each individual case.
              </p>
              
              <div className="mt-4 space-y-3">
                {/* Urethral Dilation */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaSyringe size={14} /> Urethral Dilation
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Thin rods of increasing diameters are gently inserted into the urethra from the tip of the penis in order to open up the urethral narrowing. This procedure may need to be repeated from time to time, as strictures may recur. The shorter the stricture, the less likely it is to recur.
                  </p>
                </div>

                {/* VIU */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaCut size={14} /> Visualized Internal Urethrotomy (VIU)
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    The surgical technique of "Urethrotomy" creates a widening of the urethra by sharp cutting using a special instrument. The operation is performed endoscopically through the external urinary meatus.
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      <strong>Cold knife (Sachse's technique):</strong> Used mainly in patients with bulbar urethral strictures.
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      <strong>Holmium laser urethrotomy:</strong> Used mainly in patients with posterior urethral strictures or bladder neck contracture after prostatic surgery.
                    </li>
                  </ul>
                </div>

                {/* Urethroplasty */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#0E7C90]/10">
                  <h3 className="p-display text-base font-semibold text-[#0E7C90] flex items-center gap-2">
                    <FaHospital size={14} /> Urethroplasty
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Urethroplasty is an open surgical procedure for urethral reconstruction to treat urethral stricture. It can be performed by 2 methods:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      <strong>Anastomotic Technique:</strong> The narrowed part of the urethra is cut and removed and the proximal and distal parts are re-joined. Used for small urethral strictures (less than 2 cm).
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#0E7C90] shrink-0 mt-0.5" size={10} />
                      <strong>Tissue Transfer:</strong> Skin and tissue is grafted from a non-hair bearing part of the body like the buccal mucosa or bladder mucosa. Buccal mucosal graft is most commonly used with very good lasting results.
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">More common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Men &amp; boys</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Urethra length (Men)</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">21 cm</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Urethra length (Women)</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">2.5-4 cm</span>
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
                Get it checked if you experience decreased urine stream, difficulty starting urine flow, painful urination, blood in urine, or recurrent UTIs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StrictureUrethra;