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
const LEGAL_SECTION_PATHS = {
  '/terms': 'terms',
  '/privacy': 'privacy',
  '/cookies': 'cookies',
  '/dpa': 'dpa',
  '/acceptable-use': 'acceptable-use',
  '/subprocessors': 'subprocessors',
  '/report-abuse': 'report-abuse',
};

function getSectionIdFromLink(link) {
  const href = link.getAttribute('href') || '';
  if (href.startsWith('#')) return href.slice(1);
  try {
    return LEGAL_SECTION_PATHS[new URL(href, window.location.origin).pathname] || '';
  } catch {
    return '';
  }
}

function getLinkForSection(id) {
  return Array.from(sideLinks).find((link) => getSectionIdFromLink(link) === id);
}

function scrollToSection(id, behavior = 'smooth') {
  const target = id ? document.getElementById(id) : null;
  if (!target) return false;
  target.scrollIntoView({ behavior, block: 'start' });
  return true;
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sideLinks.forEach(a => a.classList.remove('active'));
      const active = getLinkForSection(entry.target.id);
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
    const sectionId = getSectionIdFromLink(a);
    if (scrollToSection(sectionId)) {
      e.preventDefault();
      const href = a.getAttribute('href') || '';
      if (href.startsWith('/')) history.pushState(null, '', href);
    }
    if (window.innerWidth <= 900) setSidebarOpen(false);
  });
});

window.addEventListener('load', () => {
  scrollToSection(LEGAL_SECTION_PATHS[window.location.pathname], 'auto');
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
