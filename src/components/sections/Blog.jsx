import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaStethoscope,
  FaFilter,
  FaMale,
} from 'react-icons/fa';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'What to Expect During a Urology Consultation',
      excerpt: 'A urology consultation can feel overwhelming. Learn what to expect during your first visit, from medical history review to diagnostic tests and treatment planning.',
      category: 'Patient Guide',
      icon: FaStethoscope,
      image: '/images/blog/blog-1.jpg',
      gradient: 'from-[#0E7C90] to-[#48CAE4]',
    },
    {
      id: 2,
      title: '5 Common Signs of Kidney Stones You Shouldn\'t Ignore',
      excerpt: 'Kidney stones can cause severe pain and complications. Learn to recognize the early warning signs like flank pain, blood in urine, and nausea.',
      category: 'Kidney Health',
      icon: FaFilter,
      image: '/images/blog/blog-2.jpg',
      gradient: 'from-[#F77F00] to-[#E85D04]',
    },
    {
      id: 3,
      title: 'Understanding Prostate Health: BPH, Prostatitis & Cancer',
      excerpt: 'Prostate problems are common in men over 50. Learn the differences between BPH, prostatitis, and prostate cancer — and when to see a urologist.',
      category: 'Prostate Health',
      icon: FaMale,
      image: '/images/blog/blog-3.jpg',
      gradient: 'from-[#D62828] to-[#E8763C]',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#E8F8FC] py-12 md:py-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .b-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .b-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .blog-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(93, 169, 179, 0.1);
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(93, 169, 179, 0.2);
          border-color: rgba(93, 169, 179, 0.25);
        }
        .blog-card .image-wrapper {
          overflow: hidden;
        }
        .blog-card .image-wrapper img {
          transition: transform 0.5s ease;
        }
        .blog-card:hover .image-wrapper img {
          transform: scale(1.05);
        }
      `}</style>

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#48CAE4]/8 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#F77F00]/6 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#48CAE4]/20 rounded-full px-5 py-2 shadow-lg mb-4">
            <span className="b-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#48CAE4]">
              Latest From Our Blog
            </span>
          </div>
          <h2 className="b-display text-3xl md:text-4xl font-medium text-[#1E293B]">
            Urology <span className="text-[#48CAE4]">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#48CAE4] to-[#F77F00] mx-auto mt-3 rounded-full"></div>
          <p className="b-body mx-auto mt-3 max-w-2xl text-sm text-[#64748B]">
            Expert insights on urological health, treatments, and patient care from Dr. Vinish Kumar Singh
          </p>
        </div>

        {/* ===== 3 BLOGS GRID WITH IMAGES ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => {
            const Icon = blog.icon;
            return (
              <div
                key={blog.id}
                className="blog-card rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* ===== IMAGE ===== */}
                <div className="image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/5DA9B3/FFFFFF?text=Blog';
                    }}
                  />
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-[#48CAE4] text-xs" />
                    <span className="b-body text-[10px] font-semibold text-[#48CAE4] uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="b-display text-base font-medium text-[#1E293B] mb-2 line-clamp-2 hover:text-[#48CAE4] transition-colors duration-300">
                    <Link to={`/blog/${blog.id}`} className="hover:text-[#48CAE4] transition-colors">
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="b-body text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== READ MORE BUTTON ===== */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link
            to="/blog"
            className="b-body group inline-flex items-center gap-2 bg-[#48CAE4] hover:bg-[#0E7C90] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Read More
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blog;