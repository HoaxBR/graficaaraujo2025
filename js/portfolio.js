export function initializePortfolio() {
  const portfolioCategories = {
    agendas: [
      {
        image: 'AGENDA 1.jpeg',
        title: 'Agendas Personalizadas 2025',
        description: 'Agendas para Papel Criativo e Biscoitos Gourmet'
      },
      {
        image: 'AGENDA 2.jpeg',
        title: 'Agenda Assistente Social',
        description: 'Agenda profissional personalizada'
      },
      {
        image: 'AGENDA 3.jpeg',
        title: 'Agenda Advocacia',
        description: 'Agenda jurídica personalizada'
      },
      {
        image: 'AGENDA 4.jpeg',
        title: 'Agenda CS Serviços Agrícolas',
        description: 'Agenda corporativa 2025'
      },
      {
        image: 'AGENDA 5.jpeg',
        title: 'Agenda Escolar',
        description: 'Agenda estudantil personalizada'
      },
      {
        image: 'AGENDA 6.jpeg',
        title: 'Agendas Construtora',
        description: 'Agendas corporativas Itusane'
      }
    ],
    cartoes: [
      {
        image: 'Cartão de Visita 1.jpeg',
        title: 'Net Fibra+',
        description: 'Cartões corporativos tecnologia'
      },
      {
        image: 'Cartão de Visita 2.jpeg',
        title: 'PHD Reunidas Agrícola',
        description: 'Cartão profissional agricultura'
      },
      {
        image: 'Cartão de Visita 3.jpeg',
        title: 'Uber - Hugo',
        description: 'Cartão serviços de transporte'
      }
    ],
    banners: [
      {
        image: 'BANNER 1.jpeg',
        title: 'Banner Formatura',
        description: 'Banner comemorativo Dr. Luis Fernando'
      },
      {
        image: 'BANNER 2.jpeg',
        title: 'Banner Pasteleria Lee',
        description: 'Banner menu e produtos'
      },
      {
        image: 'BANNER 3.jpeg',
        title: 'Banner Serviços Lima',
        description: 'Banner promocional serviços'
      },
      {
        image: 'BANNER 4.jpeg',
        title: 'Banner Montagem',
        description: 'Banner serviços profissionais'
      }
    ],
    adesivos: [
      {
        image: 'ADESIVOS 1.jpeg',
        title: 'Adesivos Omcilon',
        description: 'Adesivos instrucionais'
      },
      {
        image: 'ADESIVOS 2.jpeg',
        title: 'Adesivos VIP CAR',
        description: 'Adesivos automotivos'
      },
      {
        image: 'ADESIVOS 3.jpeg',
        title: 'Adesivos Aniversário',
        description: 'Adesivos comemorativos'
      },
      {
        image: 'ADESIVOS 5.jpeg',
        title: 'Adesivos Espaço Fashion',
        description: 'Adesivos empresariais'
      }
    ]
  };

  // Fill each category's portfolio items
  Object.entries(portfolioCategories).forEach(([category, items]) => {
    const categoryContainer = document.querySelector(`#${category} .portfolio-items-list`);
    if (categoryContainer) {
      items.forEach(item => {
        const itemElement = createPortfolioItem(item);
        categoryContainer.appendChild(itemElement);
      });
    }
  });

  // Initialize horizontal scroll with mouse wheel
  setupHorizontalScroll();
}

function createPortfolioItem(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'portfolio-item fade-in';
  
  itemElement.innerHTML = `
    <div class="portfolio-image">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </div>
    <h4>${item.title}</h4>
    <p>${item.description}</p>
  `;

  return itemElement;
}

function setupHorizontalScroll() {
  const containers = document.querySelectorAll('.portfolio-items-scroll');
  
  containers.forEach(container => {
    container.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    });
  });
}