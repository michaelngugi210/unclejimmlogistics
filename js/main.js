// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-on-scroll');
    }
  });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Observe all sections and relevant elements
  document.querySelectorAll('section, .testimonial, .stat-item, .destination-card, .service, p, h3').forEach(el => {
    observer.observe(el);
  });

  // Mobile menu toggle
  const menuToggleButton = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  
  if (menuToggleButton && primaryNav) {
    menuToggleButton.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggleButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Lazy load images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});
