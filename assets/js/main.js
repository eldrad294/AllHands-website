(function () {
  'use strict';

  var header    = document.querySelector('.site-header');
  var hamburger = document.querySelector('.nav-hamburger');

  // 1. Sticky nav shadow on scroll
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. Mobile nav toggle
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on any mobile nav link click
    document.querySelectorAll('.nav-mobile .nav-link, .nav-mobile .nav-github').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        header.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Scroll-in animations via IntersectionObserver
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }
}());
