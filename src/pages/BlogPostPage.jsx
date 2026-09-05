import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaUserMd } from 'react-icons/fa';
import { getBlogs } from '../api';

// ✅ FALLBACK CONTENT (AGAR API SE DATA NA AAYE)
const FALLBACK_BLOG_DATA = {
  '1': {
    title: 'What to Expect During a Urology Consultation',
    author: 'Dr. Vinish Kumar Singh',
    category: 'Patient Guide',
    image: '/images/blog/blog-1.jpg',
    content: `
      <p>A urology consultation can feel overwhelming, especially if it's your first time. Understanding what to expect can help ease your anxiety and ensure you get the most out of your visit.</p>
      <h3>Before Your Appointment</h3>
      <p>Before your urology consultation, you should:</p>
      <ul>
        <li>Bring your medical records and any previous test results</li>
        <li>Make a list of your current medications and dosages</li>
        <li>Write down any symptoms you've been experiencing</li>
        <li>Prepare questions you want to ask your urologist</li>
        <li>Arrive 15-20 minutes early for paperwork</li>
      </ul>
      <h3>During the Consultation</h3>
      <p>During your appointment, Dr. Vinish Kumar Singh will:</p>
      <ul>
        <li>Review your medical history in detail</li>
        <li>Discuss your current symptoms and concerns</li>
        <li>Perform a physical examination</li>
        <li>Recommend appropriate diagnostic tests if needed</li>
        <li>Explain potential treatment options</li>
      </ul>
      <h3>Common Diagnostic Tests</h3>
      <p>Depending on your condition, your urologist may recommend:</p>
      <ul>
        <li><strong>Urinalysis</strong> — To check for infections or abnormalities</li>
        <li><strong>Ultrasound</strong> — To visualize the kidneys, bladder, or prostate</li>
        <li><strong>Cystoscopy</strong> — To examine the inside of the bladder</li>
        <li><strong>Uroflowmetry</strong> — To measure urine flow rate</li>
        <li><strong>PSA Test</strong> — For prostate health assessment</li>
      </ul>
      <h3>After Your Appointment</h3>
      <p>After your consultation, you will:</p>
      <ul>
        <li>Receive a clear treatment plan</li>
        <li>Schedule any necessary follow-up tests</li>
        <li>Get prescriptions if needed</li>
        <li>Know when to return for follow-up</li>
      </ul>
      <p>Remember, your urologist is there to help you. Don't hesitate to ask questions or voice any concerns you may have. Early detection and treatment of urological conditions can significantly improve outcomes.</p>
    `
  },
  '2': {
    title: '5 Common Signs of Kidney Stones You Shouldn\'t Ignore',
    author: 'Dr. Vinish Kumar Singh',
    category: 'Kidney Health',
    image: '/images/blog/blog-2.jpg',
    content: `
      <p>Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. They can affect any part of your urinary tract — from your kidneys to your bladder. Often, stones form when the urine becomes concentrated, allowing minerals to crystallize and stick together.</p>
      <h3>1. Severe Flank Pain</h3>
      <p>One of the most common and severe symptoms of kidney stones is sharp, cramping pain in the back and side, often radiating to the lower abdomen and groin. This pain, known as renal colic, comes in waves and can be excruciating.</p>
      <h3>2. Painful Urination</h3>
      <p>As the stone moves down the urinary tract, it can cause a burning sensation or pain during urination. This is often one of the first signs that a stone is passing.</p>
      <h3>3. Blood in the Urine</h3>
      <p>Hematuria, or blood in the urine, is a common symptom of kidney stones. The urine may appear pink, red, or brown. In some cases, blood is only visible under a microscope.</p>
      <h3>4. Frequent Urination</h3>
      <p>If a stone is lodged in the lower part of the urinary tract, you may feel the need to urinate more frequently or urgently. You might also experience difficulty passing urine.</p>
      <h3>5. Nausea and Vomiting</h3>
      <p>Kidney stones can cause nausea and vomiting due to the intense pain or because the stone affects the nerves that connect the kidney to the gastrointestinal tract.</p>
      <h3>When to See a Doctor</h3>
      <p>If you experience any of these symptoms, especially severe pain or blood in your urine, seek medical attention immediately. Early diagnosis and treatment can prevent complications and reduce the risk of recurrent stones.</p>
    `
  },
  '3': {
    title: 'Understanding Prostate Health: BPH, Prostatitis & Cancer',
    author: 'Dr. Vinish Kumar Singh',
    category: 'Prostate Health',
    image: '/images/blog/blog-3.jpg',
    content: `
      <p>The prostate is a small gland about the size of a walnut that sits below the bladder and surrounds the urethra. It plays a crucial role in male reproductive health. As men age, the prostate can develop various conditions that affect urinary function and overall quality of life.</p>
      <h3>Benign Prostatic Hyperplasia (BPH)</h3>
      <p>BPH is a non-cancerous enlargement of the prostate gland. It is the most common prostate condition in men over 50. Symptoms include:</p>
      <ul>
        <li>Frequent urination, especially at night</li>
        <li>Difficulty starting urination</li>
        <li>Weak urine stream</li>
        <li>Incomplete emptying of the bladder</li>
      </ul>
      <h3>Prostatitis</h3>
      <p>Prostatitis is inflammation of the prostate gland. It can be acute or chronic and may be caused by bacterial infection. Symptoms include:</p>
      <ul>
        <li>Pain or burning during urination</li>
        <li>Pelvic or perineal pain</li>
        <li>Fever and chills (in acute cases)</li>
        <li>Painful ejaculation</li>
      </ul>
      <h3>Prostate Cancer</h3>
      <p>Prostate cancer is one of the most common cancers in men. Early detection is key to successful treatment. Risk factors include age, family history, and ethnicity. Symptoms may include:</p>
      <ul>
        <li>Difficulty urinating</li>
        <li>Blood in urine or semen</li>
        <li>Pain in the back, hips, or pelvis</li>
        <li>Unexplained weight loss</li>
      </ul>
      <h3>When to See a Urologist</h3>
      <p>Men over 50 should discuss prostate screening with their doctor. If you experience any urinary symptoms or pelvic pain, consult a urologist for proper evaluation.</p>
    `
  },
  '4': {
    title: 'UTI Prevention Tips for Women: What Really Works',
    author: 'Dr. Vinish Kumar Singh',
    category: "Women's Health",
    image: '/images/blog/blog-4.jpg',
    content: `
      <p>Urinary tract infections (UTIs) are among the most common infections in women. While they are usually treatable, prevention is always better than cure. Here are evidence-based strategies to reduce your risk of UTIs.</p>
      <h3>Stay Hydrated</h3>
      <p>Drinking plenty of water helps dilute your urine and ensures that you urinate more frequently, flushing bacteria out of the urinary tract before an infection can take hold.</p>
      <h3>Practice Good Hygiene</h3>
      <ul>
        <li>Always wipe from front to back after using the toilet</li>
        <li>Avoid using harsh soaps or douches in the genital area</li>
        <li>Wear cotton underwear and loose-fitting clothes</li>
      </ul>
      <h3>Urinate Before and After Sex</h3>
      <p>Emptying your bladder before and after sexual activity helps flush out bacteria that may have entered the urethra during intercourse.</p>
      <h3>Choose the Right Contraceptive</h3>
      <p>Some women may be more prone to UTIs with certain contraceptives. If you experience recurrent UTIs, consider switching to a different method and consult your doctor.</p>
      <h3>Consider Cranberry Products</h3>
      <p>While not a cure, cranberry juice or supplements may help prevent UTIs by preventing bacteria from adhering to the bladder wall.</p>
      <h3>When to See a Doctor</h3>
      <p>If you experience burning during urination, frequent urgency, or pelvic pain, consult your doctor promptly. Early treatment can prevent complications.</p>
    `
  },
  '5': {
    title: 'When to See a Paediatric Urologist for Your Child',
    author: 'Dr. Vinish Kumar Singh',
    category: 'Paediatric Urology',
    image: '/images/blog/blog-5.jpg',
    content: `
      <p>Children can experience a range of urological conditions that require specialized care. Knowing when to see a paediatric urologist can help ensure your child receives timely and appropriate treatment.</p>
      <h3>Common Conditions in Children</h3>
      <ul>
        <li><strong>Bedwetting (Nocturnal Enuresis):</strong> If your child continues to wet the bed after age 6-7, a urologist can help.</li>
        <li><strong>Undescended Testicles:</strong> If one or both testicles haven't descended by 6 months of age, medical evaluation is needed.</li>
        <li><strong>Urinary Tract Infections (UTIs):</strong> Recurrent UTIs in children may indicate underlying issues.</li>
        <li><strong>Hypospadias:</strong> A condition where the urethral opening is on the underside of the penis.</li>
        <li><strong>Vesicoureteral Reflux:</strong> Urine flows backward from the bladder to the kidneys.</li>
      </ul>
      <h3>Signs Your Child Needs to See a Urologist</h3>
      <ul>
        <li>Frequent or painful urination</li>
        <li>Blood in the urine</li>
        <li>Inability to control urine</li>
        <li>Abnormal genital appearance</li>
        <li>Recurrent UTIs</li>
      </ul>
      <h3>What to Expect</h3>
      <p>Paediatric urologists are specially trained to address the unique needs of children. They use child-friendly approaches and age-appropriate explanations to ensure your child feels comfortable during the visit.</p>
    `
  },
  '6': {
    title: 'Advances in Reconstructive Urology: What\'s New?',
    author: 'Dr. Vinish Kumar Singh',
    category: 'Reconstructive Urology',
    image: '/images/blog/blog-6.jpg',
    content: `
      <p>Reconstructive urology has seen remarkable advances in recent years. These innovations are transforming patient care and improving outcomes for those with complex urological conditions.</p>
      <h3>Robotic-Assisted Surgery</h3>
      <p>Robotic systems have revolutionized reconstructive urology, offering greater precision and control during delicate procedures. Benefits include shorter hospital stays, reduced pain, and faster recovery times.</p>
      <h3>Buccal Mucosa Graft Urethroplasty</h3>
      <p>This technique uses tissue from the inner cheek (buccal mucosa) to repair urethral strictures. It has become the gold standard for complex urethral reconstruction due to its excellent tissue compatibility and long-term success rates.</p>
      <h3>Artificial Urinary Sphincter</h3>
      <p>Advances in artificial urinary sphincter technology have improved the management of severe stress urinary incontinence. Modern devices are more durable and offer better patient outcomes.</p>
      <h3>Male Sling Procedures</h3>
      <p>Male sling procedures have evolved to provide effective treatment for mild to moderate stress urinary incontinence. These minimally invasive techniques offer a less invasive alternative to traditional approaches.</p>
      <h3>Penile Prosthesis</h3>
      <p>Newer penile prostheses are more reliable and natural-feeling. They provide a permanent solution for men with severe erectile dysfunction who have not responded to other treatments.</p>
      <h3>The Future of Reconstructive Urology</h3>
      <p>Emerging technologies like tissue engineering and stem cell therapy hold promise for the future of reconstructive urology. These innovations may offer even more effective and less invasive treatment options in the coming years.</p>
    `
  }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogs();
        // API se agar data mila toh use karo, nahi toh fallback se
        const found = data.find((b) => b._id === id);
        if (found) {
          setBlog(found);
        } else if (FALLBACK_BLOG_DATA[id]) {
          setBlog(FALLBACK_BLOG_DATA[id]);
        } else {
          setError('Blog not found');
        }
        setLoading(false);
      } catch (err) {
        // Agar API fail ho toh fallback use karo
        if (FALLBACK_BLOG_DATA[id]) {
          setBlog(FALLBACK_BLOG_DATA[id]);
        } else {
          setError('Failed to load blog');
        }
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#64748B]">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1E293B]">Blog not found</h2>
          <Link to="/blog" className="text-[#5DA9B3] hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-20">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .b-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .b-body { font-family: 'Inter', sans-serif; }

        @keyframes b-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .b-animate { animation: b-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .b-animate-1 { animation-delay: 0.05s; }
        .b-animate-2 { animation-delay: 0.15s; }
        .b-animate-3 { animation-delay: 0.25s; }

        @media (prefers-reduced-motion: reduce) {
          .b-animate { animation: none; }
        }

        .blog-content > p:first-of-type::first-letter {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 3.4rem;
          line-height: 0.85;
          float: left;
          padding: 0.05em 0.1em 0 0;
          color: #08404D;
        }

        .blog-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #08404D;
          margin: 2.25rem 0 0.9rem 0;
          padding-left: 0.9rem;
          border-left: 3px solid #5DA9B3;
        }
        .blog-content p {
          font-family: 'Inter', sans-serif;
          color: #45525C;
          font-size: 1.03rem;
          line-height: 1.85;
          margin-bottom: 1.1rem;
        }
        .blog-content ul {
          margin: 0.5rem 0 1.5rem 0;
          padding: 1.1rem 1.25rem 1.1rem 2rem;
          background: #F4FAFB;
          border-radius: 12px;
        }
        .blog-content ul li {
          font-family: 'Inter', sans-serif;
          color: #45525C;
          font-size: 1.03rem;
          line-height: 1.8;
          margin-bottom: 0.6rem;
        }
        .blog-content ul li:last-child { margin-bottom: 0; }
        .blog-content ul li::marker {
          color: #5DA9B3;
        }
        .blog-content ul li strong {
          color: #08404D;
          font-weight: 600;
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 b-body text-sm font-semibold b-animate"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#5DA9B3]/10 group-hover:bg-[#5DA9B3]/20 transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform duration-300" size={11} />
          </span>
          Back to Blog
        </Link>

        <article className="bg-white rounded-3xl shadow-xl shadow-[#08404D]/5 border border-[#5DA9B3]/10 overflow-hidden b-animate b-animate-1">

          <div className="relative">
            <img
              src={blog.image || 'https://via.placeholder.com/1200x400/5DA9B3/FFFFFF?text=Blog'}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x400/5DA9B3/FFFFFF?text=Blog';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08404D]/70 via-[#08404D]/10 to-transparent" />

            <span className="absolute top-5 left-5 inline-flex items-center bg-white/95 backdrop-blur-sm text-[#08404D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
              {blog.category || 'General'}
            </span>

            <h1 className="b-display absolute bottom-5 left-5 right-5 md:left-8 md:right-8 text-2xl md:text-4xl font-semibold text-white leading-tight drop-shadow-sm">
              {blog.title}
            </h1>
          </div>

          <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">

            <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-6 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#08404D] text-white">
                <FaUserMd size={16} />
              </span>
              <div>
                <p className="b-body text-sm font-semibold text-[#1E293B]">Dr. Vinish Kumar Singh</p>
                <p className="b-body text-xs text-[#94A3B8]">Urologist</p>
              </div>
            </div>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content || 'No content available.' }}
            />

          </div>
        </article>

        <div className="mt-8 text-center b-animate b-animate-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#08404D] hover:text-[#5DA9B3] transition-colors b-body text-sm font-semibold"
          >
            <FaArrowLeft size={12} />
            Back to all articles
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;