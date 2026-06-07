/* ─── Splash (index only, once per session) ─────────────────── */
function initSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  // If already seen this session, skip immediately
  if (sessionStorage.getItem('splashSeen')) {
    splash.classList.add('hidden');
    return;
  }

  const splashText = document.getElementById('splash-text');
  const splashBar  = document.getElementById('splash-bar');

  const messages = ["Hello", "Bonjour", "Ciao", "こんにちは", "안녕하세요"];
  let index = 0;

  function showNext() {
    splashText.style.opacity = 0;
    setTimeout(() => {
      splashText.textContent = messages[index];
      splashText.style.opacity = 1;
      index++;
      if (index < messages.length) {
        setTimeout(showNext, 500);
      } else {
        setTimeout(() => {
          splash.classList.add('hidden');
          sessionStorage.setItem('splashSeen', '1');
        }, 950);
      }
    }, 200);
  }

  splashText.textContent = messages[0];
  splashText.style.opacity = 1;
  index = 1;

  // Kick off progress bar
  requestAnimationFrame(() => {
    splashBar.style.width = '100%';
  });

  setTimeout(showNext, 500);
}

/* ─── Nav active state ──────────────────────────────────────── */
function initNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html') ||
        (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ─── Project card tilt ─────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 8;
      card.style.transform = `translateY(-4px) rotateX(${-y}deg) rotateY(${x}deg)`;
      card.style.transformStyle = 'preserve-3d';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─── Contact form ──────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = '✓ Message sent';
    btn.style.background = 'linear-gradient(135deg, rgba(74,222,128,0.6), rgba(74,222,128,0.3))';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ─── Boot ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  initNav();
  initCardTilt();
  initContactForm();
});
