// Object of client / partner / school logos (easy for user to edit)
export const schoolLogos = [
  {
    id: 1,
    name: 'Greenwood Academy',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-[#1D2E9D] text-white flex items-center justify-center text-xs shadow-xs">GA</span> Greenwood</div>`
  },
  {
    id: 2,
    name: 'Apex International',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-[#EE5A31] text-white flex items-center justify-center text-xs shadow-xs">AI</span> Apex School</div>`
  },
  {
    id: 3,
    name: 'St. Claire College',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs">SC</span> St. Claire</div>`
  },
  {
    id: 4,
    name: 'Horizon High School',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs shadow-xs">HH</span> Horizon High</div>`
  },
  {
    id: 5,
    name: 'Beacon Hill Prep',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs shadow-xs">BH</span> Beacon Hill</div>`
  },
  {
    id: 6,
    name: 'Oakridge Grammar',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs shadow-xs">OG</span> Oakridge</div>`
  },
  {
    id: 7,
    name: 'Cambridge Model School',
    svg: `<div class="flex items-center gap-2.5 text-gray-800 font-bold text-base sm:text-lg"><span class="w-8 h-8 rounded-lg bg-[#1D2E9D] text-white flex items-center justify-center text-xs shadow-xs">CM</span> Cambridge</div>`
  }
];

export function renderLogoCarousel() {
  const logosList = [...schoolLogos, ...schoolLogos, ...schoolLogos, ...schoolLogos];

  const itemsHtml = logosList
    .map(
      (item) => `
      <div class="flex items-center justify-center px-8 py-2 shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer">
        ${item.svg}
      </div>
    `
    )
    .join('');

  return `
    <section id="customer" class="w-full py-4 sm:py-5 bg-white border-y border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2">
        <p class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by leading educational institutions
        </p>
      </div>

      <!-- Marquee Carousel Container with Inline Margin for PC -->
      <div class="w-full max-w-7xl mx-auto md:px-8 lg:px-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div id="logo-track" class="flex w-max items-center">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initLogoCarousel() {
  const track = document.getElementById('logo-track');
  if (!track) return;

  let pos = 0;
  const speed = 0.35; // Calibrated smooth & gentle scrolling speed

  function animate() {
    pos += speed;
    if (pos >= track.scrollWidth / 2) {
      pos = 0;
    }
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(animate);
  }

  let animationId = requestAnimationFrame(animate);

  // Pause on hover
  track.parentElement?.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationId);
  });

  track.parentElement?.addEventListener('mouseleave', () => {
    animationId = requestAnimationFrame(animate);
  });
}
