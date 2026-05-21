/* ═══════════════════════════════════════════════════════
   OPENCODIE — MAIN JAVASCRIPT
   ═══════════════════════════════════════════════════════ */

window.scrollTo(0, 0);
lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);

/* smoother default — all scrub-based tweens use this lag */
ScrollTrigger.config({ limitCallbacks: true });
gsap.defaults({ ease: 'power2.out' });

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ══════════════════════════════════════════
   HERO V2 — entrance animations
══════════════════════════════════════════ */
const heroEyebrow = document.getElementById('hero-eyebrow');
const heroH1      = document.getElementById('hero-h1');
const heroSubtext = document.getElementById('hero-subtext');
const heroActions = document.getElementById('hero-actions');
const heroHint    = document.getElementById('hero-scroll-hint');

const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
if (heroEyebrow) heroTl.fromTo(heroEyebrow, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.1);
if (heroH1)      heroTl.fromTo(heroH1,      { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1  }, 0.22);
if (heroSubtext) heroTl.fromTo(heroSubtext, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0  }, 0.38);
if (heroActions) {
  const btns = Array.from(heroActions.querySelectorAll('.btn'));
  btns.forEach((btn, i) => {
    heroTl.fromTo(btn,
      { y: 40, opacity: 0, scale: 0.88 },
      { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(2)' },
      0.52 + i * 0.13
    );
  });
}
if (heroHint) heroTl.fromTo(heroHint, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.9);

/* ══════════════════════════════════════════
   HERO V2 — hero text fade on scroll
══════════════════════════════════════════ */
ScrollTrigger.create({
  trigger: '#hero',
  start: 'top top',
  end: 'bottom top',
  scrub: 1.5,
  onUpdate(self) {
    const content = document.querySelector('.hero-intro-content');
    if (content) {
      gsap.set(content, { y: self.progress * 60, opacity: Math.max(0, 1 - self.progress * 1.4) });
    }
  }
});

window.OpenCodieLaptopDemo?.initVideoScroll();


const trustItems = gsap.utils.toArray('#trust .trust-item');
if (trustItems.length) {
  gsap.fromTo(trustItems,
    { y: 18, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out',
      scrollTrigger: { trigger: '#trust', start: 'top 85%', once: true } }
  );
}

/* ══════════════════════════════════════════
   SHARED SCROLL-REVEAL HELPER
══════════════════════════════════════════ */
function onEnter(trigger, fn, start = 'top 88%') {
  ScrollTrigger.create({ trigger, start, once: true, onEnter: fn });
}

/* ══════════════════════════════════════════
   SECTION HEADINGS — gentle rise
══════════════════════════════════════════ */
gsap.utils.toArray('.section-header h2, #ps h3').forEach(el => {
  gsap.fromTo(el,
    { y: 22, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 91%', toggleActions: 'play none none none' }
    }
  );
});

gsap.utils.toArray('.section-header p, .section-header .eyebrow').forEach(el => {
  gsap.fromTo(el,
    { y: 14, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 93%', toggleActions: 'play none none none' }
    }
  );
});

/* ══════════════════════════════════════════
   PROBLEM / SOLUTION — glide from sides
══════════════════════════════════════════ */
const psLeft = document.querySelector('#ps .ps-card.problem');
const psRight = document.querySelector('#ps .ps-card.solution');
const useCompactScrollReveals = window.matchMedia('(max-width: 560px)').matches;
if (psLeft) {
  gsap.fromTo(psLeft,
    { x: useCompactScrollReveals ? 0 : -40, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: '#ps', start: 'top 84%', toggleActions: 'play none none none' } }
  );
}
if (psRight) {
  gsap.fromTo(psRight,
    { x: useCompactScrollReveals ? 0 : 40, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.1, ease: 'expo.out', delay: 0.12,
      scrollTrigger: { trigger: '#ps', start: 'top 84%', toggleActions: 'play none none none' } }
  );
}

/* ══════════════════════════════════════════
   PLATFORM — stagger + connector draw
══════════════════════════════════════════ */
const platLayers = gsap.utils.toArray('#platform .plat-layer');
if (platLayers.length) {
  gsap.fromTo(platLayers,
    { y: 32, opacity: 0, scale: 0.97 },
    {
      y: 0, opacity: 1, scale: 1,
      duration: 1, stagger: 0.2, ease: 'expo.out',
      scrollTrigger: {
        trigger: '#platform .platform-visual', start: 'top 84%', toggleActions: 'play none none none',
        onEnter() {
          setTimeout(() => {
            document.querySelectorAll('.plat-connector').forEach(c => c.classList.add('line-drawn'));
          }, 500);
        }
      }
    }
  );
}

/* ══════════════════════════════════════════
   FEATURES — single group trigger, clean stagger
══════════════════════════════════════════ */
const featureCards = gsap.utils.toArray('#features .feature-card');
if (featureCards.length) {
  gsap.fromTo(featureCards,
    { y: 32, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 0.9, stagger: 0.09, ease: 'expo.out',
      onComplete() {
        featureCards.forEach(card => card.classList.add('anim-done'));
      },
      scrollTrigger: {
        trigger: '#features .features-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        onEnter() {
          featureCards.forEach(card => {
            const icon = card.querySelector('.f-icon');
            if (icon) icon.classList.add('glow-once');
          });
        }
      }
    }
  );
}

/* ── Smooth 3D tilt on feature cards ── */
featureCards.forEach(card => {
  let tiltRaf;
  let tRx = 0, tRy = 0, cRx = 0, cRy = 0;

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    tRx = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -5;
    tRy = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  5;
    if (!tiltRaf) tiltLoop();
  });

  function tiltLoop() {
    cRx += (tRx - cRx) * 0.1;
    cRy += (tRy - cRy) * 0.1;
    gsap.set(card, { rotateX: cRx, rotateY: cRy, transformPerspective: 1000 });
    if (Math.abs(tRx - cRx) > 0.05 || Math.abs(tRy - cRy) > 0.05) {
      tiltRaf = requestAnimationFrame(tiltLoop);
    } else {
      tiltRaf = null;
    }
  }

  card.addEventListener('mouseleave', () => {
    tRx = 0; tRy = 0;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'expo.out' });
    tiltRaf = null;
  });
});

/* ══════════════════════════════════════════
   HOW IT WORKS — each step triggers itself
══════════════════════════════════════════ */
const steps = gsap.utils.toArray('#how .step');
steps.forEach(step => {
  const numEl = step.querySelector('.step-n');
  const target = numEl ? parseInt(numEl.textContent, 10) : 0;

  gsap.fromTo(step,
    { y: 28, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 0.9, ease: 'expo.out',
      scrollTrigger: {
        trigger: step, start: 'top 88%', toggleActions: 'play none none none',
        onEnter() {
          step.classList.add('revealed');
          if (!numEl) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target, duration: 0.7, ease: 'power2.out',
            onUpdate() { numEl.textContent = String(Math.round(obj.val)).padStart(2, '0'); },
            onComplete() { step.classList.add('anim-done'); }
          });
        }
      }
    }
  );
});

/* ══════════════════════════════════════════
   BYOA CARDS — gentle spring
══════════════════════════════════════════ */
gsap.utils.toArray('.byoa-card').forEach((card, i) => {
  gsap.fromTo(card,
    { y: 38, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 1, ease: 'expo.out',
      delay: i * 0.12,
      scrollTrigger: { trigger: '#byoa .byoa-cards', start: 'top 87%', toggleActions: 'play none none none' }
    }
  );
});

/* ══════════════════════════════════════════
   PRICING — rise + smooth 3D tilt
══════════════════════════════════════════ */
const planCards = gsap.utils.toArray('#pricing .plan-card');
planCards.forEach((card, i) => {
  gsap.fromTo(card,
    { y: 40, opacity: 0, scale: 0.96 },
    {
      y: 0, opacity: 1, scale: 1,
      duration: 1, ease: 'expo.out',
      delay: i * 0.13,
      scrollTrigger: { trigger: '#pricing .pricing-grid', start: 'top 85%', toggleActions: 'play none none none' }
    }
  );

  let pRaf;
  let tRx = 0, tRy = 0, cRx = 0, cRy = 0;

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    tRx = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -3.5;
    tRy = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  3.5;
    if (!pRaf) priceTiltLoop();
  });

  function priceTiltLoop() {
    cRx += (tRx - cRx) * 0.1;
    cRy += (tRy - cRy) * 0.1;
    gsap.set(card, { rotateX: cRx, rotateY: cRy, transformPerspective: 1000 });
    if (Math.abs(tRx - cRx) > 0.05 || Math.abs(tRy - cRy) > 0.05) {
      pRaf = requestAnimationFrame(priceTiltLoop);
    } else {
      pRaf = null;
    }
  }

  card.addEventListener('mouseleave', () => {
    tRx = 0; tRy = 0;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'expo.out' });
    pRaf = null;
  });
});

/* ══════════════════════════════════════════
   CONTROL PILLARS — fan-in
══════════════════════════════════════════ */
gsap.utils.toArray('#control .pillar').forEach((pillar, i) => {
  const xFrom = useCompactScrollReveals ? 0 : i === 0 ? -30 : i === 2 ? 30 : 0;
  gsap.fromTo(pillar,
    { x: xFrom, y: 22, opacity: 0 },
    {
      x: 0, y: 0, opacity: 1,
      duration: 1, ease: 'expo.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: '#control .pillars', start: 'top 85%', toggleActions: 'play none none none' }
    }
  );
});

/* ══════════════════════════════════════════
   CTA — parallax orb + entrance
══════════════════════════════════════════ */
gsap.to('#cta .cta-orb', {
  y: -50, ease: 'none',
  scrollTrigger: { trigger: '#cta', start: 'top bottom', end: 'bottom top', scrub: 2 }
});

gsap.utils.toArray('#cta .inner-z > *').forEach((el, i) => {
  gsap.fromTo(el,
    { y: 26, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: 'expo.out',
      delay: i * 0.11,
      scrollTrigger: { trigger: '#cta', start: 'top 86%', toggleActions: 'play none none none' }
    }
  );
});

/* ══════════════════════════════════════════
   FAQ — slide in from left
══════════════════════════════════════════ */
gsap.utils.toArray('#faq .faq-item').forEach((item, i) => {
  gsap.fromTo(item,
    { x: -18, opacity: 0 },
    {
      x: 0, opacity: 1,
      duration: 0.8, ease: 'expo.out',
      delay: i * 0.06,
      scrollTrigger: { trigger: item, start: 'top 91%', toggleActions: 'play none none none' }
    }
  );
});

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
gsap.fromTo('#contact .contact-form',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '#contact', start: 'top 85%', toggleActions: 'play none none none' } }
);

/* ══════════════════════════════════════════
   COMPARISON TABLE + FAIR BOX
══════════════════════════════════════════ */
gsap.fromTo('#pricing .fair-box, #pricing .comp-wrap',
  { y: 24, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'expo.out',
    scrollTrigger: { trigger: '#pricing .fair-box', start: 'top 89%', toggleActions: 'play none none none' } }
);

/* ══════════════════════════════════════════
   LOGO MARQUEE — pause on hover
══════════════════════════════════════════ */
const logoTrack = document.querySelector('.logo-track');
if (logoTrack) {
  logoTrack.addEventListener('mouseenter', () => { logoTrack.style.animationPlayState = 'paused'; });
  logoTrack.addEventListener('mouseleave', () => { logoTrack.style.animationPlayState = 'running'; });
}

/* ══════════════════════════════════════════
   FOOTER — subtle rise
══════════════════════════════════════════ */
gsap.fromTo('footer .footer-grid',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out',
    scrollTrigger: { trigger: 'footer', start: 'top 93%', toggleActions: 'play none none none' } }
);

/* ══════════════════════════════════════════
   FAQ ACCORDION
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
   CONTACT FORM SUBMIT
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
