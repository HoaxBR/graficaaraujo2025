import { initializePortfolio } from './portfolio.js';
import { initializeTestimonials } from './testimonials.js';
import { setupScrollAnimations } from './animations.js';
import { setupContactForm } from './contact.js';
import { setupMobileMenu } from './mobileMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initializePortfolio();
  initializeTestimonials();
  setupScrollAnimations();
  setupContactForm();
  setupMobileMenu();
  
  // Back to top button functionality
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Add click handlers for service cards that scroll to portfolio sections
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');
      const portfolioSection = document.querySelector(`#${service}`);
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});