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
  FaHeartbeat,
  FaBrain,
  FaBolt,
  FaSmoking,
  FaSyringe,
  FaFlask,
  FaDna,
  FaCut,
  FaBandAid,
  FaPills,
} from 'react-icons/fa';

const MaleErectileDysfunction = () => {
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
            src="/images/treatments/male-erectile-dysfunction/male-erectile-dysfunction-banner.jpg"
            alt="Erectile Dysfunction"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e4e4?w=1200&h=400&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E38] via-[#0B2E38]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="p-eyebrow inline-block text-[11px] uppercase font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              Male Urology &middot; Condition Guide
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <FaStethoscope className="text-xl" />
              </div>
              <div>
                <h1 className="p-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Erectile <span className="text-[#7FE0F0]">Dysfunction</span>
                </h1>
                <p className="p-body text-sm text-white/80 mt-1">
                  Understanding the causes, symptoms & treatment options
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
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3">Erectile Dysfunction</h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Erectile dysfunction (ED) is the inability of a man to achieve or maintain an erection sufficient for his or his partner's sexual needs. Most men experience this at some point in their lives, usually by the age of 40, and are not psychologically affected by it.
              </p>
            </div>

            {/* Signs & Symptoms */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-[#F77F00]" size={16} />
                Signs and Symptoms
              </h2>
              <p className="p-body text-[#4A5A66] leading-relaxed text-sm">
                Erectile dysfunction is characterized by the regular or repeated inability to obtain or maintain an erection. There are several ways that erectile dysfunction is analyzed:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Obtaining full erections at some times, such as when asleep (when the mind and psychological issues, if any, are less present), tends to suggest the physical structures are functionally working.</span>
                </li>
                <li className="flex items-start gap-2 p-body text-sm text-[#4A5A66] bg-[#F4FAFB] rounded-lg px-3 py-2">
                  <FaCheckCircle className="text-[#5DA9B3] shrink-0 mt-0.5" size={10} />
                  <span>Other factors leading to erectile dysfunction are diabetes mellitus (causing neuropathy).</span>
                </li>
              </ul>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaMicroscope className="text-[#5DA9B3]" size={16} />
                Causes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { icon: FaPills, text: 'Drugs: Anti-depressants (SSRIs) and nicotine are most common' },
                  { icon: FaBrain, text: 'Neurogenic disorders: Spinal cord and brain injuries, nerve disorders such as Parkinson\'s disease, Alzheimer\'s disease, multiple sclerosis, and stroke' },
                  { icon: FaBolt, text: 'Cavernosal disorders: Peyronie\'s disease' },
                  { icon: FaBrain, text: 'Psychological causes: Performance anxiety, stress, mental disorders, clinical depression, schizophrenia, substance abuse, panic disorder, generalized anxiety disorder, personality disorders or traits psychological problems, negative feelings.' },
                  { icon: FaCut, text: 'Surgery: Radiation therapy, surgery of the colon, prostate, bladder, or rectum may damage the nerves and blood vessels involved in erection. Prostate and bladder cancer surgery often require removing tissue and nerves surrounding a tumor, which increases the risk for impotence' },
                  { icon: FaClock, text: 'Ageing: It is four times higher in men in their 60s than in men in their 40s' },
                  { icon: FaHeartbeat, text: 'Kidney failure: Diseases such as diabetes and multiple sclerosis (MS). While these two causes have not been proven they\'re likely suspects as they cause issues with both the blood flow and nervous systems.' },
                  { icon: FaSmoking, text: 'Lifestyle: Smoking is a key cause of erectile dysfunction. Smoking causes impotence because it promotes arterial narrowing.' },
                ].map((cause, idx) => {
                  const Icon = cause.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20"
                    >
                      <div className="flex items-start gap-2">
                        <Icon className="text-[#5DA9B3] shrink-0 mt-0.5" size={14} />
                        <p className="p-body text-sm text-[#4A5A66] leading-relaxed">{cause.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#5DA9B3]/20 p-6 md:p-8 card-hover animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h2 className="p-display text-xl font-semibold text-[#16232E] mb-3 flex items-center gap-2">
                <FaProcedures className="text-[#5DA9B3]" size={16} />
                Treatment
              </h2>
              
              <div className="space-y-4">
                {/* PDE5 Inhibitors */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaPills size={14} /> Phosphodiesterase type 5 inhibitors
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    A phosphodiesterase type 5 inhibitor often shortened to PDE5 inhibitor, is a drug used to block the degradative action of phosphodiesterase type 5 on cyclic GMP in the smooth muscle cells lining the blood vessels supplying the corpus cavernosum of the penis. These drugs are used in the treatment of erectile dysfunction, and were the first effective oral treatment available for the condition. Because PDE5 is also present in the arterial wall smooth muscle within the lungs, PDE5 inhibitors have also been explored for the treatment of pulmonary hypertension, a disease in which blood vessels in the lungs become overloaded with fluid, usually as a result of failure of the left ventricle of the heart.
                  </p>
                </div>

                {/* Alprostadil */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaSyringe size={14} /> Alprostadil
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Prostaglandin E1 (PGE1), known pharmaceutically as alprostadil, is a prostaglandin. It is a drug used in the treatment of erectile dysfunction and has vasodilatory properties. Alprostadil is sold as urethral suppositories and in injectable form. The suppositories are sold under the brand name MUSE (Medicated Urethral Suppository for Erection). The injectable forms are Edex and Caverject. Muse delivers alprostadil as a penile suppository, inserted into the urethra, at least ten minutes before the erection will be needed. Caverject and Edex are similarly fast-acting, but instead are injected by syringe directly into the corpus cavernosum of the penis.
                  </p>
                </div>

                {/* Vacuum Devices */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaBandAid size={14} /> Vacuum devices
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Vacuum erection devices, also known as vacuum constriction devices have been utilized for improving erectile rigidity for over a century. A vacuum constriction device (VCD) is an external pump with a band on it that a man with erectile dysfunction can use to get and maintain an erection. The VCD consists of an acrylic cylinder with a pump that may be attached directly to the end of the penis. A constriction ring or band is placed on the cylinder at the other end, which is applied to the body. The cylinder and pump are used to create a vacuum to help the penis become erect; the band or constriction ring is used to help maintain the erection.
                  </p>
                </div>

                {/* Penile Prosthesis */}
                <div className="bg-[#F4FAFB] rounded-xl p-4 border border-[#5DA9B3]/20">
                  <h3 className="p-display text-base font-semibold text-[#5DA9B3] flex items-center gap-2">
                    <FaProcedures size={14} /> Penile Prosthesis
                  </h3>
                  <p className="p-body text-sm text-[#5B6B76] leading-relaxed mt-1">
                    Penile prostheses are devices that are implanted completely within the body. They produce an erection-like state that enables the man who has one of these implants to have normal sexual intercourse. Neither the operation to implant prosthesis nor the device itself will interfere with sensation, orgasm, ejaculation or urination. Penile prostheses are usually implanted under anesthesia. Usually one small surgical cut is made either above the penis where it joins the abdomen or under the penis where it joins the scrotum. No tissue is removed; blood loss is small and blood transfusion is almost never required.
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
                  <span className="p-body text-sm font-medium text-[#16232E]">Inability to achieve/maintain erection</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Age factor</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">4x higher in 60s vs 40s</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F4FAFB] rounded-lg px-4 py-3">
                  <span className="p-body text-xs font-semibold text-[#8A97A0] uppercase tracking-wide">Common treatment</span>
                  <span className="p-body text-sm font-medium text-[#16232E]">PDE5 inhibitors</span>
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
                If you experience regular or repeated inability to obtain or maintain an erection, consult a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleErectileDysfunction;