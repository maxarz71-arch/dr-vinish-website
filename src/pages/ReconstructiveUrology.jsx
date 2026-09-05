import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaProcedures, FaCut, FaBandAid } from 'react-icons/fa';

const ReconstructiveUrology = () => {
  const treatments = [
    {
      id: 'urethroplasty',
      name: 'Urethroplasty Surgery',
      icon: FaCut,
      description: 'Surgical repair of the urethra to restore normal urine flow.',
      slug: 'urethroplasty'
    },
    {
      id: 'hypospadias-surgery',
      name: 'Hypospadias Surgery',
      icon: FaBandAid,
      description: 'Surgical correction of hypospadias to reposition the urethral opening.',
      slug: 'hypospadias-surgery'
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8F8FC] pt-24 pb-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .ru-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ru-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== DECORATIVE BACKGROUND ===== */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#48CAE4]/8 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F77F00]/6 rounded-full blur-3xl" aria-hidden="true"></div>

        {/* ===== BACK BUTTON ===== */}
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2 text-[#48CAE4] hover:text-[#1E4A7A] transition-all duration-300 mb-6 ru-body text-sm font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#48CAE4]/10 hover:shadow-md"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" /> 
          Back to Home
        </Link>

        {/* ===== HEADER ===== */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#48CAE4]/20 rounded-full px-6 py-2.5 shadow-lg mb-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#48CAE4] to-[#1E4A7A] flex items-center justify-center text-white">
              <FaProcedures className="text-sm" />
            </div>
            <span className="ru-body text-xs font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">Reconstructive Urology</span>
          </div>
          
          <h1 className="ru-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E293B]">
            Reconstructive <span className="text-[#48CAE4]">Urology</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-4 rounded-full"></div>
          <p className="ru-body text-sm text-[#64748B] mt-4 max-w-2xl mx-auto">
            Advanced surgical procedures to restore normal structure and function of the urinary tract.
          </p>
        </div>

        {/* ===== 2 SURGERIES GRID ===== */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Link
                key={treatment.id}
                to={`/treatment/${treatment.slug}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#48CAE4]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#48CAE4]/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#48CAE4] to-[#1E4A7A] flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="ru-display text-lg font-medium text-[#1E293B] group-hover:text-[#48CAE4] transition-colors duration-300">
                      {treatment.name}
                    </h3>
                    <span className="inline-block ru-body text-[10px] font-semibold tracking-wider text-[#48CAE4] bg-[#48CAE4]/10 px-2.5 py-0.5 rounded-full mt-1">
                      RECONSTRUCTIVE
                    </span>
                  </div>
                </div>
                <p className="ru-body text-sm text-[#64748B] leading-relaxed">
                  {treatment.description}
                </p>
                <div className="mt-4 text-[#48CAE4] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                  Learn More →
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ReconstructiveUrology;