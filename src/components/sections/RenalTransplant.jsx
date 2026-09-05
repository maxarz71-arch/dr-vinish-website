import React from 'react';
import {
  HeartPulse,
  Stethoscope,
  HandHeart,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Activity,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';  // ✅ Link import karo

const RenalTransplant = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Advanced Care',
      description: 'State-of-the-art surgical techniques and comprehensive post-transplant care for optimal outcomes.',
      tag: 'LIFE-SAVING',
    },
    {
      icon: Clock,
      title: 'Timely Transplantation',
      description: 'Reduced waiting times with efficient donor-recipient matching and streamlined surgical scheduling.',
      tag: 'EFFICIENT',
    },
    {
      icon: Users,
      title: 'Expert Team Approach',
      description: 'Multidisciplinary team of urologists, nephrologists, and transplant coordinators for comprehensive care.',
      tag: 'COLLABORATIVE',
    },
    {
      icon: Activity,
      title: 'Post-Transplant Care',
      description: 'Dedicated follow-up, immunosuppression management, and long-term monitoring for transplant success.',
      tag: 'COMPREHENSIVE',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#E8F8FC] py-16 md:py-20">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .rt-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .rt-body { font-family: 'Inter', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#48CAE4]/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F77F00]/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#48CAE4]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#48CAE4]/20 rounded-full px-5 py-2 shadow-lg mb-4">
            <HeartPulse size={16} strokeWidth={2} className="text-[#48CAE4] animate-pulse" />
            <span className="rt-body text-xs font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">Kidney Transplant</span>
          </div>
          <h2 className="rt-display text-3xl md:text-4xl lg:text-5xl font-medium text-[#1E293B]">
            Renal <span className="text-[#48CAE4]">Transplant</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-3 rounded-full"></div>
          <p className="rt-body mx-auto mt-3 max-w-2xl text-sm text-[#64748B]">
            A surgical procedure in which a donor kidney is transplanted into a patient with permanent renal failure
          </p>
        </div>

        {/* ===== FEATURE CARDS GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#48CAE4]/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#48CAE4]/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#48CAE4] flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-[#1E4A7A] transition-all duration-300">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                {/* Tag */}
                <span className="rt-body inline-block text-[10px] font-semibold tracking-wider text-[#48CAE4] bg-[#48CAE4]/10 px-2.5 py-0.5 rounded-full mb-2.5">
                  {feature.tag}
                </span>

                {/* Title */}
                <h3 className="rt-display text-base font-medium text-[#1E293B] mb-1.5 group-hover:text-[#48CAE4] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="rt-body text-sm text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <div className="mt-10 text-center">
          <Link
            to="/kidney-transplant"
            className="rt-body group inline-flex items-center gap-2.5 rounded-full bg-[#F77F00] hover:bg-[#E06A00] text-white px-7 py-3 text-sm font-semibold shadow-lg shadow-[#F77F00]/30 hover:shadow-xl hover:shadow-[#F77F00]/50 transition-all duration-300 hover:-translate-y-1"
          >
            More About Us
            <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RenalTransplant;