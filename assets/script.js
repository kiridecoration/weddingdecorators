(function(){
  document.getElementById('year')?.innerText = new Date().getFullYear();
  document.getElementById('year2')?.innerText = new Date().getFullYear();
  document.getElementById('year3')?.innerText = new Date().getFullYear();
  document.getElementById('year4')?.innerText = new Date().getFullYear();
  document.getElementById('year5')?.innerText = new Date().getFullYear();
  document.getElementById('year6')?.innerText = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
    });
  }
})();
const luxItems = document.querySelectorAll(
  '.service-card, .gallery-grid img, .lux-reveal'
);

const luxObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition =
        'opacity 0.9s ease, transform 0.9s ease';
    }
  });
}, { threshold: 0.18 });

luxItems.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  luxObserver.observe(el);
});
