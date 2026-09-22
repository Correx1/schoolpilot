import logoImg from '../assets/schoolpilot-logo.png';

export function renderFooter() {
  return `
    <footer class="bg-white border-t border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80 relative">
        
        <!-- Top Row: Brand & Contact Info -->
        <div class="pt-12 sm:pt-14 pb-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20 border-b border-gray-100">
          
          <!-- Brand & Address -->
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <a href="/" class="inline-block">
              <img src="${logoImg}" alt="SchoolPilot Logo" class="h-11 sm:h-13 md:h-14 w-auto object-contain" />
            </a>
            <div class="h-5 w-px bg-gray-300 hidden sm:block"></div>
            <p class="text-xs sm:text-sm text-gray-500 font-normal">
              18 Oguta Road Onitsha, Anambra - Nigeria.
            </p>
          </div>

          <!-- Direct Phone & Email Badges -->
          <div class="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-gray-700">
            <a href="tel:+2349033221927" class="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>(+234) 903322 1927</span>
            </a>
            <a href="mailto:info@schoolpilot.online" class="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>info@schoolpilot.online</span>
            </a>
          </div>

        </div>

        <!-- Essential Links Row -->
        <nav class="py-5 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-gray-600 relative z-20">
          <a href="/about.html" class="hover:text-primary transition-colors">About Us</a>
          <a href="/contact.html" class="hover:text-primary transition-colors">Contact</a>
          <a href="/privacy.html" class="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/disclaimer.html" class="hover:text-primary transition-colors">Disclaimer</a>
          <a href="/terms.html" class="hover:text-primary transition-colors">Terms & Conditions</a>
        </nav>

        <!-- Center Watermark & Elevated Icon Showcase Section -->
        <div class="relative py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center overflow-hidden select-none">
          
          <!-- Massive Background Watermark Typography with 2 Brand Colors -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span class="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] font-black tracking-wider uppercase leading-none text-center">
              <span class="text-transparent bg-clip-text bg-linear-to-b from-primary/20 to-primary/5">SCHOOL</span><span class="text-transparent bg-clip-text bg-linear-to-b from-secondary/25 to-secondary/5">PILOT</span>
            </span>
          </div>

          <!-- Elevated Squircle Brand Icon Badge -->
          <div class="relative z-10 p-2 sm:p-2.5 rounded-3xl bg-white/90 backdrop-blur-md border border-gray-200/90 shadow-xl transition-transform hover:scale-105 duration-300">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B1130] flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
          </div>

        </div>

        <!-- Bottom Line -->
        <div class="py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-20">
          <div>
            &copy; ${new Date().getFullYear()} SchoolPilot Technologies. All rights reserved.
          </div>

          <div class="flex items-center gap-6">
            <span class="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              99.9% Cloud Uptime Guaranteed
            </span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function initFooter() {
  // Footer initialized
}
