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
} from 'react-icons/fa';

const VoidingDifficulties = () => {
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
            src="/images/treatments/voiding-difficulties/voiding-difficulties-banner.jpg"
            alt="Voiding Difficulties"
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
                  Voiding <span className="text-[#7FE0F0]">Difficulties</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding slow, intermittent urine flow & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Voiding Difficulties</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Voiding Difficulty is a condition when the Patient find the passing of urine to be slow and intermittent. She gets a feeling that urine has not been completely voided. This condition might begin suddenly without any warning or develop gradually. This problem may not be associated with pain. The condition might develop in such a way that one day the patient unable to pass urine completely that results in the bladder becoming distended and the urine overflowing.
              </p>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                It is very important to diagnose the disease early to prevent an acute retention of urine and the bladder and kidneys sustaining injuries from overstretching. This might lead to a chronic urine retention. The larger the amount of the urine that had been retained in the bladder and the longer that this retention of urine persists, the longer it would take for the bladder to recover.
              </p>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Symptoms of Voiding Difficulty
              </h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Strain to pass out urine',
                  'Delay in initiating the urine flow',
                  'A slow or intermittent urine flow',
                  'Increased frequency of voiding',
                  'A sensation of incomplete bladder emptying',
                  'A strong feeling of need to pass out urine',
                  'Frequent passing out of small amounts of urine',
                  'Uncontrollable leakage of urine',
                  'An inability to pass urine leading to pain in the lower tummy',
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
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Causes of Voiding Difficulty
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The voiding difficulty is generally caused due to an obstruction of the urethra or the urinary tract. There could be several reasons for this:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'A vaginal infection',
                  'An infection in the urinary tract',
                  'Severe prolapse in the pelvic organ (cystocele, uterine prolapse)',
                  'Postmenopausal changes of the genital and urinary tract',
                  'Complication of surgery for pelvic organ prolapse or stress incontinence',
                  'Difficult vaginal or instrumental delivery after prolonged labour',
                  'Constipation',
                  'Side effects of medications',
                  'Uterine fibroids situated in the back wall of the womb',
                  'Mucocele or cyst of the para urethral glands',
                  'Urethral caruncle',
                ].map((cause, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-body text-sm text-[#3E4C56] bg-[#F4FAFB] rounded-lg px-3 py-2"
                  >
                    <FaCheckCircle className="text-[#5DA9B3] shrink-0" size={10} />
                    {cause}
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
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Definition</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Slow, intermittent urine flow</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Key symptom</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Incomplete bladder emptying</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common cause</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Urethral obstruction</span>
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
                If you experience slow urine flow, incomplete bladder emptying, or difficulty urinating, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidingDifficulties;