export function renderInterfaceSpotlight() {
  return `
    <section id="company" class="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <!-- Header -->
        <div class="max-w-3xl mb-12 sm:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span class="text-[#1D2E9D]">Building Smarter Schools with</span> <span class="text-[#EE5A31]">SchoolPilot</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            See how modern institutions use SchoolPilot to eliminate paperwork, automate student grading, and deliver a delightful experience to teachers and parents.
          </p>
        </div>

        <!-- Static Tabs Bar (First Active, Others Faint & Non-clickable) -->
        <div class="flex items-center gap-6 sm:gap-10 border-b border-gray-200 mb-10 overflow-x-auto no-scrollbar">
          <div class="pb-3 text-sm sm:text-base font-bold text-[#1D2E9D] border-b-2 border-[#1D2E9D] cursor-default whitespace-nowrap">
            Awesome Interface
          </div>
          <div class="pb-3 text-sm sm:text-base font-medium text-gray-400 select-none cursor-default whitespace-nowrap">
            30-Days Free Trial
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <!-- Left Column: User Copy & Highlights -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                Unique & clean user interface on all screens.
              </h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                No special software installation needed. Adaptable on different screens and works out of the box from day one.
              </p>
            </div>

            <div class="pt-4 border-t border-gray-100">
              <h4 class="text-base sm:text-lg font-bold text-[#EE5A31] mb-2">
                Start your 30-days free trial
              </h4>
              <p class="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                We are convinced that you will love SchoolPilot. That is why we are offering you a 30-day free trial to see how SchoolPilot will revolutionize your school.
              </p>
            </div>

            <!-- Stats / Highlights -->
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold text-gray-900">100%</div>
                <p class="text-xs text-gray-500 mt-0.5">Responsive UI, Works in all devices</p>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold text-[#1D2E9D]">30 Days</div>
                <p class="text-xs text-gray-500 mt-0.5">Free Trial</p>
              </div>
            </div>

            <div class="pt-2">
              <a href="#get-started" class="btn btn-primary btn-md">
                Start 30-Day Free Trial
              </a>
            </div>
          </div>

          <!-- Right Column: Full Image Container (No Text) -->
          <div class="lg:col-span-7">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white aspect-[4/3] sm:aspect-[16/11] w-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80" 
                alt="SchoolPilot Full Interface Preview" 
                class="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initInterfaceSpotlight() {
  // Static content initialized
}
