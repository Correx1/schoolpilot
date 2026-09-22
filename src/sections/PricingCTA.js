// Key modules and integrations for the pricing CTA
export const ctaModules = [
  {
    name: 'AI Exam Engine & CBT',
    category: 'Academics',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    name: 'Biometric & NFC Attendance',
    category: 'Hardware',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m3.44-2.049A9.97 9.97 0 0 0 14 11a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 1.636.393 3.18 1.09 4.542"/></svg>`
  },
  {
    name: 'Online Fee Gateway & POS',
    category: 'Finance',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`
  },
  {
    name: 'Multi Report card templates',
    category: 'Grading',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>`
  },
  {
    name: 'SMS & WhatsApp Dispatch',
    category: 'Messaging',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    name: 'Real-time GPS Fleet Tracker',
    category: 'Transport',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    name: 'Staff & Parent Portals',
    category: 'Community',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    name: 'Multi-Campus Central Hub',
    category: 'Administration',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  }
];

export function renderPricingCTA() {
  const moduleChipsHtml = ctaModules
    .map(
      (m) => `
      <div class="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-gray-200/90 rounded-xl shadow-xs hover:border-gray-300 transition-all text-left">
        <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
          ${m.icon}
        </div>
        <div>
          <div class="text-xs font-semibold text-gray-900 leading-tight">${m.name}</div>
          <div class="text-[11px] text-gray-500 font-medium">${m.category}</div>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section id="pricing" class="py-12 sm:py-16 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <div class="max-w-4xl mx-auto text-center space-y-8">
          
          <!-- Headline with Brand Colors -->
          <div class="space-y-3">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
              <span class="text-[#1D2E9D]">All types of modules &</span> <span class="text-[#EE5A31]">integrations</span>
            </h2>
            <p class="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Everything your institution needs to automate academics, billing, security, and school communication — all under one unified platform.
            </p>
          </div>

          <!-- Feature & Module Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            ${moduleChipsHtml}
          </div>

          <!-- CTA Actions -->
          <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="#contact" class="btn btn-primary btn-md gap-2 font-semibold shadow-md px-8 py-3.5 text-sm sm:text-base group w-full sm:w-auto">
              <span>Contact Us for Pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium pt-2">
            <span class="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Quick School Onboarding
            </span>
            <span class="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              24/7 Dedicated Support
            </span>
            <span class="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              99.9% Uptime Guarantee
            </span>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initPricingCTA() {
  // Pricing CTA initialized
}



