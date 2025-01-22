export function initializeTestimonials() {
  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente qualidade de impressão e atendimento muito profissional! A Gráfica Araújo superou todas as minhas expectativas.",
      role: "Empresário"
    },
    {
      name: "Maria Santos",
      text: "Sempre entregam no prazo e com qualidade excepcional. Os materiais impressos são impecáveis!",
      role: "Designer"
    },
    {
      name: "Pedro Oliveira",
      text: "Os melhores serviços gráficos que já utilizei. Equipe sempre muito atenciosa e produtos de primeira linha.",
      role: "Marketing"
    }
  ];

  const carousel = document.querySelector('.testimonials-carousel');
  let currentIndex = 0;

  function createTestimonialElement(testimonial) {
    return `
      <div class="testimonial-slide">
        <blockquote>${testimonial.text}</blockquote>
        <cite>
          <strong>${testimonial.name}</strong>
          <span>${testimonial.role}</span>
        </cite>
      </div>
    `;
  }

  function updateCarousel() {
    const testimonial = testimonials[currentIndex];
    const newSlide = createTestimonialElement(testimonial);
    
    const slideElement = document.createElement('div');
    slideElement.innerHTML = newSlide;
    
    carousel.innerHTML = '';
    carousel.appendChild(slideElement.firstElementChild);
    
    setTimeout(() => {
      document.querySelector('.testimonial-slide').classList.add('active');
    }, 100);

    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  updateCarousel();
  setInterval(updateCarousel, 5000);
}