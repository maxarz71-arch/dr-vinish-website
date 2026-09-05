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
  FaRadiation,
} from 'react-icons/fa';

const PelvicOrganProlapse = () => {
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
            src="/images/treatments/pelvic-organ-prolapse/pelvic-organ-prolapse-banner.jpg"
            alt="Pelvic Organ Prolapse"
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
                  Pelvic Organ <span className="text-[#7FE0F0]">Prolapse</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding uterine & vaginal prolapse — Causes, Symptoms & Treatment
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Pelvic Organ Prolapse</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                The uterus is held in position by pelvic muscles, ligaments and other tissues. If the uterus drops out of its normal position, this is called prolapse. Prolapse is defined as a body part falling or slipping out of position. Prolapse happens when the pelvic muscles and connective tissues weaken. The uterus can slip to the extent that it drops partially into the vagina and creates a noticeable lump or bulge. This is called <strong>incomplete prolapse</strong>. <strong>Complete prolapse</strong> occurs when the uterus slips to such a degree that some uterine tissue is outside the vagina.
              </p>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm mt-3">
                Pelvic prolapse is usually accompanied by some degree of <strong>vaginal vault prolapse</strong>. Vaginal vault prolapse occurs when the upper part of the vagina loses its shape and sags into the vaginal canal or outside the vagina. Pelvic prolapse may also involve sagging or slipping of other pelvic organs, including the bladder, the urethra, and rectum.
              </p>
            </div>

            {/* Signs & Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Signs & Symptoms
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Women with mild cases may have no noticeable symptoms. However, as the uterus falls further out of position, it can place pressure on other pelvic organs causing a variety of symptoms:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Sensation of sitting on a small ball',
                  'Heaviness or pulling in the pelvis',
                  'Pelvic or abdominal pain',
                  'Pain during intercourse',
                  'Protrusion of tissue from the opening of the vagina',
                  'Repeated bladder infections',
                  'Vaginal bleeding or unusual discharge',
                  'Constipation',
                  'Frequent urination or urgent need to empty bladder',
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

            {/* Causes & Risk Factors */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-[#5DA9B3]" size={16} />
                Causes and Risk Factors
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Fairly common — risk increases with <strong>age</strong></span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Women who have had <strong>one or more vaginal births</strong></span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Normal aging</strong> and lack of estrogen after menopause</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Chronic coughing, heavy lifting, obesity</strong> — increase pressure on pelvic floor</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Rarely — <strong>pelvic tumor</strong></span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span><strong>Chronic constipation</strong> and pushing can worsen prolapse</span>
                </li>
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Treatment
              </h2>
              
              <div className="space-y-4">
                {/* Non-Surgical */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBandAid size={14} /> Non-Surgical Options
                  </h3>
                  
                  <div className="mt-2 space-y-3">
                    <div>
                      <h4 className="p-display text-sm font-semibold text-[#5DA9B3] flex items-center gap-2">
                        <FaRadiation size={12} /> Radiation Therapy
                      </h4>
                      <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                        Cancer treatment that uses high-energy x-rays or other types of radiation to kill cancer cells. External radiation therapy uses a machine outside the body. Internal radiation therapy uses radioactive substance sealed in needles, seeds, wires or catheters placed directly into or near the cancer.
                      </p>
                    </div>

                    <div>
                      <h4 className="p-display text-sm font-semibold text-[#5DA9B3] flex items-center gap-2">
                        <FaSyringe size={12} /> Hormone Therapy
                      </h4>
                      <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                        Removes hormones or blocks their action and stops cancer cells from growing. Drugs, surgery or radiation therapy are used to reduce the production of hormones or block them from working.
                      </p>
                    </div>

                    <div>
                      <h4 className="p-display text-sm font-semibold text-[#5DA9B3] flex items-center gap-2">
                        <FaFlask size={12} /> Chemotherapy
                      </h4>
                      <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                        Uses drugs to stop the growth of cancer cells, either by killing the cells or by stopping them from dividing. Can be systemic (through bloodstream) or regional (targeting specific areas).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Surgical */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#F77F00]/20">
                  <h3 className="p-display text-base font-semibold text-[#F77F00] flex items-center gap-2">
                    <FaCut size={14} /> Surgical Methods
                  </h3>
                  <h4 className="p-display text-sm font-semibold text-[#F77F00] flex items-center gap-2 mt-2">
                    <FaProcedures size={12} /> Laparoscopic Pelvic Organ Prolapse Repair
                  </h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Open abdominal surgery — abdomen is opened to access pelvic organs</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Incision through a wide (6-12 inch) abdominal incision below the navel</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Incision can be transverse (horizontal) or vertical</span>
                    </li>
                    <li className="flex items-start gap-2 p-body text-sm text-[#5B6B76]">
                      <FaCheckCircle className="text-[#F77F00] shrink-0 mt-0.5" size={10} />
                      <span>Recovery: often 6 weeks</span>
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
                  <span className="p-body text-sm font-medium text-[#16232E]">Uterus drops from normal position</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Risk increases</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">With age</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common in</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">Women with vaginal births</span>
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
                If you experience pelvic pressure, heaviness, protrusion of tissue, or discomfort, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PelvicOrganProlapse;
