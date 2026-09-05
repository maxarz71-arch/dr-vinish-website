import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaStethoscope,
  FaFilter,
  FaMale,
  FaFemale,
  FaBaby,
  FaMicroscope,
  FaUserMd,
  FaArrowRight,
} from 'react-icons/fa';
import { getBlogs } from '../api';

// ✅ FALLBACK DATA (AGAR API SE DATA NA AAYE)
const FALLBACK_BLOGS = [
  {
    id: '1',
    title: 'What to Expect During a Urology Consultation',
    excerpt: 'A urology consultation can feel overwhelming. Learn what to expect during your first visit, from medical history review to diagnostic tests and treatment planning.',
    category: 'Patient Guide',
    image: '/images/blog/blog-1.jpg',
  },
  {
    id: '2',
    title: '5 Common Signs of Kidney Stones You Shouldn\'t Ignore',
    excerpt: 'Kidney stones can cause severe pain and complications. Learn to recognize the early warning signs like flank pain, blood in urine, and nausea.',
    category: 'Kidney Health',
    image: '/images/blog/blog-2.jpg',
  },
  {
    id: '3',
    title: 'Understanding Prostate Health: BPH, Prostatitis & Cancer',
    excerpt: 'Prostate problems are common in men over 50. Learn the differences between BPH, prostatitis, and prostate cancer — and when to see a urologist.',
    category: 'Prostate Health',
    image: '/images/blog/blog-3.jpg',
  },
  {
    id: '4',
    title: 'UTI Prevention Tips for Women: What Really Works',
    excerpt: 'Urinary tract infections are common in women. Discover evidence-based prevention strategies including hydration, hygiene, and lifestyle changes.',
    category: "Women's Health",
    image: '/images/blog/blog-4.jpg',
  },
  {
    id: '5',
    title: 'When to See a Paediatric Urologist for Your Child',
    excerpt: 'From bedwetting to undescended testicles, learn when your child needs to see a paediatric urologist and what to expect during the visit.',
    category: 'Paediatric Urology',
    image: '/images/blog/blog-5.jpg',
  },
  {
    id: '6',
    title: 'Advances in Reconstructive Urology: What\'s New?',
    excerpt: 'Reconstructive urology has seen significant advances in recent years. Explore the latest techniques and procedures transforming patient care.',
    category: 'Reconstructive Urology',
    image: '/images/blog/blog-6.jpg',
  },
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(FALLBACK_BLOGS);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs(FALLBACK_BLOGS);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Category ke hisaab se icon map karo
  const getCategoryIcon = (category) => {
    const map = {
      'Patient Guide': FaStethoscope,
      'Kidney Health': FaFilter,
      'Prostate Health': FaMale,
      "Women's Health": FaFemale,
      'Paediatric Urology': FaBaby,
      'Reconstructive Urology': FaMicroscope,
    };
    return map[category] || FaStethoscope;
  };

  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 b-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} /> 
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#5DA9B3]/20 rounded-full px-6 py-2.5 shadow-lg mb-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5DA9B3] to-[#08404D] flex items-center justify-center text-white">
              <FaUserMd className="text-sm" />
            </div>
            <span className="b-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5DA9B3]">Urology Blog</span>
          </div>
          
          <h1 className="b-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#1E293B]">
            Urology <span className="text-[#5DA9B3]">Insights</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5DA9B3] to-[#F77F00] mx-auto mt-4 rounded-full"></div>
          <p className="b-body text-sm text-[#64748B] mt-4 max-w-2xl mx-auto">
            Expert insights on urological health, treatments, and patient care from Dr. Vinish Kumar Singh
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#64748B]">Loading blogs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => {
              const Icon = getCategoryIcon(blog.category);
              return (
                <div
                  key={blog.id || blog._id}
                  className="blog-card rounded-2xl overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="image-wrapper">
                    <img
                      src={blog.image || 'https://via.placeholder.com/600x400/5DA9B3/FFFFFF?text=Blog'}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/5DA9B3/FFFFFF?text=Blog';
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-[#5DA9B3] text-xs" />
                      <span className="b-body text-[10px] font-semibold text-[#5DA9B3] uppercase tracking-wider">
                        {blog.category || 'General'}
                      </span>
                    </div>

                    <h3 className="b-display text-lg font-medium text-[#1E293B] mb-2 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="b-body text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {blog.excerpt || blog.content || 'Read more about this topic...'}
                    </p>

                    <Link
                      to={`/blog/${blog.id || blog._id}`}
                      className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium text-[#5DA9B3] hover:text-[#08404D] transition-colors group"
                    >
                      Read More
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;