import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#E8F8FC] pt-24 pb-16">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ap-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .ap-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADING ===== */}
        <div className="text-center mb-12">
          <div className="ap-body inline-block bg-[#48CAE4]/10 text-[#48CAE4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border border-[#48CAE4]/20">
            About Dr. Vinish
          </div>
          <h1 className="ap-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#1E293B]">Dr. Vinish</span>{' '}
            <span className="text-[#48CAE4]">Kumar Singh</span>
          </h1>
          <div className="w-24 h-1 bg-[#48CAE4] mx-auto mt-4 rounded-full"></div>
          <p className="ap-body text-[#64748B] text-sm md:text-base max-w-2xl mx-auto mt-4">
            Dedicated to providing exceptional urological care with compassion and precision
          </p>
        </div>

        {/* ===== GRID: LEFT IMAGE + RIGHT TEXT ===== */}
        <div className="grid md:grid-cols-5 gap-10 items-start mb-12">
          
          {/* ===== LEFT: IMAGE + Associate Professor ===== */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#48CAE4]/10 rounded-3xl blur-2xl group-hover:opacity-70 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-[1.02] transition duration-500">
                <img 
                  src="/images/doctor/dr-vinish.jpg" 
                  alt="Dr. Vinish Kumar Singh" 
                  className="w-full max-w-sm md:max-w-md h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/48CAE4/FFFFFF?text=Dr.+Vinish';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white shadow-xl rounded-xl px-4 py-2.5 flex items-center gap-2 border border-[#48CAE4]/20">
                <span className="text-[#48CAE4] text-lg">✦</span>
                <span className="ap-body text-xs font-semibold text-[#1E293B]">20+ Years Experience</span>
              </div>
            </div>

            <div className="mt-5 w-full bg-white p-5 rounded-2xl border border-[#48CAE4]/20 shadow-lg">
              <h2 className="ap-display text-base font-bold text-[#1E293B] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
                Dr. Vinish Kumar Singh
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <span className="text-[#48CAE4] mt-1">▸</span>
                  <span className="ap-body text-[#1E293B]">Associate Professor at <span className="text-[#48CAE4] font-medium">TSM Medical College</span> <span className="text-[#48CAE4] text-xs font-medium">since 2017</span></span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <span className="text-[#48CAE4] mt-1">▸</span>
                  <span className="ap-body text-[#1E293B]">Consultant Urologist at <span className="text-[#48CAE4] font-medium">SKD Kanpur Road, Lucknow</span></span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <span className="text-[#48CAE4] mt-1">▸</span>
                  <span className="ap-body text-[#1E293B]">Consultant Urologist at <span className="text-[#48CAE4] font-medium">Ajanta Hospital, Alambagh, Lucknow</span></span>
                </li>
              </ul>
            </div>
          </div>

          {/* ===== RIGHT: TEXT ===== */}
          <div className="md:col-span-3 space-y-5">
            
            <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="ap-body text-[#1E293B] text-sm md:text-base leading-relaxed">
                Dr. Vinish Kumar Singh is a Consultant Urologist, Andrologist and Kidney Transplant Surgeon. 
                Dr. Vinish Kumar Singh is a Urologist practicing in Lucknow, specialized in 
                <strong className="text-[#48CAE4]"> Endourology, Laparoscopic Urology, Reconstructive Urology and Andrology</strong>. 
                He is currently attached to <strong className="text-[#48CAE4]">TS Mishra Hospital, Lucknow</strong>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="ap-body text-[#1E293B] text-sm md:text-base leading-relaxed">
                Dr. Vinish is a young, dynamic and leading Urologist and Renal Transplant Surgeon in Lucknow. 
                Dr. Vinish obtained his MBBS degree from the prestigious 
                <strong className="text-[#48CAE4]"> King George Medical University, Lucknow (U.P.)</strong>, 
                in the year 2007. He did his MS (General Surgery) at 
                <strong className="text-[#48CAE4]"> Govt. Medical College, Amritsar (Punjab)</strong>, 
                in the year 2012. Thereafter he obtained the MCh (Urology) degree from 
                <strong className="text-[#48CAE4]"> Institute of Nephro-Urology, Bangalore</strong> in 2017.
              </p>
            </div>

            <div className="bg-[#48CAE4]/5 p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="ap-body text-[#1E293B] text-sm md:text-base leading-relaxed">
                Dr. Vinish has participated in numerous medical conferences and attended a large number of workshops, 
                courses and continuing medical education (CME) programmes pertaining to the field of Urology and related areas. 
                His specialty lies in dealing with complex reconstructive procedures like managing pelvic fracture and 
                urethral distraction defects, Artificial urethral sphincter implantation, bladder neck reconstruction and 
                Buccal mucosa graft urethroplasty. His proficiency in Paediatric urology, especially in Neonatal and infant 
                pyeloplasties, ureteric reimplantation, Hypospadias repair; is highly appreciated by his peers.
              </p>
            </div>

          </div>

        </div>

        {/* ===== SECTION 1 ===== */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Academic Qualification
            </h2>
            <div className="space-y-4">
              {[
                { degree: 'MCh (Urology)', year: '2017', institute: 'Institute Of Nephro-Urology, Bangalore' },
                { degree: 'M.S. (Gen. Surgery)', year: '2012', institute: 'Govt. Medical College, Amritsar' },
                { degree: 'M.B.B.S.', year: '2007', institute: 'King George Medical University, Lucknow' },
                { degree: 'Intermediate', year: '1999', institute: 'CBSE Board, Gaya' },
                { degree: 'High School', year: '1997', institute: 'CBSE Board, Lucknow' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 border-b border-[#48CAE4]/10 pb-3 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <span className="text-[#48CAE4] text-sm mt-1">✦</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="ap-body text-sm font-bold text-[#1E293B]">{item.degree}</span>
                      <span className="ap-body text-xs font-medium text-white bg-[#48CAE4] px-2.5 py-0.5 rounded-full">{item.year}</span>
                    </div>
                    <p className="ap-body text-sm text-[#64748B] mt-0.5">{item.institute}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Work Experience
            </h2>
            <div className="space-y-4">
              {[
                { role: 'Intern', institution: 'G.M. & Associated Hospital Lucknow', duration: '1 year' },
                { role: 'Junior Resident I, II & III', institution: 'Dept. of General Surgery, Govt Medical College, Amritsar', duration: '3 years' },
                { role: 'Senior Resident', institution: 'Dept. of General Surgery, Eras Medical College, Lucknow', duration: '1 year 6 months' },
                { role: 'Post Graduate Student', institution: 'Dept. of Urology, Institute of Nephro-urology, Bangalore', duration: '3rd year' },
              ].map((item, index) => (
                <div key={index} className="border-b border-[#48CAE4]/10 pb-3 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <span className="text-[#48CAE4] text-sm">✦</span>
                    <span className="ap-body text-sm font-bold text-[#1E293B]">{item.role}</span>
                  </div>
                  <p className="ap-body text-sm text-[#64748B] ml-5">{item.institution}</p>
                  <p className="ap-body text-xs text-[#48CAE4] font-medium ml-5">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Academic Journey
            </h2>
            <div className="space-y-4">
              {[
                { title: 'School Level', year: '1997 – 1999', details: ['Passed High School with Ist Division (70%)', 'Passed Intermediate with Ist Division (70%) with HONOURS'] },
                { title: 'Undergraduation', year: '2002 – 2007', details: ['Joined KGMU, Lucknow in 2002', 'Passed all exams in first attempt', 'Obtained Honour in Biochemistry'] },
                { title: 'Postgraduation', year: '2009 – 2012', details: ['Qualified ALL INDIA Pre P.G.', 'Joined M.S. (Gen Surgery) at Govt Medical College, Amritsar'] },
                { title: 'Teaching Experience', year: '2012 – 2014', details: ['Participated in U.G & P.G Teaching Programmes', 'Worked as Senior Resident at Eras Medical College, Lucknow'] },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-[#48CAE4]/10 pb-3 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="ap-body text-sm font-bold text-[#1E293B]">{item.title}</span>
                    <span className="ap-body text-xs text-[#48CAE4] font-medium bg-[#48CAE4]/10 px-2 py-0.5 rounded-full">{item.year}</span>
                  </div>
                  <ul className="space-y-0.5 mt-1">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <span className="text-[#48CAE4] mt-1">•</span>
                        <span className="ap-body">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Thesis / Research Work
            </h2>
            <div className="space-y-3">
              {[
                'Thesis on "Evaluation of 100 Cases of Lump Breast" during P.G.',
                'Case report in JEMDS: Septate Gall Bladder (DOI:10.14260/jemds/2014/1986)',
                'Case report in SELSI Newsletter: Congenital Right Hydroureter (Nov 2012, No 1, Vol 7)',
                'Case report in SELSI Newsletter: Tuberculous Stricture of Urethra (Nov 2013, No 1, Vol 9)',
              ].map((item, index) => (
                <div key={index} className="hover:bg-[#48CAE4]/5 p-3 rounded-lg transition-all duration-200 border-b border-[#48CAE4]/10 last:border-0">
                  <p className="ap-body text-sm text-[#1E293B] leading-relaxed">
                    <span className="font-bold text-[#48CAE4]">{index+1}.</span> {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SECTION 3 ===== */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Conferences &amp; Courses
            </h2>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {[
                'International Conference, KGMC, Lucknow 2003 (Won First prize)',
                'ASICON 2011, COCHIN (Presented paper)',
                'Karnataka Urology Society conference, Bangalore 2014',
                'Urology Update 2014, Bangalore',
                'Workshop on UDS & ESWL, Bangalore 2015',
                'USICON 2016, Hyderabad (Presented paper)',
                'AUA USI Board Review course 2016, Hyderabad',
                'SZUICON 2016, Pondicherry (Presented poster)',
                'KUACON 2016, Goa (Presented prize paper)',
                'USICON 2017, Mumbai (Presented poster)',
                'Selected for AUA 2017 by USI as Resident Trainee',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-[#48CAE4]/10 pb-2 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <span className="text-[#48CAE4] text-sm mt-0.5">✦</span>
                  <span className="ap-body text-sm text-[#1E293B] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Membership of Organizations
            </h2>
            <div className="space-y-3">
              {[
                'Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)',
                'Urology Society of India (USI)',
                'South Zone Urology Society of India (SZUSI)',
                'Karnataka Urology Association',
                'Bangalore Urological Society',
                'American Urology Association (AUA)',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-[#48CAE4]/10 pb-2 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <span className="text-[#48CAE4] text-sm mt-0.5">✦</span>
                  <span className="ap-body text-sm text-[#1E293B]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SECTION 4 ===== */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              Personal Skills
            </h2>
            <div className="space-y-3">
              {[
                'Team worker with patience, humour and good communication skills.',
                'Friendly, motivating and respect for the hierarchy.',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-[#48CAE4]/10 pb-2 last:border-0 last:pb-0 hover:bg-[#48CAE4]/5 p-2 rounded-lg transition-all duration-200">
                  <span className="text-[#48CAE4] text-sm mt-0.5">✦</span>
                  <span className="ap-body text-sm text-[#1E293B]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#48CAE4]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="ap-display text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#48CAE4] rounded-full"></span>
              References
            </h2>
            <div className="space-y-4">
              <div className="hover:bg-[#48CAE4]/5 p-3 rounded-lg transition-all duration-200 border-b border-[#48CAE4]/10 last:border-0">
                <p className="ap-body text-sm font-bold text-[#1E293B]">Prof. Keshavamurthy. R</p>
                <p className="ap-body text-sm text-[#64748B]">Professor and Head, Department of Urology, Institute of Nephrology, Bangalore</p>
              </div>
              <div className="hover:bg-[#48CAE4]/5 p-3 rounded-lg transition-all duration-200">
                <p className="ap-body text-sm font-bold text-[#1E293B]">Prof. Shivalingaiah. M</p>
                <p className="ap-body text-sm text-[#64748B]">Professor, Department of Urology, Institute of Nephrology, Bangalore</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PERSONAL PHILOSOPHY ===== */}
        <div className="mt-12 relative">
          <div className="absolute -top-4 left-8 text-[#48CAE4]/20 text-6xl font-serif">"</div>
          <div className="bg-white p-8 rounded-3xl border border-[#48CAE4]/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-[#48CAE4] rounded-full"></span>
              <h2 className="ap-display text-xl font-bold text-[#1E293B]">My Philosophy</h2>
            </div>
            <p className="ap-body text-[#1E293B] text-sm md:text-base leading-relaxed italic pl-4 border-l-4 border-[#48CAE4]/30">
              "The best way to describe myself would be to say that I was brought up in an environment that upheld 
              simplicity and hard work, and always taught me to respect age and experience. I believe in striving hard 
              despite of adversities, and depend on my positive thinking to overcome difficult situations. I have a 
              strong desire to provide the best possible care for my patients through pursuit of academic and surgical 
              excellence. Nonetheless, I keep in mind that the human side of a caregiver is paramount in aiding the 
              healing process."
            </p>
          </div>
        </div>

      </div>

      {/* ===== CUSTOM SCROLLBAR ===== */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #E8F8FC;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #48CAE4;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1E4A7A;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;