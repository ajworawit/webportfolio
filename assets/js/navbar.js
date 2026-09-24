/**
 * ==========================================================================
 * NAVBAR.JS - Multi-Page Active Nav Tracking, Sticky Header, Mobile Collapse
 * Portfolio for Creative Media Student
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navToggler = document.querySelector('.navbar-toggler');

  /* --------------------------------------------------------------------------
   * 1. STICKY NAVBAR ON SCROLL
   * -------------------------------------------------------------------------- */
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  /* --------------------------------------------------------------------------
   * 2. MULTI-PAGE ACTIVE NAVIGATION HIGHLIGHT
   * -------------------------------------------------------------------------- */
  function highlightCurrentPage() {
    const rawPath = window.location.pathname;
    let pageName = rawPath.split('/').pop().toLowerCase();

    // Default to index.html if empty or ends with slash
    if (!pageName || pageName === '') {
      pageName = 'index.html';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFile = href.split('#')[0].toLowerCase();
      
      // Match exact filename or index fallback
      if (linkFile === pageName || (pageName === 'index.html' && (linkFile === 'index.html' || linkFile === './' || linkFile === ''))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightCurrentPage();

  /* --------------------------------------------------------------------------
   * 3. SMOOTH SCROLL FOR IN-PAGE ANCHORS ONLY & MOBILE COLLAPSE
   * -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (navbarHeight - 10);

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }

      // Auto-collapse mobile navbar after clicking link
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else if (navToggler) {
          navToggler.click();
        }
      }
    });
  });
});
