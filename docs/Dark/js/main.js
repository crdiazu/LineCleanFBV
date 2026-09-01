/* LineClean FBV — Dark Cyberpunk Interacciones & Anime.js Animations */

(function () {
  'use strict';

  // Año en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll glow
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

  // Anime.js Cyberpunk Choreography
  function initCyberAnime() {
    if (typeof anime === 'undefined') return;

    // 1. Console Terminal Typewriter & Stagger Reveal
    anime({
      targets: '.console__line',
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(250),
      duration: 800,
      easing: 'easeOutCode'
    });

    anime({
      targets: '.console__title',
      opacity: [0, 1],
      scale: [0.92, 1],
      duration: 1000,
      delay: 700,
      easing: 'easeOutElastic(1, .6)'
    });

    // 2. Cyber Monitors Grid Stagger
    anime({
      targets: '.monitor-screen',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.9, 1],
      duration: 900,
      delay: anime.stagger(150, { start: 900 }),
      easing: 'spring(1, 80, 10, 0)'
    });

    // 3. Cyber Button Glow Pulsing
    document.querySelectorAll('.btn--cyber, .btn-scan').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        anime({
          targets: btn,
          scale: 1.04,
          boxShadow: '0 0 25px #00f0ff, 0 0 50px #00f0ff',
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
      btn.addEventListener('mouseleave', function () {
        anime({
          targets: btn,
          scale: 1,
          boxShadow: '0 0 12px #00f0ff, 4px 4px 0 #050505',
          duration: 300,
          easing: 'easeOutExpo'
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

  // Formulario WhatsApp
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
    document.addEventListener('DOMContentLoaded', initCyberAnime);
  } else {
    initCyberAnime();
  }
})();
