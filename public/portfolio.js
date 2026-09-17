(() => {
  if (window.__portfolioMotion) return;
  window.__portfolioMotion = true;
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  const motionButtons = () => document.querySelectorAll('.motion-toggle');
  function setMotion() {
    root.classList.toggle('motion-paused', paused);
    motionButtons().forEach(button => { button.textContent = paused ? 'Enable motion' : 'Pause motion'; button.setAttribute('aria-pressed', String(paused)); });
  }
  function initReveals() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    root.classList.add('motion-ready');
  }
  let lastTrigger = null;
  let activeDialog = null;
  let previousHash = '';
  function closeDialog(updateUrl = true) {
    if (activeDialog) activeDialog.close();
    activeDialog = null;
    document.body.classList.remove('modal-open');
    if (updateUrl && location.hash.startsWith('#project-')) history.replaceState(null, '', location.pathname + location.search + (previousHash || '#work'));
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  }
  function openProject(id, trigger, updateUrl = true) {
    const dialog = document.getElementById('dialog-' + id);
    if (!(dialog instanceof HTMLDialogElement)) return;
    if (trigger && !trigger.closest('dialog')) lastTrigger = trigger;
    if (!activeDialog) previousHash = location.hash.startsWith('#project-') ? '#work' : location.hash;
    if (activeDialog && activeDialog !== dialog) activeDialog.close();
    activeDialog = dialog;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    if (updateUrl) history.pushState({ project: id }, '', '#project-' + id);
    dialog.querySelector('.dialog-close')?.focus({ preventScroll: true });
  }
  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const projectLink = target.closest('[data-project]');
    if (projectLink) { event.preventDefault(); openProject(projectLink.dataset.project, projectLink); return; }
    if (target.closest('.dialog-close')) { closeDialog(); return; }
    if (target instanceof HTMLDialogElement) {
      const rect = target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
    }
    if (target.closest('.motion-toggle')) { paused = !paused; setMotion(); return; }
    const menuButton = target.closest('.menu-toggle');
    const menu = document.getElementById('mobile-nav');
    if (menuButton && menu) { const isOpen = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!isOpen)); menu.hidden = isOpen; return; }
    if (target.closest('#mobile-nav a') && menu) { menu.hidden = true; document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false'); }
  });
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); }));
  window.addEventListener('popstate', () => {
    if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9), null, false);
    else closeDialog(false);
  });
  let scrollQueued = false;
  function updateProgress() {
    const progress = document.querySelector('.reading-progress');
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    scrollQueued = false;
  }
  window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { document.querySelectorAll('.site-header nav a').forEach(link => { if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }
    }), { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));
  }
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      let frame = 0;
      card.addEventListener('pointermove', event => {
        if (paused || reduced.matches) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - .5;
          const y = (event.clientY - rect.top) / rect.height - .5;
          const base = card.classList.contains('portrait-stack') ? 5 : 0;
          card.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) rotateZ(${base}deg)`;
        });
      });
      card.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); card.style.transform = ''; });
    });
  }
  reduced.addEventListener('change', () => { paused = reduced.matches; setMotion(); });
  setMotion(); initReveals(); updateProgress();
  if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9), null, false);
})();
