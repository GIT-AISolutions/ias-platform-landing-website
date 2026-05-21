/* ═══════════════════════════════════════════════════════
   OPENCODIE — MAIN JAVASCRIPT
   ═══════════════════════════════════════════════════════ */

/* ── Always start at top on load/refresh ── */
window.scrollTo(0, 0);

/* ── Init Lucide icons ── */
lucide.createIcons();

/* ── Register GSAP plugins ── */
gsap.registerPlugin(ScrollTrigger);

/* ── Nav scroll effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ══════════════════════════════════════════
   HERO — animate in on load
══════════════════════════════════════════ */
const heroItems = gsap.utils.toArray('#hero .hero-content > *');
if (heroItems.length) {
  gsap.fromTo(heroItems,
    { y: 32, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
  );
}

const heroVisual = document.querySelector('#hero .hero-visual');
if (heroVisual) {
  gsap.fromTo(heroVisual,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
  );
}

const trustItems = gsap.utils.toArray('#trust .trust-item');
if (trustItems.length) {
  gsap.fromTo(trustItems,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
  );
}

/* ── Hero scroll parallax ── */
if (document.querySelector('#hero .hero-content')) {
  gsap.to('#hero .hero-content', {
    y: 80, opacity: 0.4, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}

/* ── Hero orb mouse parallax ── */
let raf;
document.addEventListener('mousemove', e => {
  if (raf) cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 22;
    const y = (e.clientY / window.innerHeight - 0.5) * 22;
    gsap.to('#hero .orb-a', { x,  y,  duration: 0.6, ease: 'power1.out' });
    gsap.to('#hero .orb-b', { x: -x, y: -y, duration: 0.6, ease: 'power1.out' });
  });
});

/* ══════════════════════════════════════════
   SCROLL REVEALS — helper function
══════════════════════════════════════════ */
function revealFrom(selector, vars, triggerEl) {
  const els = gsap.utils.toArray(selector);
  if (!els.length) return;
  gsap.fromTo(els,
    { y: vars.y ?? 30, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: vars.duration ?? 0.7,
      stagger: vars.stagger ?? 0,
      ease: vars.ease ?? 'power2.out',
      scrollTrigger: {
        trigger: triggerEl ?? els[0],
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    }
  );
}

/* ── Features ── */
revealFrom('#features .feature-card', { stagger: 0.08 }, '#features .features-grid');

/* ── Platform layer ── */
revealFrom('#platform .plat-layer', { stagger: 0.1 }, '#platform .platform-visual');

/* ── How it works steps ── */
revealFrom('#how .step', { y: 20, stagger: 0.1 }, '#how .steps-row');

/* ── BYOA cards ── */
revealFrom('.byoa-card', { stagger: 0.1 }, '#byoa .byoa-cards');

/* ── Pricing cards ── */
revealFrom('#pricing .plan-card', { stagger: 0.12, ease: 'back.out(1.4)' }, '#pricing .pricing-grid');

/* ── Control pillars ── */
revealFrom('#control .pillar', { stagger: 0.1 }, '#control .pillars');

/* ── Section headings ── */
revealFrom('#ps h3, #features h2, #platform h2, #how h2, #byoa h2, #pricing h2, #control h2, #contact h2, #faq h2, #cta h2', { y: 20 });

/* ── Remaining reveal elements ── */
revealFrom('#ps .ps-card, #contact .contact-form, #pricing .fair-box, #pricing .comp-wrap, #faq .faq-item, #cta .eyebrow, #cta .sub, #cta .actions', { y: 24, stagger: 0.08 });

/* ══════════════════════════════════════════
   FAQ accordion
══════════════════════════════════════════ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const fields = contactForm.querySelectorAll('input, textarea');
    let valid = true;

    fields.forEach(f => {
      f.classList.remove('error');
      if (!f.value.trim()) { f.classList.add('error'); valid = false; }
    });

    if (!valid) return;

    /* Show success — replace with real backend/formspree call when ready */
    contactForm.querySelector('.form-footer').style.display = 'none';
    const success = document.getElementById('form-success');
    success.classList.add('visible');
    lucide.createIcons();
    contactForm.reset();
  });
}

/* ══════════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════════ */
const cookieBanner = document.getElementById('cookie-banner');
if (cookieBanner && !localStorage.getItem('cookie-consent')) {
  cookieBanner.classList.remove('hidden');
} else if (cookieBanner) {
  cookieBanner.classList.add('hidden');
}

document.getElementById('cookie-accept')?.addEventListener('click', () => {
  localStorage.setItem('cookie-consent', 'accepted');
  cookieBanner.classList.add('hidden');
});

document.getElementById('cookie-decline')?.addEventListener('click', () => {
  localStorage.setItem('cookie-consent', 'declined');
  cookieBanner.classList.add('hidden');
});
