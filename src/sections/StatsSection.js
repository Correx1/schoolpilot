export const statsData = [
  {
    value: '23+',
    title: 'Partner Schools',
    desc: 'Active institutions'
  },
  {
    value: '5,000+',
    title: 'Students Managed',
    desc: 'Daily active users'
  },
  {
    value: '99.9%',
    title: 'Uptime Rate',
    desc: 'Secure cloud architecture'
  },
  {
    value: '24/7',
    title: 'Dedicated Support',
    desc: 'Fast resolution & onboarding'
  }
];

export function renderStatsSection() {
  const statsHtml = statsData
    .map(
      (stat) => `
      <div class="flex flex-col items-center justify-center p-6 sm:p-8 text-center">
        <span class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          ${stat.value}
        </span>
        <span class="mt-2 text-sm sm:text-base font-bold text-gray-900 leading-tight">
          ${stat.title}
        </span>
        <span class="mt-1 text-xs text-gray-500 font-normal leading-snug">
          ${stat.desc}
        </span>
      </div>
    `
    )
    .join('');

  return `
    <section id="infrastructure" class="py-16 sm:py-20 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
            <span class="text-[#1D2E9D]">Backed by</span> <span class="text-[#EE5A31]">proven infrastructure</span>
          </h2>
          <p class="mt-3 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            SchoolPilot provides the reliable digital backbone for educational communities nationwide.
          </p>
        </div>

        <!-- 4 Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-x-0 sm:divide-x divide-gray-200/60">
          ${statsHtml}
        </div>

      </div>
    </section>
  `;
}

export function initStatsSection() {
  // Any stats animation logic if needed
}
