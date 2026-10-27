/* ===== MSTech Main JS ===== */
document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const sections = document.querySelectorAll('section[id]');
  const btt = document.getElementById('back-to-top');

  /* ---------- Active nav highlight ---------- */
  function updateActiveNav () {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ---------- Back to top visibility ---------- */
  function toggleBackToTop () {
    if (!btt) return;
    btt.classList.toggle('visible', window.scrollY > 400);
  }

  /* ---------- Header scroll effect ---------- */
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveNav();
    toggleBackToTop();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Hamburger menu ---------- */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const open = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', open);
      hamburger.querySelectorAll('span').forEach((s, i) => {
        if (open) {
          if (i === 0) { s.style.transform = 'rotate(45deg) translate(5px, 5px)'; }
          if (i === 1) { s.style.opacity = '0'; }
          if (i === 2) { s.style.transform = 'rotate(-45deg) translate(5px, -5px)'; }
        } else {
          s.style.transform = '';
          s.style.opacity = '';
        }
      });
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  /* ---------- Tabs: đã xử lý bằng inline script trong HTML ---------- */

  /* ---------- Intersection Observer (fade-in) ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  function checkVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function revealAll() {
    fadeEls.forEach(el => {
      if (checkVisible(el)) {
        el.classList.add('visible');
      }
    });
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => io.observe(el));

  // Kích hoạt ngay khi trang load xong (cho phần đã sẵn trong viewport)
  revealAll();
  window.addEventListener('scroll', revealAll, { passive: true });

  // Failsafe: sau 600ms, hiện tất cả còn lại (tránh bị kẹt khi điều hướng #hash)
  setTimeout(() => {
    fadeEls.forEach(el => el.classList.add('visible'));
  }, 600);

  /* ---------- Back to top ---------- */
  if (btt) {
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Smooth scroll for all # links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });

  onScroll();

});
