/* LineClean FBV — Web Core Interacciones & Anime.js Animations */

(function () {
  'use strict';

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Menú móvil
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  // Anime.js Animation Engine
  function initAnimeEngine() {
    if (typeof anime === 'undefined') return;

    // 1. Hero Reveal
    anime({
      targets: '.hero__title, .hero__label, .hero__content p, .hero__actions',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150),
      easing: 'spring(1, 80, 10, 0)'
    });

    // 2. Service Cards Stagger
    anime({
      targets: '.service-card, .servicio-card, .proyectos__item',
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(120, { start: 400 }),
      easing: 'easeOutCubic'
    });

    // 3. Interactive Buttons Micro-Bounce
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        anime({
          targets: btn,
          scale: 1.03,
          duration: 250,
          easing: 'easeOutQuad'
        });
      });
      btn.addEventListener('mouseleave', function () {
        anime({
          targets: btn,
          scale: 1,
          duration: 250,
          easing: 'easeOutQuad'
        });
      });
    });
  }

  // Fallback reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (typeof anime !== 'undefined') {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutCubic'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Form WhatsApp
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = document.getElementById('nombre');
      var email = document.getElementById('email');
      var telefono = document.getElementById('telefono');
      var servicio = document.getElementById('servicio');
      var mensaje = document.getElementById('mensaje');

      if (!nombre || !nombre.value.trim()) {
        nombre.focus();
        return;
      }

      var texto = 'Hola LineClean, quiero cotizar:%0A'
        + '%0A*Nombre:* ' + encodeURIComponent(nombre.value.trim())
        + (telefono && telefono.value.trim() ? '%0A*Teléfono:* ' + encodeURIComponent(telefono.value.trim()) : '')
        + (email && email.value.trim() ? '%0A*Email:* ' + encodeURIComponent(email.value.trim()) : '')
        + (servicio && servicio.value ? '%0A*Servicio:* ' + encodeURIComponent(servicio.value) : '')
        + (mensaje && mensaje.value.trim() ? '%0A*Mensaje:* ' + encodeURIComponent(mensaje.value.trim()) : '');

      var url = 'https://api.whatsapp.com/send?phone=56994175680&text=' + texto;

      var success = document.querySelector('.form__success');
      if (success) success.classList.add('show');

      window.open(url, '_blank');
      form.reset();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimeEngine);
  } else {
    initAnimeEngine();
  }
})();
