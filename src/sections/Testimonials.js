export const testimonials = [
  // Column 1
  [
    {
      id: 1,
      school: 'Greenwood International',
      quote: '"SchoolPilot transformed how we generate end-of-term broadsheets and report cards. What used to take our teachers two weeks is now calculated automatically in under 5 minutes."',
      author: 'Dr. Stella Adeleke',
      role: 'Principal, Greenwood International',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      school: 'Apex Model College',
      quote: '"The Smart NFC attendance and parent SMS notification gave our parents complete peace of mind. The hardware integration works flawlessly at the main gate every morning."',
      author: 'Engr. Tunde Bakare',
      role: 'ICT Director, Apex Model College',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    }
  ],
  // Column 2
  [
    {
      id: 3,
      school: 'Cambridge Academy',
      quote: '"Managing fee collection and arrears was our biggest administrative bottleneck. With SchoolPilot automated billing and Paystack gateway, on-time fee recovery hit 98% this term."',
      author: 'Mrs. Folashade Okonjo',
      role: 'Head Bursar, Cambridge Academy',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      school: 'Beacon Hill Prep',
      quote: '"The student digital wallet and campus POS stopped cash losses completely in our cafeteria. Parents set daily spending limits directly on their mobile portal."',
      author: 'Alhaji Musa Danjuma',
      role: 'School Proprietor, Beacon Hill Prep',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    }
  ],
  // Column 3
  [
    {
      id: 5,
      school: 'St. Claire High School',
      quote: '"The AI CBT exam maker and auto-grading engine allowed us to conduct seamless mock exams for over 600 students without printing a single sheet of paper."',
      author: 'Chinedu Eze',
      role: 'Examination Officer, St. Claire High',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      school: 'Horizon Grammar',
      quote: '"SchoolPilot is by far the most reliable school management system we have used. Zero server crashes, instant support, and teachers genuinely love the clean interface."',
      author: 'Mrs. Victoria Cole',
      role: 'Vice Principal, Horizon Grammar',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
    }
  ]
];

export function renderTestimonials() {
  const columnsHtml = testimonials
    .map(
      (col) => `
      <div class="flex flex-col gap-6">
        ${col
          .map(
            (item) => `
          <div class="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs hover:shadow-md hover:border-[#1D2E9D]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs font-semibold text-gray-400 mb-4">
                <span>${item.school}</span>
                <span class="text-[#EE5A31] text-sm">★★★★★</span>
              </div>
              <p class="text-xs sm:text-[13px] font-mono text-gray-700 leading-relaxed font-normal mb-6">
                ${item.quote}
              </p>
            </div>
            
            <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
              <img 
                src="${item.avatar}" 
                alt="${item.author}" 
                class="w-10 h-10 rounded-full object-cover border border-gray-200"
                loading="lazy"
              />
              <div>
                <h4 class="text-xs sm:text-sm font-bold text-gray-900">${item.author}</h4>
                <p class="text-[11px] text-gray-500 font-medium">${item.role}</p>
              </div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `
    )
    .join('');

  return `
    <section id="testimonials" class="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <!-- Header (Centralized & Styled with Brand Colors) -->
        <div class="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span class="text-[#1D2E9D]">School Pilot have over 100+ users,</span> <span class="text-[#EE5A31]">what they have to say about us.</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            See what principals, administrators, and teachers have to say about running on SchoolPilot.
          </p>
        </div>

        <!-- 3-Column Masonry Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          ${columnsHtml}
        </div>

      </div>
    </section>
  `;
}

export function initTestimonials() {
  // Testimonial interactivity if needed
}
