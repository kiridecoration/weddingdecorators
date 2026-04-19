document.addEventListener('DOMContentLoaded', () => {
  
  // 1. UPDATE COPYRIGHT YEARS GLOBALLY
  // In your HTML, change id="year2" to class="current-year"
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.current-year').forEach(span => {
    span.innerText = currentYear;
  });

  // 2. MOBILE NAVIGATION TOGGLE
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open'); // Let CSS handle the styling
    });
  }

  // 3. SCROLL REVEAL OBSERVER (For Gallery, Services, and Hero)
  // We apply the observer to everything we want to fade in
  const animateItems = document.querySelectorAll('.service-card, .gallery-grid img, .lux-reveal, .hero-content');

  const observerOptions = {
    threshold: 0.15 // Triggers when 15% of the item is visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the visible class to trigger the CSS transition
        entry.target.classList.add('is-visible');
        
        // Stop observing the item once it has been revealed (saves memory)
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // Start observing all the items
  animateItems.forEach(el => {
    // We add the initial hidden state class via JS here as a fallback 
    // just in case we forgot to add '.reveal-item' in the HTML
    el.classList.add('reveal-item'); 
    revealObserver.observe(el);
  });

});
