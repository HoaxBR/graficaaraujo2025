export function setupMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuBtn.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
  });

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}