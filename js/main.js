// NAV scroll effect
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
  header.classList.toggle('logo-visible', window.scrollY > window.innerHeight - 100);
  scrollTop.classList.toggle('visible', window.scrollY > 400);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Scroll to top
const scrollTop = document.getElementById('scrollTop');
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
