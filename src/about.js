import './index.css';
import { renderNavbar, initNavbar } from './sections/Navbar.js';
import { renderFooter, initFooter } from './sections/Footer.js';

function renderAboutContent() {
  return `
    <main class="w-full">
      
      <!-- About Hero Section -->
      <section class="relative pt-12 pb-16 md:pt-20 md:pb-20 overflow-hidden bg-[#FAFAFA] border-b border-gray-200">
        <!-- Background subtle decorative accents -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/40 via-orange-50/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <!-- Main Headline -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl lg:max-w-5xl mx-auto leading-[1.15]">
            <span class="text-[#1D2E9D] block">Dedicated to Transforming</span>
            <span class="text-[#EE5A31] inline-block mt-1">School Operations</span>
          </h1>

          <!-- Subheading -->
          <p class="mt-8 sm:mt-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            At School Pilot, we are dedicated to transforming the way educational institutions manage their operations through innovative and user-friendly technology solutions.
          </p>

        </div>
      </section>

      <!-- Story, Vision & Mission Stepped Cascade Section -->
      <section id="our-story" class="py-16 sm:py-24 bg-white border-b border-gray-200 w-full overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
          
          <!-- Step 1: Our Story (Top / Left) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full pb-16 lg:pb-20">
            
            <!-- Left: Text Content with vertical bar -->
            <div class="w-full min-w-0 border-l-2 border-gray-900 pl-6 space-y-5">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
                <span class="text-[#1D2E9D]">Our</span> <span class="text-[#EE5A31]">Story</span>
              </h2>

              <div class="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                  School Pilot was founded with the belief that technology can significantly improve the way schools operate.
                </p>
                <p>
                  We recognized the challenges faced by educational institutions in managing administrative tasks and saw an opportunity to create a solution that would make a real difference. Our team of dedicated professionals has worked tirelessly to develop a platform that meets the specific needs of Nigerian schools.
                </p>
              </div>
            </div>

            <!-- Right: Illustration (No Card / No Border) -->
            <div class="w-full min-w-0 flex items-center justify-center">
              <div class="w-full max-w-lg">
                <svg viewBox="0 0 540 400" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Background subtle elements -->
                  <circle cx="270" cy="200" r="160" fill="#F1F5F9" fill-opacity="0.6"/>
                  <circle cx="380" cy="120" r="40" fill="#EE5A31" fill-opacity="0.08"/>
                  <circle cx="140" cy="280" r="60" fill="#1D2E9D" fill-opacity="0.05"/>

                  <!-- Ground Platform -->
                  <ellipse cx="270" cy="330" rx="190" ry="40" fill="#E2E8F0" fill-opacity="0.7"/>

                  <!-- Central Interactive Screen/Portal -->
                  <rect x="140" y="70" width="260" height="230" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
                  <rect x="140" y="70" width="260" height="40" rx="20" fill="#1D2E9D"/>
                  <!-- Window controls -->
                  <circle cx="165" cy="90" r="4" fill="#EE5A31"/>
                  <circle cx="178" cy="90" r="4" fill="#FBBF24"/>
                  <circle cx="191" cy="90" r="4" fill="#34D399"/>
                  <rect x="220" y="85" width="120" height="10" rx="5" fill="#FFFFFF" fill-opacity="0.3"/>

                  <!-- Dashboard charts inside screen -->
                  <rect x="160" y="125" width="105" height="75" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
                  <path d="M175 175 L195 155 L215 165 L245 140" stroke="#EE5A31" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="245" cy="140" r="4" fill="#EE5A31"/>

                  <rect x="275" y="125" width="105" height="75" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
                  <!-- Bar Chart -->
                  <rect x="290" y="165" width="12" height="20" rx="3" fill="#1D2E9D"/>
                  <rect x="308" y="150" width="12" height="35" rx="3" fill="#EE5A31"/>
                  <rect x="326" y="140" width="12" height="45" rx="3" fill="#1D2E9D"/>
                  <rect x="344" y="158" width="12" height="27" rx="3" fill="#3B82F6"/>

                  <!-- Lower Dashboard metrics -->
                  <rect x="160" y="215" width="220" height="65" rx="10" fill="#EFF6FF" stroke="#DBEAFE" stroke-width="1.5"/>
                  <circle cx="190" cy="247" r="16" fill="#1D2E9D"/>
                  <path d="M185 247 L188 250 L196 242" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="215" y="235" width="90" height="10" rx="5" fill="#1D2E9D" fill-opacity="0.8"/>
                  <rect x="215" y="252" width="140" height="7" rx="3.5" fill="#94A3B8"/>

                  <!-- Floating Education Icons Left & Right -->
                  <!-- Graduation Cap Badge -->
                  <g transform="translate(80, 140)">
                    <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
                    <path d="M35 20 L53 29 L35 38 L17 29 Z" fill="#EE5A31"/>
                    <path d="M23 33 L23 44 C23 47 35 50 35 50 C35 50 47 47 47 44 L47 33" stroke="#EE5A31" stroke-width="2.5" fill="none"/>
                    <line x1="50" y1="29" x2="50" y2="44" stroke="#EE5A31" stroke-width="2"/>
                  </g>

                  <!-- Student / Certificate Badge -->
                  <g transform="translate(410, 190)">
                    <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
                    <path d="M24 24 H46 V46 H24 Z" rx="3" fill="#1D2E9D"/>
                    <line x1="28" y1="30" x2="42" y2="30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                    <line x1="28" y1="35" x2="38" y2="35" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="35" cy="41" r="2.5" fill="#EE5A31"/>
                  </g>

                  <!-- Cloud & Connectivity Lines -->
                  <path d="M120 180 C 120 180, 135 150, 155 160" stroke="#EE5A31" stroke-width="2" stroke-dasharray="4 4"/>
                  <path d="M410 220 C 410 220, 395 240, 380 235" stroke="#1D2E9D" stroke-width="2" stroke-dasharray="4 4"/>
                </svg>
              </div>
            </div>

          </div>

          <!-- Stepped Cascade Steps 2 & 3 Directly Under Our Story -->
          <div class="w-full pt-12 pb-24" style="position: relative;">
            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start; gap: 2rem; flex-wrap: wrap; width: 100%;">
              
              <!-- Spacer to push Step 2 to middle/center (Step 1 was on top-left) -->
              <div style="flex: 0 0 10%; display: block;" class="hidden md:block"></div>

              <!-- Step 2: Our Vision (Middle / Stepped Down) -->
              <div style="flex: 1 1 320px; max-width: 440px; border-left: 2.5px solid #111827; padding-left: 1.5rem; margin-top: 2rem;">
                <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                  <span class="text-[#1D2E9D]">Our</span> <span class="text-[#EE5A31]">Vision</span>
                </h3>
                <div class="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  <p>
                    Our vision is to be the leading provider of school management solutions in Nigeria, empowering schools to operate more efficiently and effectively.
                  </p>
                  <p>
                    We aim to bridge the gap between technology and education, creating a seamless and integrated platform that addresses the unique needs of Nigerian schools.
                  </p>
                </div>
              </div>

              <!-- Step 3: Our Mission (Right / Stepped Down Further like stairs) -->
              <div style="flex: 1 1 320px; max-width: 440px; border-left: 2.5px solid #111827; padding-left: 1.5rem; margin-top: 7rem;">
                <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                  <span class="text-[#1D2E9D]">Our</span> <span class="text-[#EE5A31]">Mission</span>
                </h3>
                <div class="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  <p>
                    Our mission is to provide an all-in-one school management mobile and web app that simplifies administrative processes, enhances communication, and supports the educational goals of schools. We are committed to:
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- Core Commitments / Pillars Section (Spacious Margins & Guaranteed Wide Gaps) -->
      <section id="commitments" class="w-full bg-white border-b border-gray-200 overflow-hidden" style="padding-top: 6rem; padding-bottom: 6rem;">
        <div class="max-w-7xl mx-auto border-x border-gray-200/80" style="padding-left: 2rem; padding-right: 2rem;">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 items-start" style="gap: 4rem;">
            
            <!-- Left Column: 4 Columns (approx 33% width) -->
            <div class="lg:col-span-4" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]">
                <span class="text-[#1D2E9D] block">Core commitments</span>
                <span class="text-[#EE5A31] inline-block" style="margin-top: 0.5rem;">for every school</span>
              </h2>
              <p class="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Providing an all-in-one platform to simplify school operations and support educational growth.
              </p>
            </div>

            <!-- Right Column: 8 Columns (approx 67% width) with Guaranteed 2-Column Wide Gaps -->
            <div class="lg:col-span-8" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); column-gap: 4.5rem; row-gap: 3.5rem;">
              
              <!-- Item 1: Support -->
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <div class="text-[#1D2E9D]" style="margin-bottom: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9 text-[#1D2E9D]"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 tracking-tight" style="margin-bottom: 0.75rem;">
                  Support
                </h3>
                <p class="text-base text-gray-600 leading-relaxed font-normal">
                  Providing exceptional customer support to help schools maximize the benefits of our platform.
                </p>
              </div>

              <!-- Item 2: Innovation -->
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <div class="text-[#1D2E9D]" style="margin-bottom: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9 text-[#1D2E9D]"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 tracking-tight" style="margin-bottom: 0.75rem;">
                  Innovation
                </h3>
                <p class="text-base text-gray-600 leading-relaxed font-normal">
                  Continuously developing and improving our platform to meet the evolving needs of schools.
                </p>
              </div>

              <!-- Item 3: Accessibility -->
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <div class="text-[#1D2E9D]" style="margin-bottom: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9 text-[#1D2E9D]"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 tracking-tight" style="margin-bottom: 0.75rem;">
                  Accessibility
                </h3>
                <p class="text-base text-gray-600 leading-relaxed font-normal">
                  Making our platform inclusive and usable by everyone, including those with disabilities.
                </p>
              </div>

              <!-- Item 4: Quality -->
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <div class="text-[#1D2E9D]" style="margin-bottom: 1.25rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9 text-[#1D2E9D]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 tracking-tight" style="margin-bottom: 0.75rem;">
                  Quality
                </h3>
                <p class="text-base text-gray-600 leading-relaxed font-normal">
                  Ensuring our web app is reliable, secure, and easy to use.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- Team Section (3 Members) -->
      <section id="team" class="bg-[#FAFAFA] border-b border-gray-200 w-full overflow-hidden" style="padding-top: 6.5rem; padding-bottom: 7.5rem;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D2E9D]">
              MEET OUR <span class="text-[#EE5A31]">TEAM</span>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Passionate individuals with diverse backgrounds in education, technology, and business. Together, we are committed to providing the best possible solutions and support to our users.
            </p>
          </div>

          <!-- 3 Team Members (Circular Portrait Style) -->
          <div class="max-w-5xl mx-auto" style="margin-top: 5.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 3.5rem 2.5rem; text-align: center;">
            
            <!-- Member 1 -->
            <div class="flex flex-col items-center group">
              <div class="shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105" style="width: 210px; height: 210px; border-radius: 50%; overflow: hidden; margin-bottom: 1.5rem; flex-shrink: 0;">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                  alt="James Turner" 
                  class="w-full h-full object-cover object-top"
                  style="border-radius: 50%;"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                James Turner
              </h3>
              <p class="text-sm sm:text-base text-gray-600 font-normal mt-1.5">
                Brand Strategy Director
              </p>
            </div>

            <!-- Member 2 -->
            <div class="flex flex-col items-center group">
              <div class="shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105" style="width: 210px; height: 210px; border-radius: 50%; overflow: hidden; margin-bottom: 1.5rem; flex-shrink: 0;">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Emily Park" 
                  class="w-full h-full object-cover object-top"
                  style="border-radius: 50%;"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Emily Park
              </h3>
              <p class="text-sm sm:text-base text-gray-600 font-normal mt-1.5">
                Digital Solutions Expert
              </p>
            </div>

            <!-- Member 3 -->
            <div class="flex flex-col items-center group">
              <div class="shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105" style="width: 210px; height: 210px; border-radius: 50%; overflow: hidden; margin-bottom: 1.5rem; flex-shrink: 0;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                  alt="Daniel Kim" 
                  class="w-full h-full object-cover object-top"
                  style="border-radius: 50%;"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Daniel Kim
              </h3>
              <p class="text-sm sm:text-base text-gray-600 font-normal mt-1.5">
                Creative Marketing Partner
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  `;
}

const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    ${renderNavbar('about')}
    ${renderAboutContent()}
    ${renderFooter()}
  `;

  initNavbar();
  initFooter();
}

renderApp();
