import { useState, useRef, useEffect } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaClock, FaStethoscope, FaCheckCircle, FaCalendarCheck, FaChevronDown, FaCheck, FaLock } from 'react-icons/fa'
import { bookAppointment } from '../../api';
function BookAppointment() {
  const [formData, setFormData] = useState({
    treatment: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const treatmentRef = useRef(null)

  const treatmentOptions = [
    'Kidney Stones',
    'Prostate Enlargement',
    'Erectile Dysfunction',
    'Female Overactive Bladder',
    'Paediatric Urology',
    'Reconstructive Urology',
    'Other'
  ]

  const timeSlotGroups = [
    {
      label: 'Morning',
      slots: ['9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm']
    },
    {
      label: 'Afternoon',
      slots: ['1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm']
    },
    {
      label: 'Evening',
      slots: ['5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm']
    }
  ]

  const isDateUnlocked = Boolean(formData.treatment)
  const isSlotsUnlocked = isDateUnlocked && Boolean(formData.date)
  const isContactUnlocked = isSlotsUnlocked && Boolean(formData.time)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (treatmentRef.current && !treatmentRef.current.contains(e.target)) {
        setIsTreatmentOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isDateUnlocked && (formData.date || formData.time)) {
      setFormData((prev) => ({ ...prev, date: '', time: '' }))
    }
  }, [isDateUnlocked])

  useEffect(() => {
    if (!isSlotsUnlocked && formData.time) {
      setFormData((prev) => ({ ...prev, time: '' }))
    }
  }, [isSlotsUnlocked])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleTimeSelect = (slot) => {
    setFormData({
      ...formData,
      time: slot
    })
  }

  const handleTreatmentSelect = (option) => {
    setFormData({
      ...formData,
      treatment: option
    })
    setIsTreatmentOpen(false)
  }

  // ✅ API CALL ADD KIYA HAI
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await bookAppointment(formData)
      if (result.message) {
        setIsSubmitted(true)
        setFormData({
          treatment: '',
          date: '',
          time: '',
          name: '',
          phone: '',
          email: '',
          message: ''
        })
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const fieldWrap = (name) =>
    `ba-input-wrapper ${focusedField === name ? 'is-focused' : ''}`

  return (
    <section className="ba-section">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ba-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ba-body { font-family: 'Inter', sans-serif; }

        .ba-section {
          padding: 60px 20px;
          background-color: #F4FAFB;
        }

        .ba-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(93, 169, 179, 0.12);
          box-shadow: 0 20px 50px -20px rgba(8, 64, 77, 0.18);
        }

        .ba-step {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(93, 169, 179, 0.15);
        }
        .ba-step:first-child {
          border-top: none;
          padding-top: 0;
        }
        .ba-step.is-locked { opacity: 0.5; }

        .ba-step-heading {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .ba-step-number {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          background: #5DA9B3;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ba-step.is-locked .ba-step-number {
          background: #CBD5E1;
        }
        .ba-step-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1E293B;
        }

        .ba-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 1.5px solid #E2E8F0;
          border-radius: 0.85rem;
          background: #F8FBFC;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .ba-input-wrapper.is-focused {
          border-color: #5DA9B3;
          background: white;
          box-shadow: 0 0 0 4px rgba(93, 169, 179, 0.12);
        }
        .ba-input-wrapper .ba-icon {
          padding-left: 0.9rem;
          color: #5DA9B3;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .ba-input-wrapper input,
        .ba-input-wrapper select,
        .ba-input-wrapper textarea {
          width: 100%;
          padding: 0.7rem 0.9rem;
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          color: #1E293B;
        }
        .ba-input-wrapper textarea { resize: vertical; }
        .ba-input-wrapper select { appearance: none; cursor: pointer; }

        .ba-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 0.35rem;
          display: block;
          font-family: 'Inter', sans-serif;
        }
        .ba-label .required { color: #D62828; }

        .ba-submit-btn {
          position: relative;
          overflow: hidden;
        }
        .ba-submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: translateX(-120%);
          transition: transform 0.6s ease;
        }
        .ba-submit-btn:hover::after { transform: translateX(120%); }

        .ba-toast {
          animation: baSlideDown 0.5s ease-out forwards;
        }
        @keyframes baSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ba-slot-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #1E293B;
          background: #F1F5F9;
          border: 1.5px solid transparent;
          border-radius: 0.7rem;
          padding: 0.65rem 0.5rem;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
        }
        .ba-slot-btn:hover {
          background: #E7F1F2;
          transform: translateY(-1px);
        }
        .ba-slot-btn.is-selected {
          background: #5DA9B3;
          border-color: #08404D;
          color: white;
        }

        .ba-slot-group-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #5DA9B3;
          margin-bottom: 0.5rem;
        }

        .ba-dropdown {
          position: relative;
        }
        .ba-dropdown-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          background: transparent;
          border: none;
          outline: none;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          color: #1E293B;
          cursor: pointer;
          text-align: left;
        }
        .ba-dropdown-trigger.is-placeholder { color: #94A3B8; }
        .ba-dropdown-chevron {
          color: #5DA9B3;
          font-size: 0.7rem;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .ba-dropdown-chevron.is-open { transform: rotate(180deg); }

        .ba-dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: white;
          border: 1.5px solid rgba(93, 169, 179, 0.25);
          border-radius: 0.85rem;
          box-shadow: 0 16px 40px -12px rgba(8, 64, 77, 0.25);
          padding: 0.4rem;
          z-index: 20;
          max-height: 260px;
          overflow-y: auto;
          animation: baDropdownOpen 0.15s ease-out;
        }
        @keyframes baDropdownOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ba-dropdown-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          width: 100%;
          padding: 0.6rem 0.7rem;
          border: none;
          background: transparent;
          border-radius: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #1E293B;
          text-align: left;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .ba-dropdown-option:hover { background: #F1F9FA; }
        .ba-dropdown-option.is-selected {
          background: rgba(93, 169, 179, 0.1);
          color: #08404D;
          font-weight: 600;
        }
        .ba-dropdown-option .ba-check {
          color: #5DA9B3;
          font-size: 0.7rem;
        }

        .ba-locked-panel {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #F1F5F9;
          border: 1.5px dashed #CBD5E1;
          border-radius: 0.85rem;
          padding: 0.9rem 1rem;
        }
        .ba-locked-panel p {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #64748B;
        }

        .ba-step-reveal {
          animation: baSlideDown 0.4s ease-out forwards;
        }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div className="text-center mb-10">
          <div className="ba-body inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#5DA9B3]/20 rounded-full px-5 py-2 shadow-md mb-4">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5DA9B3] to-[#08404D] flex items-center justify-center text-white">
              <FaCalendarCheck className="text-xs" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5DA9B3]">Consultation</span>
          </div>

          <h2 className="ba-display text-3xl md:text-4xl font-medium text-[#1E293B]">
            Book an <span className="text-[#5DA9B3]">Appointment</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5DA9B3] to-[#F77F00] mx-auto mt-3 rounded-full"></div>
          <p className="ba-body text-sm text-[#64748B] mt-3">
            Schedule your consultation with Dr. Vinish Kumar Singh
          </p>
        </div>

        <div className="ba-card rounded-2xl p-6 md:p-10">

          {isSubmitted && (
            <div className="ba-toast mb-6 bg-[#2F9E68]/10 border border-[#2F9E68]/20 rounded-xl p-4 flex items-center gap-3">
              <FaCheckCircle className="text-[#2F9E68] text-xl flex-shrink-0" />
              <p className="ba-body text-sm text-[#1B5E3D] font-medium">Appointment booked successfully! We'll contact you soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Step 1: Treatment */}
            <div className="ba-step">
              <div className="ba-step-heading">
                <span className="ba-step-number">1</span>
                <span className="ba-step-title">Choose a treatment</span>
              </div>

              <div ref={treatmentRef} className="max-w-md">
                <label className="ba-label">
                  Treatment/Service <span className="required">*</span>
                </label>
                <div className={`ba-dropdown ${fieldWrap('treatment')}`}>
                  <FaStethoscope className="ba-icon" />
                  <button
                    type="button"
                    onClick={() => {
                      setIsTreatmentOpen((open) => !open)
                      setFocusedField('treatment')
                    }}
                    className={`ba-dropdown-trigger ${!formData.treatment ? 'is-placeholder' : ''}`}
                  >
                    <span>{formData.treatment || 'Select Treatment'}</span>
                    <FaChevronDown className={`ba-dropdown-chevron ${isTreatmentOpen ? 'is-open' : ''}`} />
                  </button>

                  {isTreatmentOpen && (
                    <div className="ba-dropdown-panel">
                      {treatmentOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleTreatmentSelect(option)}
                          className={`ba-dropdown-option ${formData.treatment === option ? 'is-selected' : ''}`}
                        >
                          <span>{option}</span>
                          {formData.treatment === option && <FaCheck className="ba-check" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input type="hidden" name="treatment" value={formData.treatment} required />
              </div>
            </div>

            {/* Step 2: Date */}
            <div className={`ba-step ${!isDateUnlocked ? 'is-locked' : ''}`}>
              <div className="ba-step-heading">
                <span className="ba-step-number">2</span>
                <span className="ba-step-title">Pick a date</span>
              </div>

              {isDateUnlocked ? (
                <div className="ba-step-reveal max-w-md">
                  <label className="ba-label">
                    Preferred Date <span className="required">*</span>
                  </label>
                  <div className={fieldWrap('date')}>
                    <FaCalendarAlt className="ba-icon" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="ba-locked-panel">
                  <FaLock className="text-[#94A3B8] text-xs flex-shrink-0" />
                  <p>Choose a treatment first to pick a date.</p>
                </div>
              )}
            </div>

            {/* Step 3: Time Slots */}
            <div className={`ba-step ${!isSlotsUnlocked ? 'is-locked' : ''}`}>
              <div className="ba-step-heading">
                <span className="ba-step-number">3</span>
                <span className="ba-step-title">Select a time slot</span>
              </div>

              {isSlotsUnlocked ? (
                <div className="ba-step-reveal space-y-4">
                  {timeSlotGroups.map((group) => (
                    <div key={group.label}>
                      <p className="ba-slot-group-label">{group.label}</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                        {group.slots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`ba-slot-btn ${formData.time === slot ? 'is-selected' : ''}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="ba-locked-panel">
                  <FaLock className="text-[#94A3B8] text-xs flex-shrink-0" />
                  <p>Pick a date above to see available time slots.</p>
                </div>
              )}
              <input type="hidden" name="time" value={formData.time} required />
            </div>

            {/* Step 4: Contact details */}
            <div className={`ba-step ${!isContactUnlocked ? 'is-locked' : ''}`}>
              <div className="ba-step-heading">
                <span className="ba-step-number">4</span>
                <span className="ba-step-title">Your details</span>
              </div>

              {isContactUnlocked ? (
                <div className="ba-step-reveal">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="ba-label">
                        Patient Name <span className="required">*</span>
                      </label>
                      <div className={fieldWrap('name')}>
                        <FaUser className="ba-icon" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="ba-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <div className={fieldWrap('phone')}>
                        <FaPhone className="ba-icon" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="ba-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <div className={fieldWrap('email')}>
                        <FaEnvelope className="ba-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="ba-label">
                      Message
                    </label>
                    <div className={fieldWrap('message')}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="4"
                        placeholder="Any specific concerns or questions..."
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ba-locked-panel">
                  <FaLock className="text-[#94A3B8] text-xs flex-shrink-0" />
                  <p>Select a time slot above to enter your contact details.</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!isContactUnlocked || loading}
              className="ba-submit-btn w-full mt-6 bg-gradient-to-r from-[#5DA9B3] to-[#08404D] hover:from-[#08404D] hover:to-[#5DA9B3] text-white py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <FaCalendarCheck size={16} />
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>

            <p className="ba-body text-xs text-[#64748B] text-center mt-3">
              <span className="text-[#D62828]">*</span> Required fields. We'll confirm your slot shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookAppointment