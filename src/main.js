import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { renderNavbar, initNavbar } from './sections/Navbar.js';
import { renderFooter, initFooter } from './sections/Footer.js';

// School Logo Imports
import asaphiteLogo from './assets/schoollogo/asaphite.webp';
import clasamLogo from './assets/schoollogo/clasam.webp';
import divineModelLogo from './assets/schoollogo/divine-model.webp';
import funcareLogo from './assets/schoollogo/funcare.webp';
import laurelLogo from './assets/schoollogo/laurel-schools.webp';
import leadwayLogo from './assets/schoollogo/leadway.webp';
import revivalLogo from './assets/schoollogo/revival-heritage-school-logo.webp';
import stJudeLogo from './assets/schoollogo/st-jude-private-school.webp';
import triumphantLogo from './assets/schoollogo/triumphant.webp';
import whiteDoveLogo from './assets/schoollogo/white-dove-schools.webp';
import downloadLogo from './assets/schoollogo/download.jpeg';
import cbtImg from './assets/cbt.png';
import resultImg from './assets/result.png';
import walletImg from './assets/wallet.png';
import nfcImg from './assets/nfc.png';
import aiImg from './assets/AI.png';
import feesImg from './assets/fees.png';

// Real Testimonial Photos
import benjaminSanusiImg from './assets/testimonials/Mr. Benjamin Sanusi.png';
import ceciliaBasiruImg from './assets/testimonials/Mrs. Cecilia Basiru.png';
import chinyereOnuImg from './assets/testimonials/Mrs. Chinyere Onu.png';
import rufiatSaliuImg from './assets/testimonials/Mrs. Rufiat Saliu.png';
import stephanieChibuzorImg from './assets/testimonials/Mrs. Stephanie Chibuzor.png';
import stellaUzomaImg from './assets/testimonials/Mrs. Stella Uzoma.png';

/* ==========================================================================
   1. DATA OBJECTS (Easy to update and manage without code duplication)
   ========================================================================== */

// School / Partner Logos
export const schoolLogos = [
  { id: 1, name: 'Asaphite Academy', logo: asaphiteLogo },
  { id: 2, name: 'Clasam Schools', logo: clasamLogo },
  { id: 3, name: 'Divine Model College', logo: divineModelLogo },
  { id: 4, name: 'Laurel Schools', logo: laurelLogo },
  { id: 5, name: 'Funcare Schools', logo: funcareLogo },
  { id: 6, name: 'Leadway College', logo: leadwayLogo },
  { id: 7, name: 'Revival Heritage School', logo: revivalLogo },
  { id: 8, name: 'St. Jude Private School', logo: stJudeLogo },
  { id: 9, name: 'Triumphant College', logo: triumphantLogo },
  { id: 10, name: 'White Dove Schools', logo: whiteDoveLogo },
  { id: 11, name: 'Crown Model Academy', logo: downloadLogo }
];

