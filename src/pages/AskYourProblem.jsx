import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import { submitProblem } from '../api'; // ✅ API import

const AskYourProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ API CALL ADD KIYA HAI
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await submitProblem(formData);
      if (result.message) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fieldWrap = (name) =>
    `input-wrapper ${focusedField === name ? 'is-focused' : ''}`;

  return (
    <div className="min-h-screen bg-[#F4FAFB] pt-24 pb-16">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .a-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .a-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 1.5px solid #E2E8F0;
          border-radius: 0.85rem;
          background: #F8FBFC;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .input-wrapper.is-focused {
          border-color: #5DA9B3;
          background: white;
          box-shadow: 0 0 0 4px rgba(93, 169, 179, 0.12);
        }
        .input-wrapper .icon {
          padding-left: 0.9rem;
          color: #5DA9B3;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          color: #1E293B;
        }
        .input-wrapper textarea { resize: none; }

        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 0.35rem;
          display: block;
          font-family: 'Inter', sans-serif;
        }
        .form-label .required {
          color: #D62828;
        }

        .card-premium {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(93, 169, 179, 0.12);
          box-shadow: 0 20px 50px -20px rgba(8, 64, 77, 0.18);
        }

        .success-toast {
          animation: slideDown 0.5s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .send-btn {
          position: relative;
          overflow: hidden;
        }
        .send-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: translateX(-120%);
          transition: transform 0.6s ease;
        }
        .send-btn:hover::after { transform: translateX(120%); }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[#5DA9B3] hover:text-[#08404D] transition-colors mb-6 a-body text-sm font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={13} />
          Back to Home
        </Link>

        {/* HEADER */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#5DA9B3]/20 rounded-full px-6 py-2.5 shadow-lg mb-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5DA9B3] to-[#08404D] flex items-center justify-center text-white">
              <FaComment className="text-sm" />
            </div>
            <span className="a-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5DA9B3]">Get in Touch</span>
          </div>

          <h1 className="a-display text-4xl md:text-5xl font-medium text-[#1E293B]">
            Ask Your <span className="text-[#5DA9B3]">Problem</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5DA9B3] to-[#F77F00] mx-auto mt-3 rounded-full"></div>
          <p className="a-body text-sm text-[#64748B] mt-3 max-w-xl mx-auto">
            Fill in the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* FORM */}
        <div className="card-premium rounded-2xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>

          {isSubmitted && (
            <div className="success-toast mb-6 bg-[#2F9E68]/10 border border-[#2F9E68]/20 rounded-xl p-4 flex items-center gap-3">
              <FaCheckCircle className="text-[#2F9E68] text-xl flex-shrink-0" />
              <p className="a-body text-sm text-[#1B5E3D] font-medium">Your message has been sent successfully!</p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="form-label">
                Name <span className="required">*</span>
              </label>
              <div className={fieldWrap('name')}>
                <FaUser className="icon" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="form-label">
                Email <span className="required">*</span>
              </label>
              <div className={fieldWrap('email')}>
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="form-label">
                Phone <span className="required">*</span>
              </label>
              <div className={fieldWrap('phone')}>
                <FaPhone className="icon" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+91 00000 00000"
                  required
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="form-label">
                Please enter your subject <span className="required">*</span>
              </label>
              <div className={fieldWrap('subject')}>
                <FaComment className="icon" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Subject of your query"
                  required
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="form-label">
                Your Message <span className="required">*</span>
              </label>
              <div className={fieldWrap('message')}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="5"
                  placeholder="Please describe your problem in detail..."
                  required
                />
              </div>
            </div>

            {/* SEND BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="send-btn w-full bg-gradient-to-r from-[#5DA9B3] to-[#08404D] hover:from-[#08404D] hover:to-[#5DA9B3] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <FaPaperPlane size={16} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            <p className="a-body text-xs text-[#64748B] text-center mt-2">
              <span className="text-[#D62828]">*</span> Required fields. We'll respond within 24 hours.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AskYourProblem;