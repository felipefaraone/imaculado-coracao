/* animations.js — Fade-in on scroll + micro-interações
   Respeita prefers-reduced-motion. Conteúdo visível mesmo sem JS. */
(function () {
  'use strict';

  /* ---------- Fade-in on scroll ---------- */
  const CSS = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 600ms ease-out, transform 600ms ease-out;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .fade-in { opacity: 1 !important; transform: none !important; transition: none !important; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  function initObserver() {
    if (!window.IntersectionObserver) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }

  /* ---------- Copiar código PIX ---------- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const target = document.querySelector(btn.dataset.copy);
    if (!target) return;
    const text = target.textContent.trim();
    navigator.clipboard.writeText(text).then(function () {
      const original = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
      setTimeout(function () { btn.innerHTML = original; }, 1800);
    }).catch(function () {
      /* fallback silencioso */
    });
  });

})();
