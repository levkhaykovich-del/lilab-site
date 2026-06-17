/* ============================================================
   LiLab — main.js
   Nav + footer injection, scroll behaviour, mobile menu,
   AOS init, GLightbox init, email obfuscation.
   ============================================================ */

/* ── Shared HTML ─────────────────────────────────────────── */

const NAV_HTML = `
<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-2 group">
      <span class="font-display font-bold text-white text-xl tracking-tight">LiLab</span>
      <span class="text-cyan-400/60 text-sm hidden sm:inline">· Bar-Ilan University</span>
    </a>
    <div class="hidden md:flex items-center gap-7">
      <a href="index.html"        class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Home</a>
      <a href="research.html"     class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Research</a>
      <a href="publications.html" class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Publications</a>
      <a href="group.html"        class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Group</a>
      <a href="teaching.html"     class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Teaching</a>
      <a href="gallery.html"      class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Gallery</a>
      <a href="contact.html"      class="nav-link text-white/65 hover:text-white text-sm font-medium transition-colors duration-200">Contact</a>
      <a href="join.html" class="bg-[#e63946] hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg shadow-red-900/30">Join Us</a>
    </div>
    <button id="mobile-menu-btn" class="md:hidden text-white/80 hover:text-white p-1 transition-colors" aria-label="Toggle menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
  <div id="mobile-menu" class="md:hidden px-6 pb-5 pt-3 flex-col gap-3 border-t border-white/10" style="background:rgba(13,27,42,0.98)">
    <a href="index.html"        class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Home</a>
    <a href="research.html"     class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Research</a>
    <a href="publications.html" class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Publications</a>
    <a href="group.html"        class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Group</a>
    <a href="teaching.html"     class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Teaching</a>
    <a href="gallery.html"      class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Gallery</a>
    <a href="contact.html"      class="block text-white/80 hover:text-white text-sm py-1.5 transition-colors">Contact</a>
    <a href="join.html"         class="block text-[#e63946] font-semibold text-sm py-1.5">Join Us →</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer style="background:#0d1b2a;" class="text-white/55 border-t border-white/10">
  <div class="max-w-7xl mx-auto px-6 py-14">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      <div>
        <div class="font-display font-bold text-white text-xl mb-3">LiLab</div>
        <p class="text-sm leading-relaxed">
          Ultracold Atoms Laboratory<br>
          Department of Physics<br>
          Bar-Ilan University<br>
          Ramat Gan 5290002, Israel
        </p>
      </div>
      <div>
        <div class="text-white font-semibold text-xs uppercase tracking-widest mb-4">Quick Links</div>
        <div class="flex flex-col gap-2 text-sm">
          <a href="research.html"     class="hover:text-white transition-colors">Research</a>
          <a href="publications.html" class="hover:text-white transition-colors">Publications</a>
          <a href="group.html"        class="hover:text-white transition-colors">Group Members</a>
          <a href="gallery.html"      class="hover:text-white transition-colors">Gallery</a>
          <a href="join.html"         class="hover:text-[#e63946] text-[#e63946]/80 font-medium transition-colors">Join Us</a>
        </div>
      </div>
      <div>
        <div class="text-white font-semibold text-xs uppercase tracking-widest mb-4">Contact</div>
        <div class="text-sm flex flex-col gap-1.5">
          <span>Prof. Lev Khaykovich</span>
          <a id="footer-email" href="#" class="text-cyan-400/80 hover:text-cyan-300 transition-colors">lev.khaykovich@biu.ac.il</a>
          <span>Tel: +972-3-5317747</span>
          <a href="http://physics.biu.ac.il" target="_blank" class="hover:text-white transition-colors mt-1 inline-block">BIU Physics Department →</a>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
      <span>© 2025 Khaykovich Lab · Bar-Ilan University · Department of Physics</span>
      <span>lev.khaykovich@biu.ac.il</span>
    </div>
  </div>
</footer>`;

/* ── Boot ────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // Inject nav
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  // Inject footer
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Highlight active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.remove('text-white/65');
      a.classList.add('text-white', 'font-semibold');
    }
  });

  // Sticky nav background
  const nav = document.getElementById('main-nav');
  if (nav) {
    const tick = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  // Mobile menu toggle
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Email obfuscation — same technique as original site
  const enc = 'li.ca.uib@hcivokyahk.vel';
  const dec = enc.split('').reverse().join('');
  // Footer email
  const fe = document.getElementById('footer-email');
  if (fe) { fe.href = 'mailto:' + dec; fe.textContent = dec; }
  // Any inline [data-email] spans
  document.querySelectorAll('[data-email]').forEach(el => {
    el.href = 'mailto:' + dec;
    if (!el.textContent.trim()) el.textContent = dec;
  });

  // AOS scroll animations
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 0 });
  }

  // GLightbox (active on pages that use it)
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ touchNavigation: true, loop: true, autoplayVideos: true });
  }

});
