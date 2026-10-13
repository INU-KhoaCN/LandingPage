/**
 * Khoa Công Nghệ – Landing Page
 * Navigation scroll, smooth anchor links, scroll reveal animations
 */

const nav = document.getElementById('main-nav');
const pill = nav.querySelector('.nav-pill');

window.addEventListener('scroll', () => {
  pill.classList.toggle('scrolled', window.scrollY > 80);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 76,
      behavior: 'smooth',
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.val-card, .img-card, .adm-card, .career-card, .why-card, .method-card, .nganh-card')
  .forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(22px)';
    element.style.transition = 'opacity .5s ease, transform .5s ease';
    revealObserver.observe(element);
  });
