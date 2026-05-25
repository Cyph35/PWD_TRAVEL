// Wrap DOM-dependent setup so pages missing elements don't throw errors
document.addEventListener('DOMContentLoaded', () => {
  // ========== AUTH MODAL ==========
  const authModal = document.getElementById('authModal');
  const modalClose = document.getElementById('modalClose');
  const authContainer = document.getElementById('authContainer');
  const authRegisterBtn = document.getElementById('authRegisterBtn');
  const authLoginBtn = document.getElementById('authLoginBtn');
  const authGoRegister = document.getElementById('authGoRegister');
  const authGoLogin = document.getElementById('authGoLogin');

  function openModal() {
    if (!authModal) return;
    authModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!authModal) return;
    authModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open on LOG IN / SIGN IN button
  document.querySelectorAll('[data-action="openAuth"]').forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // Close on X
  modalClose?.addEventListener('click', closeModal);

  // Close on overlay click
  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Toggle to Sign Up
  authRegisterBtn?.addEventListener('click', () => authContainer?.classList.add('active'));
  authGoRegister?.addEventListener('click', (e) => { e.preventDefault(); authContainer?.classList.add('active'); });

  // Toggle to Sign In
  authLoginBtn?.addEventListener('click', () => authContainer?.classList.remove('active'));
  authGoLogin?.addEventListener('click', (e) => { e.preventDefault(); authContainer?.classList.remove('active'); });

  // ========== AUTH FORMS - REDIRECT TO HOME ==========
  const signInForm = document.getElementById('authSignInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailEl = document.querySelector('#authSignInForm input[type="email"]');
      const passwordEl = document.querySelector('#authSignInForm input[type="password"]');
      const email = emailEl?.value.trim() || '';
      const password = passwordEl?.value.trim() || '';
      if (!email || !password) { alert('Please fill in all fields.'); return; }
      closeModal();
      setTimeout(() => { window.location.href = 'home.html'; }, 300);
    });
  }

  const signUpForm = document.getElementById('authSignUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#authSignUpForm input[type="text"]')?.value.trim() || '';
      const email = document.querySelector('#authSignUpForm input[type="email"]')?.value.trim() || '';
      const password = document.querySelector('#authSignUpForm input[type="password"]')?.value.trim() || '';
      if (!name || !email || !password) { alert('Please fill in all required fields.'); return; }
      closeModal();
      setTimeout(() => { window.location.href = 'home.html'; }, 300);
    });
  }

  // ========== HAMBURGER MENU ==========
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ========== ACTIVE NAV LINK ON SCROLL ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(section => observer.observe(section));
  }

  // ========== JOURNEY FORM SUBMIT ==========
  const journeyForm = document.getElementById('journeyForm');
  if (journeyForm) {
    journeyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = document.getElementById('destination')?.value.trim();
      const departure = document.getElementById('departure')?.value;
      const travelers = document.getElementById('travelers')?.value;
      const needs = document.getElementById('needs')?.value.trim();

      if (!destination) { alert('Please enter a destination.'); return; }
      if (!departure) { alert('Please select a departure date.'); return; }

      alert(`Journey calculated!\nDestination: ${destination}\nDeparture: ${departure}\nTravelers: ${travelers}\nNeeds: ${needs || 'None specified'}`);
    });
  }

  // ========== SMOOTH SCROLL BUTTONS ==========
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ========== NAVBAR SCROLL SHADOW ==========
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 32px rgba(0,0,0,0.4)' : 'none';
    });
  }

  // ========== LETTER BY LETTER HERO TITLE ==========
  const h1Spans = document.querySelectorAll('.hero h1 span');
  if (h1Spans.length) {
    let globalDelay = 0;
    h1Spans.forEach((span) => {
      const text = span.textContent;
      span.textContent = '';
      [...text].forEach((char) => {
        const el = document.createElement('span');
        el.classList.add('char');
        el.textContent = char === ' ' ? '\u00A0' : char;
        el.style.animationDelay = `${globalDelay}s`;
        span.appendChild(el);
        globalDelay += 0.04;
      });
    });
  }
});

// ========== SETTINGS / ACCESSIBILITY CONTROLS ==========
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const uiSizeSelect = document.getElementById('uiSizeSelect');
  const fontSizeSelect = document.getElementById('fontSizeSelect');
  const colorBlindSelect = document.getElementById('colorBlindSelect');
  const voiceToggle = document.getElementById('voiceToggle');

  // Apply saved prefs
  const saved = JSON.parse(localStorage.getItem('pwd_settings') || '{}');
  if (saved.theme === 'light') document.documentElement.classList.add('light-theme');
  if (themeToggle) { themeToggle.checked = saved.theme === 'light'; }
  if (uiSizeSelect && saved.uiSize) uiSizeSelect.value = saved.uiSize;
  if (fontSizeSelect && saved.fontSize) fontSizeSelect.value = saved.fontSize;
  if (colorBlindSelect && saved.colorBlind) colorBlindSelect.value = saved.colorBlind;
  if (voiceToggle) voiceToggle.setAttribute('aria-pressed', saved.voice === true ? 'true' : 'false');

  // Helpers
  function persist() {
    const state = {
      theme: document.documentElement.classList.contains('light-theme') ? 'light' : 'dark',
      uiSize: uiSizeSelect?.value || '1',
      fontSize: fontSizeSelect?.value || '16',
      colorBlind: colorBlindSelect?.value || 'off',
      voice: voiceToggle?.getAttribute('aria-pressed') === 'true'
    };
    localStorage.setItem('pwd_settings', JSON.stringify(state));
  }

  // Theme toggle
  themeToggle?.addEventListener('change', (e) => {
    if (e.target.checked) document.documentElement.classList.add('light-theme');
    else document.documentElement.classList.remove('light-theme');
    persist();
  });

  // UI size (zoom)
  uiSizeSelect?.addEventListener('change', (e) => {
    const v = e.target.value || '1';
    document.body.style.zoom = v; // non-destructive visual scale
    persist();
  });
  // apply immediate
  if (uiSizeSelect) document.body.style.zoom = uiSizeSelect.value;

  // Font size
  fontSizeSelect?.addEventListener('change', (e) => {
    const v = e.target.value || '16';
    document.documentElement.style.fontSize = v + 'px';
    persist();
  });
  if (fontSizeSelect) document.documentElement.style.fontSize = fontSizeSelect.value + 'px';

  // Color blind modes
  function applyColorBlind(mode) {
    document.documentElement.classList.remove('filter-protanopia','filter-deuteranopia','filter-tritanopia');
    if (mode === 'protanopia') document.documentElement.classList.add('filter-protanopia');
    if (mode === 'deuteranopia') document.documentElement.classList.add('filter-deuteranopia');
    if (mode === 'tritanopia') document.documentElement.classList.add('filter-tritanopia');
  }
  colorBlindSelect?.addEventListener('change', (e) => { applyColorBlind(e.target.value); persist(); });
  if (colorBlindSelect) applyColorBlind(colorBlindSelect.value);

  // Voice toggle (tactile only)
  voiceToggle?.addEventListener('click', (e) => {
    const cur = voiceToggle.getAttribute('aria-pressed') === 'true';
    voiceToggle.setAttribute('aria-pressed', (!cur).toString());
    voiceToggle.classList.toggle('active', !cur);
    persist();
  });
});