// Feature Categories & Pills
export const featureCategories = [
  {
    id: 'ai_exams',
    name: 'AI & Examinations',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    id: 'hardware',
    name: 'Biometrics & Smart Card',
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
  { name: 'AI INTEGRATION', category: 'ai_exams' },
  { name: 'AI EXAM QUESTIONS MAKER', category: 'ai_exams' },
  { name: 'ONLINE CBT EXAMS', category: 'ai_exams' },
  { name: 'FINGERPRINT ATTENDANCE', category: 'hardware' },
  { name: 'SMART CARD', category: 'hardware' },
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

// Feature Showcase Cards
export const featureCards = [
  {
    id: 'cbt',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    category: 'Instant Assessments',
    title: 'Online CBT & AI Question Bank',
    description: 'Empower teachers with AI assisted question generation, live student exam countdowns, auto grading for MCQs, and instant result calculation.',
    linkText: 'Explore CBT Engine',
    linkHref: '#cbt',
    imageSrc: cbtImg
  },
  {
    id: 'nfc',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    category: 'Smart Hardware',
    title: 'Smart Cards & Biometric Attendance',
    description: 'Hardware level integration for smart cards and fingerprint scanners at gates, hostels, classrooms, and bus transit.',
    linkText: 'Explore Attendance',
    linkHref: '#attendance',
    imageSrc: nfcImg
  },
  {
    id: 'wallet',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    category: 'Cashless Campus',
    title: 'Student Digital Wallet & POS',
    description: 'Cashless cafeteria and bookstore purchases with daily spending caps, category restrictions, and instant biometric or PIN tap checkout.',
    linkText: 'Explore POS & Wallet',
    linkHref: '#wallet',
    imageSrc: walletImg
  },
  {
    id: 'reports',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>`,
    category: 'Pixel-Perfect Output',
    title: 'Result engine and report card template',
    description: 'Corporate, Elegant, Chart, Modern, and Classic A4 report cards calibrated for single page printing with dynamic QR verification.',
    linkText: 'Explore Report Cards',
    linkHref: '#reports',
    imageSrc: resultImg
  },
  {
    id: 'finance',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/></svg>`,
    category: 'Automated Bursary',
    title: 'School Fees & Online Billing',
    description: 'Dynamic class-aware billing, automated arrears calculation, payment gateway integration, and printable bank-grade receipts.',
    linkText: 'Explore Fee Management',
    linkHref: '#finance',
    imageSrc: feesImg
  },
  {
    id: 'ai',
    categoryIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4"/><circle cx="12" cy="12" r="3"/></svg>`,
    category: 'Proactive Intelligence',
    title: 'AI At-Risk & Performance Insights',
    description: 'Smart AI engines scan cross term grades and attendance anomalies to proactively flag struggling students before final exams.',
    linkText: 'Explore AI Analytics',
    linkHref: '#analytics',
    imageSrc: aiImg
  }
];

// Stats Data
export const statsData = [
  { value: '23+', title: 'Partner Schools', desc: 'Active institutions' },
  { value: '5,000+', title: 'Students Managed', desc: 'Daily active users' },
  { value: '99.9%', title: 'Uptime Rate', desc: 'Secure cloud architecture' },
  { value: '24/7', title: 'Dedicated Support', desc: 'Fast resolution & onboarding' }
];

// CTA Modules
export const ctaModules = [
  { name: 'AI Exam Engine & CBT', category: 'Academics', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
  { name: 'Biometric & Smart Card Attendance', category: 'Hardware', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>` },
  { name: 'Multi Report Card Templates', category: 'Academics', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>` },
  { name: 'Student Digital Wallet', category: 'Finance', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
  { name: 'Online Fee Gateway & POS', category: 'Finance', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>` },
  { name: 'Instant SMS & Email Alerts', category: 'Messaging', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
  { name: 'Staff & Parent Portals', category: 'Community', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { name: 'Real-time GPS Bus Tracking', category: 'Transport', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>` },
  { name: 'Live Master Broadsheets', category: 'Grading', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>` },
  { name: 'Timetable & Class Schedule', category: 'Academics', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>` },
  { name: 'Cashless Canteen System', category: 'Finance', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>` },
  { name: 'Multi-Campus Central Hub', category: 'Administration', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` }
];

// Testimonials Data
export const testimonials = [
  [
    {
      id: 1,
      school: 'Rem-Royal College',
      quote: '"As a Bursar, SchoolPilot has piloted all my demanding tasks such as account reconciliation, payment confirmation and school fees issuance. On the go, I can see who has paid school fees, when and the amount paid. Instantly without the Parent/Guardian coming to the school to submit an evidence of payment. I recommend SchoolPilot for all Schools."',
      author: 'Mrs. Cecilia Basiru',
      role: 'School Bursar at Rem-Royal College',
      avatar: ceciliaBasiruImg
    },
    {
      id: 2,
      school: 'Riverside Academy',
      quote: '"It\'s a game-changer for how we operate daily. Our teachers and staff can focus more on teaching and less on paperwork. School Pilot is an invaluable asset to our institution."',
      author: 'Mr. Benjamin Sanusi',
      role: 'Riverside Academy',
      avatar: benjaminSanusiImg
    }
  ],
  [
    {
      id: 3,
      school: 'Almizyan High School',
      quote: '"SchoolPilot has been powerful and cost-saving. It saves us lots of money from printing fees receipts, daily report books and exam report cards. I can now channel the money on other school development projects."',
      author: 'Mrs. Rufiat Saliu',
      role: 'School Owner of Almizyan High School',
      avatar: rufiatSaliuImg
    },
    {
      id: 4,
      school: 'Eclessia Model Schools',
      quote: '"School Pilot has transformed the way I manage my classroom and interact with my students. The features like daily attendance and the class list management are incredibly easy to use."',
      author: 'Mrs. Stephanie Chibuzor',
      role: 'Founder of Eclessia Model Schools',
      avatar: stephanieChibuzorImg
    }
  ],
  [
    {
      id: 5,
      school: 'Parent Community',
      quote: '"Since I started using SchoolPilot, school fees payments has been easy🤞🏼. I don\'t need to go to the school to present my evidence of payment and also request for school fees receipt. Everything is done automatically, fast and on the go 💪🏼 ."',
      author: 'Mrs. Chinyere Onu',
      role: 'Parent',
      avatar: chinyereOnuImg
    },
    {
      id: 6,
      school: "Prudence Model Int'l Schools",
      quote: '"The speed and ease the SchoolPilot offers when compiling marks, exam record, taking attendance and other daily school taks is top-notch. My works are now less stressfull and faster. I now have more time to research and focus more on the student. SchoolPilot should be used by all teachers who want to see the best from their students."',
      author: 'Mrs. Stella Uzoma',
      role: "Founder of Prudence Model Int'l Schools",
      avatar: stellaUzomaImg
    }
  ]
];

// FAQ Data
export const faqData = [
  { question: 'What is School Pilot?', answer: 'School Pilot is a comprehensive school management system designed to streamline administrative tasks, enhance student engagement, and improve educational outcomes through advanced digital tools.' },
  { question: "How can School Pilot improve our school's administrative efficiency?", answer: 'School Pilot automates routine administrative tasks such as attendance tracking, class scheduling, and student admissions, freeing up valuable time for staff to focus on educational quality and student support.' },
  { question: 'What plans and pricing options are available for schools?', answer: 'SchoolPilot offers flexible, scalable plans tailored to your school size, student population, and module requirements. We provide termly and annual subscriptions designed to fit your budget. Contact us for a personalized pricing quote.' },
  { question: 'Are there any hidden onboarding or migration fees?', answer: 'No hidden fees. All plans come with free student record migration, full portal configuration, staff training sessions, and continuous 24/7 technical support.' },
  { question: 'Is School Pilot suitable for all types of educational institutions?', answer: 'Absolutely! School Pilot is versatile and can be configured to meet the specific needs of various educational settings, including primary and secondary schools, colleges, and specialty institutions.' },
  { question: 'Can School Pilot be accessed on mobile devices?', answer: 'Yes, School Pilot is mobile friendly and can be accessed on various devices, enabling administrators, teachers, and students to stay connected and informed no matter where they are.' },
  { question: 'How secure is the data in School Pilot?', answer: 'Data security is a top priority for us. School Pilot uses encrypted data storage, conducts regular security audits, and implements strict access controls to ensure all data remains protected.' },
  { question: 'Who can join the School Pilot Affiliates Program?', answer: 'Anyone with a website, blog, social media presence, or network that reaches schools and educators in Nigeria can join our program.' },
  { question: 'When do affiliate commissions get paid?', answer: 'Commissions are paid out on a monthly basis, provided you have reached the minimum payout threshold.' }
];

/* ==========================================================================
   2. DYNAMIC COMPONENT RENDERING & INJECTIONS
   ========================================================================== */

function populateDynamicElements() {
  // 1. Logo Carousel Track
  const logoTrack = document.getElementById('logo-track');
  if (logoTrack) {
    const repeatedLogos = [...schoolLogos, ...schoolLogos, ...schoolLogos];
    logoTrack.innerHTML = repeatedLogos
      .map(item => `
        <div class="flex items-center justify-center px-6 sm:px-8 py-2 shrink-0 group cursor-pointer">
          <img 
            src="${item.logo}" 
            alt="${item.name}" 
            class="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105" 
            loading="lazy" 
          />
        </div>
      `)
      .join('');
  }

  // 2. Feature Categories & Feature Pills Cloud
  const catBar = document.getElementById('feature-category-bar');
  if (catBar) {
    catBar.innerHTML = featureCategories
      .map(cat => `
        <button 
          type="button" 
          data-cat-id="${cat.id}" 
          class="cat-filter-btn flex items-center justify-center p-2.5 sm:p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
          title="${cat.name}"
        >
          ${cat.iconSvg}
        </button>
      `)
      .join('');
  }

  const pillsCloud = document.getElementById('feature-cloud');
  if (pillsCloud) {
    pillsCloud.innerHTML = allFeaturePills
      .map(pill => `
        <span 
          data-category="${pill.category}" 
          class="feature-pill inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-[13px] font-mono font-medium tracking-wide bg-white border border-gray-200 text-gray-700 shadow-xs transition-all duration-300 select-none"
        >
          ${pill.name}
        </span>
      `)
      .join('');
  }

  // 3. Feature Showcase Cards
  const showcaseAnimations = ['fade-up', 'zoom-in-up', 'flip-up', 'slide-up', 'zoom-in', 'fade-down'];
  const showcaseGrid = document.getElementById('feature-showcase-grid');
  if (showcaseGrid) {
    showcaseGrid.innerHTML = featureCards
      .map((card, idx) => `
        <div data-aos="${showcaseAnimations[idx % showcaseAnimations.length]}" data-aos-duration="750" class="flex flex-col justify-between p-5 sm:p-8 lg:p-12 bg-white hover:bg-gray-50/20 transition-colors duration-200 ${
          idx % 2 === 0 ? 'lg:border-r border-gray-200' : ''
        } ${idx < featureCards.length - 2 ? 'border-b border-gray-200' : (idx === featureCards.length - 2 ? 'border-b lg:border-b-0 border-gray-200' : '')}">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 mb-3">
              <span class="text-gray-400">${card.categoryIcon}</span>
              <span>${card.category}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
              ${card.title}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-4 max-w-lg">
              ${card.description}
            </p>
            <a href="${card.linkHref}" class="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-gray-900 hover:text-primary transition-colors mb-6">
              <span>${card.linkText}</span>
              <span class="text-gray-400 font-bold">›</span>
            </a>
          </div>
          <div class="w-full mt-2 p-2 sm:p-2.5 rounded-xl bg-gray-50/80 border border-gray-200/70 shadow-inner">
            <div class="w-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-xs">
              <div class="h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-gray-100">
                <img src="${card.imageSrc}" alt="${card.title} Screenshot" class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      `)
      .join('');
  }

  // 4. Stats Grid
  const statAnimations = ['fade-up', 'zoom-in', 'flip-up', 'slide-up'];
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid) {
    statsGrid.innerHTML = statsData
      .map((stat, idx) => `
        <div data-aos="${statAnimations[idx % statAnimations.length]}" data-aos-delay="${idx * 100}" data-aos-duration="600" class="flex flex-col items-center justify-center p-6 sm:p-8 text-center">
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
      `)
      .join('');
  }

  // 5. Pricing CTA Modules Grid
  const moduleAnimations = ['zoom-in', 'fade-up', 'flip-up', 'zoom-in-up', 'slide-up', 'flip-down', 'fade-down', 'zoom-in'];
  const ctaModulesGrid = document.getElementById('cta-modules-grid');
  if (ctaModulesGrid) {
    ctaModulesGrid.innerHTML = ctaModules
      .map((m, idx) => `
        <div data-aos="${moduleAnimations[idx % moduleAnimations.length]}" data-aos-delay="${(idx % 4) * 60}" data-aos-duration="500" class="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-gray-200/90 rounded-xl shadow-xs hover:border-primary/40 hover:shadow-sm transition-all text-left group">
          <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-primary/10 transition-colors">
            ${m.icon}
          </div>
          <div>
            <div class="text-xs font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors">${m.name}</div>
            <div class="text-[11px] text-gray-500 font-medium">${m.category}</div>
          </div>
        </div>
      `)
      .join('');
  }

  // 6. Testimonials Columns
  const testimonialColAnimations = ['fade-up', 'zoom-in-up', 'slide-up'];
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = testimonials
      .map((col, colIdx) => `
        <div data-aos="${testimonialColAnimations[colIdx % testimonialColAnimations.length]}" data-aos-delay="${colIdx * 120}" data-aos-duration="700" class="flex flex-col gap-6">
          ${col
            .map((item, itemIdx) => `
              <div data-aos="${itemIdx % 2 === 0 ? 'fade-up' : 'flip-up'}" data-aos-delay="${(colIdx * 100) + (itemIdx * 120)}" data-aos-duration="650" class="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs font-semibold text-gray-400 mb-4">
                    <span>${item.school}</span>
                    <span class="text-secondary text-sm">★★★★★</span>
                  </div>
                  <p class="text-xs sm:text-[13px] font-mono text-gray-700 leading-relaxed font-normal mb-6">
                    ${item.quote}
                  </p>
                </div>
                <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img src="${item.avatar}" alt="${item.author}" class="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-gray-200 shadow-sm shrink-0" loading="lazy" />
                  <div>
                    <h4 class="text-sm sm:text-base font-bold text-gray-900 leading-tight">${item.author}</h4>
                    <p class="text-xs text-gray-500 font-medium mt-0.5">${item.role}</p>
                  </div>
                </div>
              </div>
            `)
            .join('')}
        </div>
      `)
      .join('');
  }

  // 7. FAQ Accordion Items
  const faqItemAnimations = ['fade-up', 'slide-up', 'zoom-in-up'];
  const faqList = document.getElementById('faq-accordion-list');
  if (faqList) {
    faqList.innerHTML = faqData
      .map((item, index) => `
        <div data-aos="${faqItemAnimations[index % faqItemAnimations.length]}" data-aos-delay="${index * 40}" data-aos-duration="500" class="faq-item border-b border-gray-200/90 py-4 sm:py-5 transition-colors">
          <button 
            type="button" 
            class="faq-toggle w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none group focus:outline-none"
            data-index="${index}"
            aria-expanded="${index === 0 ? 'true' : 'false'}"
          >
            <span class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
              ${item.question}
            </span>
            <span class="faq-icon-wrapper w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600 transition-all duration-300 ${index === 0 ? 'rotate-45 bg-primary text-white' : ''}">
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
      `)
      .join('');
  }
}

/* ==========================================================================
   3. EVENT HANDLERS & INTERACTIVITY
   ========================================================================== */

function initLogoCarousel() {
  const track = document.getElementById('logo-track');
  if (!track) return;

  let pos = 0;
  const speed = 0.4;
  let isPaused = false;

  function step() {
    if (!isPaused) {
      pos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (pos >= halfWidth) {
        pos -= halfWidth;
      }
      track.style.transform = `translate3d(-${pos}px, 0, 0)`;
    }
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

  const container = track.parentElement;
  if (container) {
    container.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    container.addEventListener('mouseleave', () => {
      isPaused = false;
    });
  }
}

function initFeaturesGrid() {
  const catButtons = document.querySelectorAll('.cat-filter-btn');
  const pills = document.querySelectorAll('.feature-pill');
  if (!catButtons.length || !pills.length) return;

  function highlightCategory(activeCatId) {
    pills.forEach((pill) => {
      const pillCat = pill.getAttribute('data-category');
      if (!activeCatId) {
        pill.classList.remove('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.add('opacity-100');
      } else if (pillCat === activeCatId) {
        pill.classList.remove('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.add('opacity-100', 'bg-white', 'text-primary', 'shadow-md', 'border-primary/40', 'scale-[1.02]');
      } else {
        pill.classList.add('opacity-20', 'blur-[0.5px]', 'scale-95');
        pill.classList.remove('opacity-100', 'text-primary', 'shadow-md', 'border-primary/40', 'scale-[1.02]');
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

  catButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => highlightCategory(btn.getAttribute('data-cat-id')));
    btn.addEventListener('mouseleave', () => highlightCategory(null));
  });
}

function initFAQ() {
  const allItems = document.querySelectorAll('.faq-item');
  if (!allItems.length) return;

  allItems.forEach((item) => {
    const btn = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer-container');
    const iconWrapper = item.querySelector('.faq-icon-wrapper');

    if (!btn) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      allItems.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.faq-toggle');
        const otherAnswer = otherItem.querySelector('.faq-answer-container');
        const otherIcon = otherItem.querySelector('.faq-icon-wrapper');

        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.classList.add('hidden');
        if (otherIcon) {
          otherIcon.classList.remove('rotate-45', 'bg-primary', 'text-white');
          otherIcon.classList.add('bg-gray-100', 'text-gray-600');
        }
      });

      if (!isExpanded) {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.remove('hidden');
        if (iconWrapper) {
          iconWrapper.classList.add('rotate-45', 'bg-primary', 'text-white');
          iconWrapper.classList.remove('bg-gray-100', 'text-gray-600');
        }
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const timestampInput = document.getElementById('_form_load_timestamp');
  if (timestampInput) {
    timestampInput.value = Date.now().toString();
  }

  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');

  function showFeedback(type, message) {
    if (!feedback) return;
    feedback.classList.remove('hidden', 'bg-red-50', 'text-red-800', 'border-red-200', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
    if (type === 'error') {
      feedback.className = 'mb-5 rounded-xl p-4 text-sm font-medium border bg-red-50 text-red-800 border-red-200 flex items-start gap-3';
      feedback.innerHTML = `
        <svg class="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>${message}</div>
      `;
    } else {
      feedback.className = 'mb-5 rounded-xl p-4 text-sm font-medium border bg-emerald-50 text-emerald-800 border-emerald-200 flex items-start gap-3';
      feedback.innerHTML = `
        <svg class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <div>${message}</div>
      `;
    }
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Anti-Bot Honeypot check
    const honeypot = document.getElementById('_hp_website');
    if (honeypot && honeypot.value.trim() !== '') {
      // Bot trapped: silently simulate success without actual submission
      showFeedback('success', 'Thank you! Your message has been sent successfully. We will get back to you shortly.');
      form.reset();
      return;
    }

    // 2. Anti-Bot Submission speed check (must take at least 3 seconds)
    const loadTime = parseInt(timestampInput?.value || '0', 10);
    const timeSpent = (Date.now() - loadTime) / 1000;
    if (loadTime && timeSpent < 2.5) {
      showFeedback('error', 'Form submitted too quickly. Please take a moment to review your details and submit again.');
      return;
    }

    // 3. Rate limiting check (max 3 submissions in 5 minutes via sessionStorage)
    const recentSubmissions = JSON.parse(sessionStorage.getItem('sp_submissions') || '[]');
    const now = Date.now();
    const fiveMinutesAgo = now - 5 * 60 * 1000;
    const validRecent = recentSubmissions.filter((t) => t > fiveMinutesAgo);

    if (validRecent.length >= 3) {
      showFeedback('error', 'Too many messages sent. Please wait a few minutes before trying again or reach us directly via WhatsApp / phone.');
      return;
    }

    // 4. Form Field Validations
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone?.value.trim() || '';
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (fullName.length < 2) {
      showFeedback('error', 'Please provide your valid full name (at least 2 characters).');
      form.fullName.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('error', 'Please enter a valid email address (e.g. name@school.edu.ng).');
      form.email.focus();
      return;
    }

    if (phone && !/^[+0-9\s\-()]{7,20}$/.test(phone)) {
      showFeedback('error', 'Please enter a valid phone number or leave it blank.');
      form.phone.focus();
      return;
    }

    if (subject.length < 3) {
      showFeedback('error', 'Please enter a valid subject for your inquiry.');
      form.subject.focus();
      return;
    }

    if (message.length < 10) {
      showFeedback('error', 'Please enter a descriptive message (at least 10 characters) so we can best assist you.');
      form.message.focus();
      return;
    }

    // 5. Submit state with loading indicator
    const originalBtnText = btnText ? btnText.textContent : 'Send Message';
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Sending Message...';
      if (btnIcon) {
        btnIcon.outerHTML = `<svg id="btn-icon" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
      }
    }

    // 6. Send to Backend API Route (/api/contact) connected with Resend
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        subject,
        message,
        _hp_website: honeypot?.value || ''
      })
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data.error || 'Failed to deliver message. Please try again later.');
        }
        return data;
      })
      .then(() => {
        // Record submission timestamp for rate limiting
        validRecent.push(now);
        sessionStorage.setItem('sp_submissions', JSON.stringify(validRecent));

        showFeedback('success', '🎉 Thank you! Your message has been received. Our team will contact you via email or phone within 24 hours.');
        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span id="btn-text">Message Sent!</span>
            <svg id="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          `;
          setTimeout(() => {
            submitBtn.innerHTML = `
              <span id="btn-text">${originalBtnText}</span>
              <svg id="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            `;
          }, 4000);
        }
      })
      .catch((err) => {
        console.error('Submission error:', err);
        showFeedback('error', err.message || 'Unable to send your message right now. Please reach us directly at info@schoolpilot.online or WhatsApp (+234) 903322 1927.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span id="btn-text">Retry Sending</span>
            <svg id="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          `;
        }
      });
  });
}

/* ==========================================================================
   4. MOUNT COMMON LAYOUT & APP INITIALIZATION
   ========================================================================== */

function initApp() {
  // Determine active page
  const path = window.location.pathname;
  let activePage = 'home';
  if (path.includes('about')) activePage = 'about';
  else if (path.includes('contact')) activePage = 'contact';
  else if (path.includes('privacy')) activePage = 'privacy';
  else if (path.includes('disclaimer')) activePage = 'disclaimer';
  else if (path.includes('terms')) activePage = 'terms';

  // Render Navbar
  const navContainer = document.getElementById('navbar');
  if (navContainer) {
    navContainer.innerHTML = renderNavbar(activePage);
    initNavbar();
  }

  // Populate dynamic data elements (Logos, Pills, Cards, Stats, etc.)
  populateDynamicElements();

  // Initialize interactive components
  initLogoCarousel();
  initFeaturesGrid();
  initFAQ();
  initContactForm();

  // Render Footer
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
    initFooter();
  }

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 40,
    delay: 0
  });

  // Ensure hero and initial viewport animate immediately on load
  setTimeout(() => {
    AOS.refreshHard();
  }, 30);
  
  window.addEventListener('load', () => {
    AOS.refreshHard();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
