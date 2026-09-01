/* LineClean FBV — Neo Brutalism Interacciones & Anime.js Animations */

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

  // Anime.js Neo Kinetic Choreography
  function initNeoAnime() {
    if (typeof anime === 'undefined') return;

    // 1. Asymmetric Grid Items Entrance
    anime({
      targets: '.neo-item, .neo-hero__box, .neo-card',
      translateY: [60, 0],
      translateX: [-15, 0],
      rotate: [-2, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150),
      easing: 'spring(1, 85, 12, 0)'
    });

    // 2. 3D Hard Shadow Hover Animation
    document.querySelectorAll('.neo-item, .neo-card, .btn').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        anime({
          targets: el,
          translateY: -8,
          translateX: -8,
          boxShadow: '12px 12px 0px #1a1a1a',
          duration: 200,
          easing: 'easeOutQuad'
        });
      });
      el.addEventListener('mouseleave', function () {
        anime({
          targets: el,
          translateY: 0,
          translateX: 0,
          boxShadow: '6px 6px 0px #1a1a1a',
          duration: 200,
          easing: 'easeOutQuad'
        });
      });
    });

    // 3. Giant Number Bounce on Hover
    document.querySelectorAll('.neo-item__num').forEach(function (num) {
      num.addEventListener('mouseenter', function () {
        anime({
          targets: num,
          scale: [1, 1.2, 1],
          rotate: [0, -5, 5, 0],
          duration: 600,
          easing: 'easeOutElastic(1, .5)'
        });
      });
    });
  }

  // Fallback Intersection Observer
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
              translateY: [40, 0],
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
    document.addEventListener('DOMContentLoaded', initNeoAnime);
  } else {
    initNeoAnime();
  }
})();
