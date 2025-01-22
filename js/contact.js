export function setupContactForm() {
  // Add any additional contact-related functionality here
  const contactCards = document.querySelectorAll('.contact-card');
  
  contactCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}