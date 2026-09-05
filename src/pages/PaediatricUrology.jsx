import React from 'react';
import { FaBaby, FaStethoscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: 'phimosis',
    name: 'Phimosis',
    description: 'Phimosis is a condition in which the foreskin is too tight to pull all the way back.',
    slug: 'phimosis'
  },
  {
    id: 'congenital-hernia',
    name: 'Congenital Hernia/Hydrocele',
    description: 'A congenital hernia or hydrocele is a condition present at birth where there is a weakness in the abdominal wall.',
    slug: 'congenital-hernia'
  },
  {
    id: 'torsion-testis',
    name: 'Torsion Testis',
    description: 'Testicular torsion is a painful condition where the spermatic cord twists, cutting off blood supply to the testicle.',
    slug: 'torsion-testis'
  },
  {
    id: 'undescended-testis',
    name: 'Undescended Testis',
    description: 'An undescended testis is a condition where one or both testicles have not moved into the scrotum before birth.',
    slug: 'undescended-testis'
  },
  {
    id: 'hypospadias',
    name: 'Hypospadias',
    description: 'Hypospadias is a birth defect in boys where the opening of the urethra is not at the tip of the penis.',
    slug: 'hypospadias'
  },
];

const PaediatricUrology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F8FC] via-white to-[#E8F8FC] pt-24 pb-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .pu-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .pu-body { font-family: 'Inter', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== DECORATIVE ELEMENTS ===== */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#48CAE4]/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#F77F00]/6 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#48CAE4]/20 rounded-full px-6 py-2.5 shadow-lg mb-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#48CAE4] to-[#1E4A7A] flex items-center justify-center text-white">
              <FaBaby className="text-sm" />
            </div>
            <span className="pu-body text-xs font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">Paediatric Urology</span>
          </div>
          
          <h1 className="pu-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E293B]">
            Paediatric <span className="text-[#48CAE4]">Urology</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-4 rounded-full"></div>
          <p className="pu-body text-sm text-[#64748B] mt-4 max-w-2xl mx-auto">
            Specialized care for urinary tract and genital disorders in children — from infancy through adolescence.
          </p>
        </div>

        {/* ===== 5 TREATMENTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => (
            <Link
              key={treatment.id}
              to={`/treatment/${treatment.slug}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#48CAE4]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-[#48CAE4]/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#48CAE4]/10 text-[#48CAE4] group-hover:bg-[#48CAE4] group-hover:text-white flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300">
                  <FaStethoscope />
                </div>
                <div className="flex-1">
                  <h3 className="pu-display text-lg font-medium text-[#1E293B] group-hover:text-[#48CAE4] transition-colors duration-300">
                    {treatment.name}
                  </h3>
                </div>
              </div>
              <p className="pu-body text-sm text-[#64748B] leading-relaxed">
                {treatment.description}
              </p>
              <div className="mt-4 text-[#48CAE4] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PaediatricUrology;