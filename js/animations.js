export function setupScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(element => {
    observer.observe(element);
  });

  // Add typewriter effect
  const messages = [
    "Onde qualidade encontra criatividade",
    "Sua identidade visual em boas mãos",
    "Impressões que fazem a diferença",
    "Excelência em cada detalhe"
  ];
  
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 50;
  let newTextDelay = 2000;
  
  function typeWriter() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;
    
    const currentText = messages[messageIndex];
    
    if (isDeleting) {
      typedTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, newTextDelay);
      return;
    }
    
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeWriter, 500);
      return;
    }
    
    setTimeout(typeWriter, isDeleting ? erasingDelay : typingDelay);
  }
  
  // Start the typewriter effect
  typeWriter();
}