// ========== AUTH MODAL ==========
const authModal = document.getElementById('authModal');
const modalClose = document.getElementById('modalClose');
const authContainer = document.getElementById('authContainer');
const authRegisterBtn = document.getElementById('authRegisterBtn');
const authLoginBtn = document.getElementById('authLoginBtn');
const authGoRegister = document.getElementById('authGoRegister');
const authGoLogin = document.getElementById('authGoLogin');

function openModal() {
  authModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  authModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on LOG IN / SIGN IN button
document.querySelectorAll('[data-action="openAuth"]').forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Close on X
modalClose.addEventListener('click', closeModal);

// Close on overlay click
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) closeModal();
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Toggle to Sign Up
authRegisterBtn.addEventListener('click', () => authContainer.classList.add('active'));
authGoRegister.addEventListener('click', (e) => { e.preventDefault(); authContainer.classList.add('active'); });

// Toggle to Sign In
authLoginBtn.addEventListener('click', () => authContainer.classList.remove('active'));
authGoLogin.addEventListener('click', (e) => { e.preventDefault(); authContainer.classList.remove('active'); });

// ========== AUTH FORMS - REDIRECT TO HOME ==========
document.getElementById('authSignInForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#authSignInForm input[type="email"]').value.trim();
  const password = document.querySelector('#authSignInForm input[type="password"]').value.trim();
  if (!email || !password) { alert('Please fill in all fields.'); return; }
  closeModal();
  setTimeout(() => { window.location.href = 'home.html'; }, 300);
});

document.getElementById('authSignUpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#authSignUpForm input[type="text"]').value.trim();
  const email = document.querySelector('#authSignUpForm input[type="email"]').value.trim();
  const phone = document.querySelector('#authSignUpForm input[type="tel"]').value.trim();
  const password = document.querySelector('#authSignUpForm input[type="password"]').value.trim();
  if (!name || !email || !password) { alert('Please fill in all required fields.'); return; }
  closeModal();
  setTimeout(() => { window.location.href = 'home.html'; }, 300);
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

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

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

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

// ========== JOURNEY FORM SUBMIT ==========
const journeyForm = document.getElementById('journeyForm');
journeyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const destination = document.getElementById('destination').value.trim();
  const departure = document.getElementById('departure').value;
  const travelers = document.getElementById('travelers').value;
  const needs = document.getElementById('needs').value.trim();

  if (!destination) { alert('Please enter a destination.'); return; }
  if (!departure) { alert('Please select a departure date.'); return; }

  alert(`Journey calculated!\nDestination: ${destination}\nDeparture: ${departure}\nTravelers: ${travelers}\nNeeds: ${needs || 'None specified'}`);
});

// ========== SMOOTH SCROLL BUTTONS ==========
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== NAVBAR SCROLL SHADOW ==========
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 32px rgba(0,0,0,0.4)' : 'none';
});

// ========== LETTER BY LETTER HERO TITLE ==========
document.addEventListener('DOMContentLoaded', () => {
  const h1Spans = document.querySelectorAll('.hero h1 span');
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
});
