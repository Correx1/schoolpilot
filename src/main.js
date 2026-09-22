import './index.css';
import { renderNavbar, initNavbar } from './sections/Navbar.js';
import { renderHero, initHero } from './sections/Hero.js';
import { renderLogoCarousel, initLogoCarousel } from './sections/LogoCarousel.js';
import { renderFeaturesGrid, initFeaturesGrid } from './sections/FeaturesGrid.js';
import { renderFeatureShowcase, initFeatureShowcase } from './sections/FeatureShowcase.js';
import { renderStatsSection, initStatsSection } from './sections/StatsSection.js';
import { renderInterfaceSpotlight, initInterfaceSpotlight } from './sections/InterfaceSpotlight.js';
import { renderPricingCTA, initPricingCTA } from './sections/PricingCTA.js';
import { renderTestimonials, initTestimonials } from './sections/Testimonials.js';
import { renderFAQ, initFAQ } from './sections/FAQ.js';
import { renderFooter, initFooter } from './sections/Footer.js';

const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    ${renderNavbar()}
    <main id="main-content">
      ${renderHero()}
      ${renderLogoCarousel()}
      ${renderFeaturesGrid()}
      ${renderFeatureShowcase()}
      ${renderStatsSection()}
      ${renderInterfaceSpotlight()}
      ${renderPricingCTA()}
      ${renderTestimonials()}
      ${renderFAQ()}
    </main>
    ${renderFooter()}
  `;

  initNavbar();
  initHero();
  initLogoCarousel();
  initFeaturesGrid();
  initFeatureShowcase();
  initStatsSection();
  initInterfaceSpotlight();
  initPricingCTA();
  initTestimonials();
  initFAQ();
  initFooter();
}

renderApp();
