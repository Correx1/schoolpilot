import logoImg from '../assets/schoolpilot-logo.png';

export function renderNavbar(activePage = 'home') {
  const isHome = activePage === 'home';
  const isAbout = activePage === 'about';
  const isContact = activePage === 'contact';

  const getHref = (hash) => isHome ? hash : `/${hash}`;

  return `
    <header id="navbar" class="sticky top-0 z-50 bg-white transition-all duration-300 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24">
          
          <!-- Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center group py-2">
              <img src="${logoImg}" alt="SchoolPilot Logo" class="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
            </a>
          </div>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center space-x-10">
            <a href="${getHref('#features')}" data-section="features" class="nav-link relative py-3 text-base lg:text-lg font-semibold ${isHome ? 'text-[#1D2E9D]' : 'text-gray-700'} hover:text-[#1D2E9D] transition-colors">
              <span>Features</span>
              <span class="nav-indicator absolute bottom-0 left-0 ${isHome ? 'w-full' : 'w-0'} h-[3px] bg-[#EE5A31] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${getHref('#testimonials')}" data-section="testimonials" class="nav-link relative py-3 text-base lg:text-lg font-semibold text-gray-700 hover:text-[#1D2E9D] transition-colors">
              <span>Testimonial</span>
              <span class="nav-indicator absolute bottom-0 left-0 w-0 h-[3px] bg-[#EE5A31] rounded-full transition-all duration-300"></span>
            </a>
            <a href="${getHref('#faq')}" data-section="faq" class="nav-link relative py-3 text-base lg:text-lg font-semibold text-gray-700 hover:text-[#1D2E9D] transition-colors">
              <span>FAQ</span>
              <span class="nav-indicator absolute bottom-0 left-0 w-0 h-[3px] bg-[#EE5A31] rounded-full transition-all duration-300"></span>
            </a>
            <a href="/about.html" class="nav-link relative py-3 text-base lg:text-lg font-semibold ${isAbout ? 'text-[#1D2E9D]' : 'text-gray-700'} hover:text-[#1D2E9D] transition-colors">
              <span>About Us</span>
              <span class="nav-indicator absolute bottom-0 left-0 ${isAbout ? 'w-full' : 'w-0'} h-[3px] bg-[#EE5A31] rounded-full transition-all duration-300"></span>
            </a>
            <a href="/contact.html" class="nav-link relative py-3 text-base lg:text-lg font-semibold ${isContact ? 'text-[#1D2E9D]' : 'text-gray-700'} hover:text-[#1D2E9D] transition-colors">
              <span>Contact</span>
              <span class="nav-indicator absolute bottom-0 left-0 ${isContact ? 'w-full' : 'w-0'} h-[3px] bg-[#EE5A31] rounded-full transition-all duration-300"></span>
            </a>
          </nav>

          <!-- Right Action: Sign In Button with Icon -->
          <div class="hidden md:flex items-center">
            <a href="/contact.html" class="btn btn-primary btn-md gap-2.5 font-semibold text-base shadow-md group">
              <span>Sign In</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in transition-transform group-hover:translate-x-1"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden items-center">
            <button id="mobile-menu-btn" type="button" class="text-gray-700 hover:text-[#1D2E9D] focus:outline-none p-2 rounded-lg" aria-label="Toggle menu">
              <svg id="menu-icon-open" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="menu-icon-close" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
        <a href="${getHref('#features')}" data-section="features" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold ${isHome ? 'text-[#1D2E9D] bg-blue-50/60 border-l-4 border-[#EE5A31]' : 'text-gray-700 hover:text-[#1D2E9D] hover:bg-gray-50'}">
          Features
        </a>
        <a href="${getHref('#testimonials')}" data-section="testimonials" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:text-[#1D2E9D] hover:bg-gray-50 border-l-4 border-transparent">
          Testimonial
        </a>
        <a href="${getHref('#faq')}" data-section="faq" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:text-[#1D2E9D] hover:bg-gray-50 border-l-4 border-transparent">
          FAQ
        </a>
        <a href="/about.html" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold ${isAbout ? 'text-[#1D2E9D] bg-blue-50/60 border-l-4 border-[#EE5A31]' : 'text-gray-700 hover:text-[#1D2E9D] hover:bg-gray-50'}">
          About Us
        </a>
        <a href="/contact.html" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold ${isContact ? 'text-[#1D2E9D] bg-blue-50/60 border-l-4 border-[#EE5A31]' : 'text-gray-700 hover:text-[#1D2E9D] hover:bg-gray-50'}">
          Contact
        </a>
        <div class="pt-3">
          <a href="/contact.html" class="btn btn-primary btn-md w-full justify-center text-base py-2.5">
            <span>Sign In</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in inline-block ml-2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Scroll shadow effect
  function updateScroll() {
    if (window.scrollY > 10) {
      navbar?.classList.add('shadow-md', 'border-b', 'border-gray-100');
    } else {
      navbar?.classList.remove('shadow-md', 'border-b', 'border-gray-100');
    }
  }
  window.addEventListener('scroll', updateScroll);
  updateScroll();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden', !isHidden);
      menuIconClose.classList.toggle('hidden', isHidden);
    });
  }

  // Active link underline update function
  function setActiveLink(activeId) {
    navLinks.forEach((link) => {
      const section = link.getAttribute('data-section');
      const indicator = link.querySelector('.nav-indicator');
      if (section === activeId) {
        link.classList.add('text-[#1D2E9D]');
        link.classList.remove('text-gray-700');
        if (indicator) {
          indicator.classList.remove('w-0');
          indicator.classList.add('w-full');
        }
      } else {
        link.classList.remove('text-[#1D2E9D]');
        link.classList.add('text-gray-700');
        if (indicator) {
          indicator.classList.add('w-0');
          indicator.classList.remove('w-full');
        }
      }
    });

    mobileNavLinks.forEach((link) => {
      const section = link.getAttribute('data-section');
      if (section === activeId) {
        link.classList.add('text-[#1D2E9D]', 'bg-blue-50/60', 'border-[#EE5A31]');
        link.classList.remove('text-gray-700', 'border-transparent');
      } else {
        link.classList.remove('text-[#1D2E9D]', 'bg-blue-50/60', 'border-[#EE5A31]');
        link.classList.add('text-gray-700', 'border-transparent');
      }
    });
  }

  // Scrollspy to detect active section
  function checkActiveSection() {
    const sections = ['features', 'testimonials', 'faq'];
    const scrollPosition = window.scrollY + 140;

    let currentSection = '';
    for (const sectionId of sections) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const top = sectionEl.offsetTop;
        const height = sectionEl.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = sectionId;
          break;
        }
      }
    }

    if (currentSection) {
      setActiveLink(currentSection);
    }
  }

  window.addEventListener('scroll', checkActiveSection);

  // Click handler for links
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const section = this.getAttribute('data-section');
      setActiveLink(section);
    });
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const section = this.getAttribute('data-section');
      setActiveLink(section);
    });
  });

  // Smooth scroll to sections and close mobile menu on click
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        const sectionName = targetId.replace('#', '');
        setActiveLink(sectionName);

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        }
      }
    });
  });
}
