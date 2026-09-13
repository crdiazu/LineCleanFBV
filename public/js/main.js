/**
 * LineClean FBV — Impacto
 * Core Interactions, Sticky Navigation, Mobile Drawer & Scroll Cross-Fade Engine
 */

(function () {
  'use strict';

  function init() {
    initStickyHeader();
    initMobileNav();
    initVisualPanelTransitions();
    initSmoothAnchors();
    initDynamicYear();
    initContactForm();
  }

  /**
   * 1. Sticky Header & Scroll Blur Backdrop
   */
  function initStickyHeader() {
    const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  /**
   * 2. Mobile Drawer Navigation & Auto-Close
   */
  function initMobileNav() {
    const navToggle = document.getElementById('navToggle') || document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav') || document.querySelector('.navbar__nav');

    if (!navToggle || !nav) return;

    const toggleMenu = (forceState) => {
      const isOpen = typeof forceState === 'boolean' ? forceState : !nav.classList.contains('open');
      nav.classList.toggle('open', isOpen);
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Prevent body scrolling when mobile menu is open
      if (window.innerWidth <= 992) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Auto-close menu when clicking any nav anchor link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(false);
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
        document.body.style.overflow = '';
      }
    });

    // Reset body overflow on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && nav.classList.contains('open')) {
        toggleMenu(false);
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * 3. Visual Panel Background Switcher & Scroll Animations (R8)
   */
  function initVisualPanelTransitions() {
    const bgs = document.querySelectorAll('.visual-panel__bg');
    const sections = document.querySelectorAll('.scroll-section');

    if (!bgs.length || !sections.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers without IntersectionObserver
      if (bgs[0]) bgs[0].classList.add('active');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-5% 0px -15% 0px',
      threshold: [0.15, 0.35, 0.6]
    };

    let activeBgIndex = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger card animations in the intersecting section
          const animatedItems = entry.target.querySelectorAll('.service-card, .case-card, .feature-card, .capability-item, .cta-banner-card, .animate-on-scroll');
          animatedItems.forEach((item) => item.classList.add('animate'));

          // Read data-bg attribute
          const rawBg = entry.target.getAttribute('data-bg');
          if (rawBg !== null) {
            let bgIndex = parseInt(rawBg, 10);
            if (isNaN(bgIndex)) bgIndex = 0;
            if (bgIndex >= bgs.length) bgIndex = bgs.length - 1;
            if (bgIndex < 0) bgIndex = 0;

            if (bgIndex !== activeBgIndex) {
              activeBgIndex = bgIndex;
              bgs.forEach((bg, index) => {
                if (index === bgIndex) {
                  bg.classList.add('active');
                } else {
                  bg.classList.remove('active');
                }
              });
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * 4. Smooth Anchor Link Scrolling
   */
  function initSmoothAnchors() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without jumping
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

  /**
   * 5. Dynamic Footer Year (R7)
   */
  function initDynamicYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * 6. Interactive Contact Form Validation & WhatsApp Dispatch (R6)
   */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const servicioInput = document.getElementById('servicio');
    const mensajeInput = document.getElementById('mensaje');
    const formStatus = document.getElementById('formStatus');

    const errorEls = {
      nombre: document.getElementById('nombreError'),
      email: document.getElementById('emailError'),
      telefono: document.getElementById('telefonoError'),
      servicio: document.getElementById('servicioError'),
      mensaje: document.getElementById('mensajeError'),
    };

    const inputs = [nombreInput, emailInput, telefonoInput, servicioInput, mensajeInput].filter(Boolean);

    // Email validation regex (standard RFC check)
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).trim());
    };

    const setFieldError = (input, errorEl, message) => {
      if (!input) return;
      const wrapper = input.closest('.input-wrapper');
      if (wrapper) {
        wrapper.classList.add('invalid');
        wrapper.classList.remove('valid');
      }
      if (errorEl) {
        errorEl.textContent = message;
      }
    };

    const clearFieldError = (input, errorEl) => {
      if (!input) return;
      const wrapper = input.closest('.input-wrapper');
      if (wrapper) {
        wrapper.classList.remove('invalid');
        if (input.value && input.value.trim().length > 0) {
          wrapper.classList.add('valid');
        } else {
          wrapper.classList.remove('valid');
        }
      }
      if (errorEl) {
        errorEl.textContent = '';
      }
    };

    // Real-time error clearing and validation
    inputs.forEach((input) => {
      const fieldName = input.id;
      const errorEl = errorEls[fieldName];

      input.addEventListener('input', () => {
        if (input.closest('.input-wrapper')?.classList.contains('invalid')) {
          validateSingleField(input, false);
        }
      });

      input.addEventListener('blur', () => {
        if (input.value.trim().length > 0) {
          validateSingleField(input, true);
        }
      });
    });

    function validateSingleField(input, isBlur) {
      const val = input.value.trim();
      const id = input.id;
      const errorEl = errorEls[id];

      if (id === 'nombre') {
        if (!val) {
          if (isBlur) setFieldError(input, errorEl, 'Por favor ingresa tu nombre y apellido.');
          return false;
        } else if (val.length < 2) {
          setFieldError(input, errorEl, 'El nombre debe contener al menos 2 caracteres.');
          return false;
        }
      } else if (id === 'email') {
        if (!val) {
          if (isBlur) setFieldError(input, errorEl, 'Por favor ingresa tu correo electrónico.');
          return false;
        } else if (!isValidEmail(val)) {
          setFieldError(input, errorEl, 'Ingresa un correo electrónico válido (ej: contacto@empresa.cl).');
          return false;
        }
      } else if (id === 'telefono') {
        if (!val) {
          if (isBlur) setFieldError(input, errorEl, 'Por favor ingresa tu número de contacto.');
          return false;
        } else if (val.replace(/\D/g, '').length < 8) {
          setFieldError(input, errorEl, 'Ingresa un teléfono válido de al menos 8 dígitos.');
          return false;
        }
      } else if (id === 'servicio') {
        if (!val) {
          if (isBlur) setFieldError(input, errorEl, 'Por favor selecciona un servicio requerido.');
          return false;
        }
      } else if (id === 'mensaje') {
        if (!val) {
          if (isBlur) setFieldError(input, errorEl, 'Por favor ingresa los detalles de tu faena.');
          return false;
        } else if (val.length < 5) {
          setFieldError(input, errorEl, 'El mensaje debe contener al menos 5 caracteres.');
          return false;
        }
      }

      clearFieldError(input, errorEl);
      return true;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;
      let firstInvalidInput = null;

      const validations = [
        {
          input: nombreInput,
          errorEl: errorEls.nombre,
          test: () => nombreInput.value.trim().length >= 2,
          msg: 'El nombre es obligatorio (mínimo 2 caracteres).'
        },
        {
          input: emailInput,
          errorEl: errorEls.email,
          test: () => isValidEmail(emailInput.value),
          msg: 'Ingresa un correo electrónico válido (ej: contacto@empresa.cl).'
        },
        {
          input: telefonoInput,
          errorEl: errorEls.telefono,
          test: () => telefonoInput.value.replace(/\D/g, '').length >= 8,
          msg: 'Ingresa un teléfono de contacto con al menos 8 dígitos.'
        },
        {
          input: servicioInput,
          errorEl: errorEls.servicio,
          test: () => Boolean(servicioInput.value),
          msg: 'Selecciona un servicio de la lista.'
        },
        {
          input: mensajeInput,
          errorEl: errorEls.mensaje,
          test: () => mensajeInput.value.trim().length >= 5,
          msg: 'Describe tu requerimiento (mínimo 5 caracteres).'
        }
      ];

      validations.forEach(({ input, errorEl, test, msg }) => {
        if (!input) return;
        if (!test()) {
          setFieldError(input, errorEl, msg);
          hasErrors = true;
          if (!firstInvalidInput) {
            firstInvalidInput = input;
          }
        } else {
          clearFieldError(input, errorEl);
        }
      });

      if (hasErrors) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Por favor completa todos los campos obligatorios correctamente.';
          formStatus.style.display = 'block';
        }
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // Construct WhatsApp message payload
      const nombre = nombreInput.value.trim();
      const email = emailInput.value.trim();
      const telefono = telefonoInput.value.trim();
      const servicio = servicioInput.value;
      const mensaje = mensajeInput.value.trim();

      const messageLines = [
        `*Nueva Consulta Web — LineClean FBV*`,
        `👤 *Nombre:* ${nombre}`,
        `📧 *Email:* ${email}`,
        `📞 *Teléfono:* ${telefono}`,
        `🏢 *Servicio:* ${servicio}`,
        `💬 *Mensaje:* ${mensaje}`
      ];

      const whatsappText = encodeURIComponent(messageLines.join('\n'));
      const corporatePhone = '56994175680';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${corporatePhone}&text=${whatsappText}`;

      // Success notification
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '<i class="ph-bold ph-check-circle"></i> ¡Datos validados con éxito! Redirigiendo a WhatsApp para coordinar tu cotización...';
        formStatus.style.display = 'block';
      }

      // Reset form
      form.reset();
      inputs.forEach((input) => {
        const wrapper = input.closest('.input-wrapper');
        if (wrapper) {
          wrapper.classList.remove('valid', 'invalid');
        }
      });

      // Dispatch to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 400);
    });
  }

  // Initialize once DOM is fully parsed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
