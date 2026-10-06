function initializeSite() {
  if (document.documentElement.dataset.siteReady === 'true') return;
  document.documentElement.dataset.siteReady = 'true';

  const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle');
  const updateThemeLabel = () => {
    themeToggle?.setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', document.documentElement.dataset.theme === 'dark' ? '#121c1c' : '#f5f6f2');
  };
  updateThemeLabel();
  themeToggle?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('hussain-theme', theme); } catch { /* Theme also works without storage. */ }
    updateThemeLabel();
  });

  const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const navigation = document.querySelector<HTMLElement>('.main-nav');
  const closeMenu = () => {
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    document.documentElement.classList.remove('menu-is-open');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.documentElement.classList.toggle('menu-is-open', open);
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (event.target instanceof Node && !navigation?.contains(event.target) && !menu?.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  document.querySelectorAll<HTMLElement>('[data-journal-browser]').forEach(browser => {
    const cards = [...browser.querySelectorAll<HTMLElement>('[data-journal-card]')];
    const filters = [...browser.querySelectorAll<HTMLButtonElement>('[data-topic]')];
    const search = browser.querySelector<HTMLInputElement>('[data-journal-search]');
    const status = browser.querySelector<HTMLElement>('[data-journal-status]');
    const empty = browser.querySelector<HTMLElement>('[data-journal-empty]');
    let topic = 'all';
    const filter = () => {
      const query = (search?.value || '').trim().toLocaleLowerCase();
      let count = 0;
      cards.forEach(card => {
        const visible = (topic === 'all' || card.dataset.category === topic) && (!query || card.dataset.search?.includes(query));
        card.hidden = !visible;
        if (visible) count++;
      });
      filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === topic)));
      if (status) status.textContent = `${count} ${count === 1 ? 'note' : 'notes'}`;
      if (empty) empty.hidden = count > 0;
    };
    filters.forEach(button => button.addEventListener('click', () => { topic = button.dataset.topic || 'all'; filter(); }));
    search?.addEventListener('input', filter);
    search?.addEventListener('search', filter);
    browser.querySelector<HTMLButtonElement>('[data-journal-reset]')?.addEventListener('click', () => { topic = 'all'; if (search) search.value = ''; filter(); });
  });

  const toast = document.querySelector<HTMLElement>('#site-toast');
  let toastTimer: ReturnType<typeof setTimeout>;
  const announce = (text: string) => {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3000);
  };
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email], [data-copy-url]').forEach(button => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copyEmail || button.dataset.copyUrl;
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        announce(button.dataset.copyEmail ? 'Email address copied.' : 'Article link copied.');
      } catch {
        announce('Copy is unavailable in this browser. You can select the address or copy the page URL.');
      }
    });
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
  }
}

initializeSite();
