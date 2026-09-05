import React from 'react';
import { Stethoscope, User, UserRound, FlaskConical } from 'lucide-react';

const DATA = [
  {
    title: 'Conditions Treated',
    icon: Stethoscope,
    treatments: [
      { label: 'Paediatric Urology', href: '/paediatric-urology' },
      { label: 'Reconstructive Urology Surgeries', href: '/reconstructive-urology' },
      { label: 'Kidney Stones', href: '/kidney-stones' },
      { label: 'Prostate Enlargement', href: '/prostate-enlargement' },
      { label: 'Prostatitis', href: '/prostatitis' },
      { label: 'UTI Infection', href: '/uti-infection' },
      { label: 'Stricture Urethra', href: '/stricture-urethra' },
      { label: 'Urethritis', href: '/urethritis' },
      { label: 'Over Active Bladder', href: '/over-active-bladder' },
      { label: 'Ruptured Urethra', href: '/ruptured-urethra' },
      { label: 'Kidney/Renal Transplantation', href: '/kidney-transplant' },
    ]
  },
  {
    title: 'Male Urology',
    icon: User,
    treatments: [
      { label: 'Hypogonadism', href: '/hypogonadism' },
      { label: 'Varicocele', href: '/varicocele' },
      { label: 'Erectile Dysfunction', href: '/male-erectile-dysfunction' },
      { label: "Peyronie's Diseases", href: '/peyronies-disease' },
      { label: 'Loss Of Libido', href: '/loss-of-libido' },
      { label: 'Impotency', href: '/impotency' },
      { label: 'Male Infertility', href: '/male-infertility-male' },
      { label: 'Penile Curvature', href: '/penile-curvature' },
    ]
  },
  {
    title: 'Female Urology',
    icon: UserRound,
    treatments: [
      { label: 'Recurrent Urinary Tract Infection', href: '/recurrent-uti' },
      { label: 'Urinary Incontinence', href: '/urinary-incontinence' },
      { label: 'Stress Urinary Incontinence', href: '/stress-urinary-incontinence' },
      { label: 'Voiding Difficulties', href: '/voiding-difficulties' },
      { label: 'Over Active Bladder', href: '/female-overactive-bladder' },
      { label: 'Cystocele', href: '/cystocele' },
      { label: 'Pelvic Organ Prolapse', href: '/pelvic-organ-prolapse' },
      { label: 'Nocturia', href: '/nocturia' },
    ]
  },
  {
    title: 'Andrology',
    icon: FlaskConical,
    treatments: [
      { label: 'Male Infertility', href: '/male-infertility' },
      { label: 'Erectile Dysfunction', href: '/erectile-dysfunction' },
      { label: 'Penile Enlargement', href: '/penile-enlargement' },
      { label: 'Premature Ejaculation', href: '/premature-ejaculation' },
      { label: 'Chronic Orchialgia', href: '/chronic-orchialgia' },
      { label: 'Chronic Testicular Pain', href: '/chronic-testicular-pain' },
      { label: 'Varicocele Surgery', href: '/varicocele-surgery' },
    ]
  }
];

const ConditionsTreated = () => {
  return (
    <section className="relative overflow-hidden bg-[#E8F8FC] py-12 md:py-16">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        .ct-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ct-body { font-family: 'Inter', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .ct-scroll {
          scrollbar-width: thin;
          scrollbar-color: #48CAE4 transparent;
        }
        .ct-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .ct-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .ct-scroll::-webkit-scrollbar-thumb {
          background-color: #48CAE4;
          border-radius: 9999px;
        }
        .ct-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #F77F00;
        }
      `}</style>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#48CAE4]/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F77F00]/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-8 md:mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#48CAE4]/20 rounded-full px-5 py-2 shadow-lg mb-4">
            <Stethoscope size={14} strokeWidth={2} className="text-[#48CAE4]" />
            <span className="ct-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">
              Our Expertise
            </span>
          </div>
          <h2 className="ct-display text-3xl md:text-4xl lg:text-5xl font-medium text-[#1E293B]">
            Conditions <span className="text-[#48CAE4]">Treated</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ===== GRID (all cards same height) ===== */}
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#48CAE4]/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* ===== HEADER ===== */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#48CAE4] to-[#1E4A7A] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="ct-display text-sm font-medium leading-tight text-white md:text-base">
                    {item.title}
                  </h3>
                </div>

                {/* ===== CONTENT (fixed height, scrolls if list is long, keeps every card equal size) ===== */}
                <div className="flex-1 border-t border-[#E2E8F0] bg-[#F8FAFB] p-3">
                  <ul className="ct-scroll h-56 space-y-0.5 overflow-y-auto pr-1 md:h-64">
                    {item.treatments.map((treatment, idx) => {
                      if (typeof treatment === 'object' && treatment !== null) {
                        return (
                          <li
                            key={idx}
                            className="ct-body group/item flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[#1E293B] transition-all duration-300 hover:bg-white hover:shadow-sm hover:translate-x-1"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F77F00]" />
                            <a
                              href={treatment.href}
                              className="transition-colors duration-300 hover:text-[#48CAE4]"
                            >
                              {treatment.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={idx}
                          className="ct-body group/item flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[#1E293B] transition-all duration-300 hover:bg-white hover:shadow-sm hover:translate-x-1"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F77F00]" />
                          {treatment}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConditionsTreated;