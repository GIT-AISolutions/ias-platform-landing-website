/* ═══════════════════════════════════════════════════════
   OPENCODIE DOCS — JAVASCRIPT
   ═══════════════════════════════════════════════════════ */

/* ── Init Lucide icons ── */
lucide.createIcons();

/* ── Nav scroll effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Active section highlight in sidebar ── */
const sections  = document.querySelectorAll('.doc-section[id]');
const sideLinks = document.querySelectorAll('.sidebar-nav a');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sideLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.sidebar-nav a[href="#${entry.target.id}"]`);
      if (active) {
        active.classList.add('active');
        active.scrollIntoView({ block: 'nearest' });
      }
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => io.observe(s));

/* ── Smooth sidebar clicks ── */
sideLinks.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth <= 900) sidebar.classList.remove('open');
  });
});

/* ── Mobile sidebar toggle ── */
const sidebar = document.getElementById('docs-sidebar');
const toggleBtn = document.getElementById('docs-toggle');
toggleBtn?.addEventListener('click', () => sidebar.classList.toggle('open'));

/* ── Sidebar search filter ── */
const searchInput = document.getElementById('sidebar-search');
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  sideLinks.forEach(a => {
    const match = a.textContent.toLowerCase().includes(q);
    a.parentElement.style.display = match ? '' : 'none';
  });
});
