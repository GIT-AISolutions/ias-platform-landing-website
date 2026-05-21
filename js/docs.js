/* ═══════════════════════════════════════════════════════
   OPENCODIE DOCS — JAVASCRIPT
   ═══════════════════════════════════════════════════════ */

/* ── Init Lucide icons ── */
if (window.lucide) lucide.createIcons();

/* ── Nav scroll effect ── */
const nav = document.getElementById('nav');
const navBurger = document.getElementById('nav-burger');
const navMobile = document.getElementById('nav-mobile');
const sidebar = document.getElementById('docs-sidebar');
const toggleBtn = document.getElementById('docs-toggle');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

function setMobileNavOpen(open) {
  if (!nav || !navBurger || !navMobile) return;
  nav.classList.toggle('is-open', open);
  navBurger.setAttribute('aria-expanded', open ? 'true' : 'false');
  navMobile.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function setSidebarOpen(open) {
  if (!sidebar || !toggleBtn) return;
  sidebar.classList.toggle('open', open);
  toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  sidebar.setAttribute('aria-hidden', open ? 'false' : 'true');
}

navBurger?.addEventListener('click', () => {
  const open = !nav?.classList.contains('is-open');
  setMobileNavOpen(open);
  if (open) setSidebarOpen(false);
});

navMobile?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileNavOpen(false));
});

if (window.innerWidth <= 900) setSidebarOpen(false);

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
    if (window.innerWidth <= 900) setSidebarOpen(false);
  });
});

/* ── Mobile sidebar toggle ── */
toggleBtn?.addEventListener('click', () => {
  const open = !sidebar?.classList.contains('open');
  setSidebarOpen(open);
  if (open) setMobileNavOpen(false);
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (nav && !nav.contains(target)) setMobileNavOpen(false);
  if (
    sidebar &&
    toggleBtn &&
    window.innerWidth <= 900 &&
    !sidebar.contains(target) &&
    !toggleBtn.contains(target)
  ) {
    setSidebarOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMobileNavOpen(false);
    setSidebarOpen(false);
  }
});

/* ── Sidebar search filter ── */
const searchInput = document.getElementById('sidebar-search');
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  sideLinks.forEach(a => {
    const match = a.textContent.toLowerCase().includes(q);
    a.parentElement.style.display = match ? '' : 'none';
  });
});
