export function renderHero() {
  return `
    <section id="product" class="relative pt-10 pb-12 md:pt-16 md:pb-16 overflow-hidden bg-[#FAFAFA]">
      <!-- Background subtle decorative accents -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/40 via-orange-50/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <!-- Main Headline -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-3xl lg:max-w-4xl mx-auto leading-[1.15]">
          <span class="text-[#1D2E9D] block">Modern Systems for</span>
          <span class="text-[#EE5A31] inline-block mt-1">Smarter Schools</span>
        </h1>

        <!-- Subheading -->
        <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
          From admissions and attendance to automated grading and fee payments — empower administrators, teachers, and parents with an intuitive all-in-one platform.
        </p>

        <!-- CTA Action Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a href="#get-started" class="btn btn-primary btn-lg w-full sm:w-auto shadow-lg hover:shadow-xl group">
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <a href="#demo" class="btn btn-outline-secondary btn-lg w-full sm:w-auto bg-white hover:bg-[#EE5A31] hover:text-white shadow-xs group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#EE5A31] group-hover:text-white transition-colors"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            <span>Request Demo</span>
          </a>
        </div>

        <!-- Product Preview Video Window -->
        <div class="mt-14 sm:mt-16 relative mx-auto max-w-6xl">
          <!-- Outer border frame with shadow -->
          <div class="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-gray-200 to-gray-100 shadow-2xl border border-gray-200/80">
            <div class="rounded-xl overflow-hidden bg-black border border-gray-200 shadow-inner">
              <!-- Video Element -->
              <div class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] bg-gray-900 flex items-center justify-center overflow-hidden">
                <video 
                  id="hero-video"
                  class="w-full h-full object-cover" 
                  autoplay 
                  loop 
                  muted 
                  playsinline 
                  controls
                  poster="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initHero() {
  // Hero video initialization if needed
}
