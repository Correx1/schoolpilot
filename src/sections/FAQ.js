export const faqData = [
  {
    question: 'What is School Pilot?',
    answer: 'School Pilot is a comprehensive school management system designed to streamline administrative tasks, enhance student engagement, and improve educational outcomes through advanced digital tools.'
  },
  {
    question: "How can School Pilot improve our school's administrative efficiency?",
    answer: 'School Pilot automates routine administrative tasks such as attendance tracking, class scheduling, and student admissions, freeing up valuable time for staff to focus on educational quality and student support.'
  },
  {
    question: 'What plans and pricing options are available for schools?',
    answer: 'SchoolPilot offers flexible, scalable plans tailored to your school size, student population, and module requirements. We provide termly and annual subscriptions designed to fit your budget. Contact us for a personalized pricing quote.'
  },
  {
    question: 'Are there any hidden onboarding or migration fees?',
    answer: 'No hidden fees. All plans come with free student record migration, full portal configuration, staff training sessions, and continuous 24/7 technical support.'
  },
  {
    question: 'Is School Pilot suitable for all types of educational institutions?',
    answer: 'Absolutely! School Pilot is versatile and can be configured to meet the specific needs of various educational settings, including primary and secondary schools, colleges, and specialty institutions.'
  },
  {
    question: 'Can School Pilot be accessed on mobile devices?',
    answer: 'Yes, School Pilot is mobile-friendly and can be accessed on various devices, enabling administrators, teachers, and students to stay connected and informed no matter where they are.'
  },
  {
    question: 'How secure is the data in School Pilot?',
    answer: 'Data security is a top priority for us. School Pilot uses encrypted data storage, conducts regular security audits, and implements strict access controls to ensure all data remains protected.'
  },
  {
    question: 'Who can join the School Pilot Affiliates Program?',
    answer: 'Anyone with a website, blog, social media presence, or network that reaches schools and educators in Nigeria can join our program.'
  },
  {
    question: 'When do affiliate commissions get paid?',
    answer: 'Commissions are paid out on a monthly basis, provided you have reached the minimum payout threshold.'
  }
];

export function renderFAQ() {
  const faqItemsHtml = faqData
    .map(
      (item, index) => `
      <div class="faq-item border-b border-gray-200/90 last:border-b-0 py-4 sm:py-5 transition-colors">
        <button 
          type="button" 
          class="faq-toggle w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none group focus:outline-none"
          data-index="${index}"
          aria-expanded="${index === 0 ? 'true' : 'false'}"
        >
          <span class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1D2E9D] transition-colors leading-snug">
            ${item.question}
          </span>
          <span class="faq-icon-wrapper w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600 transition-all duration-300 ${index === 0 ? 'rotate-45 bg-[#1D2E9D] text-white' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </span>
        </button>
        <div class="faq-answer-container ${index === 0 ? 'block' : 'hidden'} pt-3 pr-8 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          ${item.answer}
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section id="faq" class="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          <!-- Left Sticky / Info Column -->
          <div class="lg:col-span-4 space-y-6">
            <div class="space-y-3">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
                <span class="text-[#1D2E9D]">Frequently Asked</span> <br class="hidden sm:inline" /><span class="text-[#EE5A31]">Questions</span>
              </h2>
              <p class="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Find clear answers to common questions about SchoolPilot features, pricing, setup, and affiliate programs.
              </p>
            </div>

            <!-- Support Box (Desktop Only) -->
            <div class="hidden lg:block bg-white border border-gray-200/90 rounded-2xl p-6 shadow-xs space-y-4">
              <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D2E9D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div>
                <h4 class="text-base font-bold text-gray-900">Still have questions?</h4>
                <p class="text-xs sm:text-sm text-gray-500 mt-1">
                  Our friendly education consultants are available 24/7 to help you.
                </p>
              </div>
              <a href="#contact" class="btn btn-primary btn-sm w-full font-semibold justify-center py-2.5">
                <span>Contact Our Team</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Minimalist Accordion List + Mobile Support Box -->
          <div class="lg:col-span-8 space-y-6">
            <div class="bg-white border border-gray-200/90 rounded-2xl px-6 sm:px-8 py-2 shadow-xs divide-y divide-gray-200/80">
              ${faqItemsHtml}
            </div>

            <!-- Support Box (Mobile Only - Placed After FAQ List) -->
            <div class="block lg:hidden bg-white border border-gray-200/90 rounded-2xl p-6 shadow-xs space-y-4">
              <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D2E9D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div>
                <h4 class="text-base font-bold text-gray-900">Still have questions?</h4>
                <p class="text-xs sm:text-sm text-gray-500 mt-1">
                  Our friendly education consultants are available 24/7 to help you.
                </p>
              </div>
              <a href="#contact" class="btn btn-primary btn-sm w-full font-semibold justify-center py-2.5">
                <span>Contact Our Team</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initFAQ() {
  const allItems = document.querySelectorAll('.faq-item');

  allItems.forEach((item) => {
    const btn = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer-container');
    const iconWrapper = item.querySelector('.faq-icon-wrapper');

    if (!btn) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all items first
      allItems.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.faq-toggle');
        const otherAnswer = otherItem.querySelector('.faq-answer-container');
        const otherIcon = otherItem.querySelector('.faq-icon-wrapper');

        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.classList.add('hidden');
        if (otherIcon) {
          otherIcon.classList.remove('rotate-45', 'bg-[#1D2E9D]', 'text-white');
          otherIcon.classList.add('bg-gray-100', 'text-gray-600');
        }
      });

      // If the clicked one was closed, open it now
      if (!isExpanded) {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.remove('hidden');
        if (iconWrapper) {
          iconWrapper.classList.add('rotate-45', 'bg-[#1D2E9D]', 'text-white');
          iconWrapper.classList.remove('bg-gray-100', 'text-gray-600');
        }
      }
    });
  });
}


