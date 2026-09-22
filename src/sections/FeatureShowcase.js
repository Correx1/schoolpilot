export const featureCards = [
  {
    id: 'cbt',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    category: 'Instant Assessments',
    title: 'Online CBT & AI Question Bank',
    description: 'Empower teachers with AI-assisted question generation, live student exam countdowns, auto-grading for MCQs, and instant result calculation.',
    linkText: 'Explore CBT Engine',
    linkHref: '#cbt',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'nfc',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    category: 'Smart Hardware',
    title: 'NFC Cards & Biometric Attendance',
    description: 'Hardware-level integration for USB/Bluetooth RFID tap cards and fingerprint scanners at gates, hostels, classrooms, and bus transit.',
    linkText: 'Explore Attendance',
    linkHref: '#attendance',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wallet',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    category: 'Cashless Campus',
    title: 'Student Digital Wallet & POS',
    description: 'Cashless cafeteria and bookstore purchases with daily spending caps, category restrictions, and instant biometric or PIN tap checkout.',
    linkText: 'Explore POS & Wallet',
    linkHref: '#wallet',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'reports',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>`,
    category: 'Pixel-Perfect Output',
    title: 'Multi Report Card Templates',
    description: 'Corporate, Elegant, Chart, Modern, and Classic A4 report cards calibrated for single-page printing with dynamic QR verification.',
    linkText: 'Explore Report Cards',
    linkHref: '#reports',
    imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'finance',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/></svg>`,
    category: 'Automated Bursary',
    title: 'School Fees & Online Billing',
    description: 'Dynamic class-aware billing, automated arrears calculation, payment gateway integration, and printable bank-grade receipts.',
    linkText: 'Explore Fee Management',
    linkHref: '#finance',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ai',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4"/><circle cx="12" cy="12" r="3"/></svg>`,
    category: 'Proactive Intelligence',
    title: 'AI At-Risk & Performance Insights',
    description: 'Smart AI engines scan cross-term grades and attendance anomalies to proactively flag struggling students before final exams.',
    linkText: 'Explore AI Analytics',
    linkHref: '#analytics',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  }
];

export function renderFeatureShowcase() {
  const cardsHtml = featureCards
    .map(
      (card, idx) => `
      <div class="flex flex-col justify-between p-8 sm:p-10 lg:p-12 bg-white hover:bg-gray-50/20 transition-colors duration-200 ${
        idx % 2 === 0 ? 'lg:border-r border-gray-200' : ''
      } ${idx < featureCards.length - 2 ? 'border-b border-gray-200' : (idx === featureCards.length - 2 ? 'border-b lg:border-b-0 border-gray-200' : '')}">
        
        <!-- Top Info Content -->
        <div>
          <!-- Mini Category Tag -->
          <div class="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-500 mb-3">
            <span class="text-gray-400">${card.categoryIcon}</span>
            <span>${card.category}</span>
          </div>

          <!-- Title -->
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
            ${card.title}
          </h3>

          <!-- Description -->
          <p class="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-4 max-w-lg">
            ${card.description}
          </p>

          <!-- Clean Text Link -->
          <a href="${card.linkHref}" class="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#1D2E9D] transition-colors mb-6">
            <span>${card.linkText}</span>
            <span class="text-gray-400 font-bold">›</span>
          </a>
        </div>

        <!-- Recessed Inset Card Frame (Seamlessly inside the card) -->
        <div class="w-full mt-2 p-2 sm:p-2.5 rounded-xl bg-gray-50/80 border border-gray-200/70 shadow-inner">
          <div class="w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-xs">
            <!-- Mini Chrome Header Bar -->
            <div class="flex items-center gap-1.5 px-3 py-2 bg-gray-100/90 border-b border-gray-200">
              <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            </div>
            <!-- Image Frame (Increased height) -->
            <div class="h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-gray-100">
              <img 
                src="${card.imageSrc}" 
                alt="${card.title} Screenshot" 
                class="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    `
    )
    .join('');

  return `
    <section id="features" class="bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto border-x border-gray-200/80">
        
        <!-- 2-Column Grid with exact border line dividers -->
        <div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-gray-200">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}

export function initFeatureShowcase() {
  // Any showcase-specific interactive scripts
}
