// Data structure for Categories and their associated Feature Pills
export const featureCategories = [
  {
    id: 'ai_exams',
    name: 'AI & Examinations',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    id: 'hardware',
    name: 'Biometrics & NFC',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m3.44-2.049A9.97 9.97 0 0 0 14 11a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 1.636.393 3.18 1.09 4.542"/><path d="M16 11a8 8 0 0 0-8-8 8 8 0 0 0-8 8c0 1.93.684 3.702 1.83 5.093"/><path d="M8 11a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4Z"/></svg>`
  },
  {
    id: 'academics',
    name: 'Academics & Reports',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`
  },
  {
    id: 'finance',
    name: 'Finance & Payments',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`
  },
  {
    id: 'operations',
    name: 'Operations & Portals',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
];

export const allFeaturePills = [
  // High selling & direct names
  { name: 'AI INTEGRATION', category: 'ai_exams' },
  { name: 'AI EXAM QUESTIONS MAKER', category: 'ai_exams' },
  { name: 'ONLINE CBT EXAMS', category: 'ai_exams' },

  { name: 'FINGERPRINT ATTENDANCE', category: 'hardware' },
  { name: 'NFC STUDENT CARD', category: 'hardware' },
  { name: 'STUDENT WALLET', category: 'hardware' },

  { name: 'AUTOMATED REPORT CARDS', category: 'academics' },
  { name: 'LIVE MASTER BROADSHEETS', category: 'academics' },
  { name: 'TIMETABLE GENERATOR', category: 'academics' },
  { name: 'STUDENT PROMOTION ENGINE', category: 'academics' },

  { name: 'STUDENT CARD PURCHASE', category: 'finance' },
  { name: 'POS AND VENDOR MANAGEMENT', category: 'finance' },
  { name: 'CASHLESS CANTEEN', category: 'finance' },
  { name: 'PARENT SPENDING LIMITS', category: 'finance' },
  { name: 'ONLINE FEE PAYMENTS', category: 'finance' },
  { name: 'STAFF PAYROLL', category: 'finance' },

  { name: 'PARENT MOBILE PORTAL', category: 'operations' },
  { name: 'INSTANT SMS & EMAIL ALERTS', category: 'operations' },
  { name: 'SCHOOL BUS TRACKING', category: 'operations' },
  { name: 'MULTI-CAMPUS MANAGEMENT', category: 'operations' }
];

export function renderFeaturesGrid() {
  const categoryButtonsHtml = featureCategories
    .map(
      (cat) => `
      <button 
        type="button" 
        data-cat-id="${cat.id}" 
        class="cat-filter-btn flex items-center justify-center p-2.5 sm:p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
        title="${cat.name}"
      >
        ${cat.iconSvg}
      </button>
    `
    )
    .join('');

  const pillsHtml = allFeaturePills
    .map(
      (pill) => `
      <span 
        data-category="${pill.category}" 
        class="feature-pill inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-[13px] font-mono font-medium tracking-wide bg-white border border-gray-200 text-gray-700 shadow-xs transition-all duration-300 select-none"
      >
        ${pill.name}
      </span>
    `
    )
    .join('');

  return `
    <section id="features" class="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Copy -->
          <div class="lg:col-span-5 text-left">
            <span class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EE5A31] block mb-3">
              Integrated Architecture
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
              <span class="text-[#1D2E9D]">There's a smarter way to run</span> <span class="text-[#EE5A31]">modern schools</span>
            </h2>
            <p class="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              SchoolPilot gives your administration 16+ enterprise modules in a single seamless platform. Automate attendance, exams, grading, payments, and communications with speed and precision.
            </p>
          </div>

          <!-- Right Column: Interactive Category Filter & Feature Cloud -->
          <div class="lg:col-span-7 flex flex-col items-center lg:items-end w-full">
            
            <!-- Floating Pill Bar with Category Icons (Deep Navy Blue) -->
            <div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#0B1130] shadow-xl border border-[#162052] mb-8 sm:mb-10">
              ${categoryButtonsHtml}
            </div>

            <!-- Feature Pills Cloud -->
            <div id="feature-cloud" class="flex flex-wrap justify-center lg:justify-end gap-2.5 sm:gap-3 max-w-2xl">
              ${pillsHtml}
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initFeaturesGrid() {
  const catButtons = document.querySelectorAll('.cat-filter-btn');
  const pills = document.querySelectorAll('.feature-pill');

  function highlightCategory(activeCatId) {
    pills.forEach((pill) => {
      const pillCat = pill.getAttribute('data-category');
      if (!activeCatId) {
        // Reset all to standard visible
        pill.classList.remove('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.add('opacity-100');
      } else if (pillCat === activeCatId) {
        // Active / Highlighted state
        pill.classList.remove('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.add('opacity-100', 'bg-white', 'text-[#1D2E9D]', 'shadow-md', 'border-[#1D2E9D]/40', 'scale-[1.02]');
      } else {
        // Dimmed state
        pill.classList.add('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.remove('opacity-100', 'text-[#1D2E9D]', 'shadow-md', 'border-[#1D2E9D]/40', 'scale-[1.02]');
      }
    });

    catButtons.forEach((btn) => {
      const btnCat = btn.getAttribute('data-cat-id');
      if (btnCat === activeCatId) {
        btn.classList.add('text-white', 'bg-white/20', 'scale-110');
        btn.classList.remove('text-gray-400');
      } else {
        btn.classList.remove('text-white', 'bg-white/20', 'scale-110');
        btn.classList.add('text-gray-400');
      }
    });
  }

  // Hover ONLY on icons in the black bar
  catButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      const catId = btn.getAttribute('data-cat-id');
      highlightCategory(catId);
    });

    btn.addEventListener('mouseleave', () => {
      highlightCategory(null);
    });
  });
}
