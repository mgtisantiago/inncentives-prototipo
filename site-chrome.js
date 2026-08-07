/* Header y footer compartidos como web components: un <script src> normal
   funciona con file://, así el sitio exportado en .zip se ve igual que aquí. */
(() => {
  const CSS = `
@media (max-width: 1023px){
  #site-nav{padding-left:24px !important;padding-right:24px !important}
  #site-nav .nav-desktop{display:none !important}
  #site-nav .nav-burger{display:flex !important}
  #site-nav .nav-login{display:none !important}
  #site-nav .nav-logo img{width:180px !important}
  #site-footer{padding-left:32px !important;padding-right:32px !important;flex-direction:column !important;justify-content:center !important;text-align:center !important;gap:10px !important}
}
@media (max-width: 767px){
  #site-footer{padding-left:24px !important;padding-right:24px !important;gap:8px !important}
  #site-footer span{font-size:13px !important;line-height:1.65 !important;max-width:300px;text-wrap:balance}
}
@media (max-width: 479px){
  #site-nav{padding-left:16px !important;padding-right:16px !important}
  #site-nav .nav-logo img{width:150px !important}
  #site-nav .nav-cta{padding:11px 14px !important;font-size:12.5px !important}
  #site-footer{padding-left:16px !important;padding-right:16px !important}
}`;

  function frag(html) {
    const t = document.createElement('template');
    t.innerHTML = html;
    return t.content;
  }

  const BASE = `:host{display:block}a{text-decoration:none}`;
  function mount(el) {
    const root = el.shadowRoot || el.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = BASE + CSS;
    root.appendChild(style);
    return root;
  }

  const LINKS = [
    ['producto', 'Producto', 'producto.html'],
    ['soluciones', 'Soluciones', 'soluciones.html'],
    ['casos', 'Casos de éxito', 'casos-de-exito.html'],
    ['recursos', 'Recursos', 'recursos.html']
  ];

  const logo = () => (window.__resources && window.__resources.navLogo) || 'assets/inncentives-logo.svg?v=3';

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      const root = mount(this);
      this.style.position = this.style.position || 'sticky';
      this.style.top = '0';
      this.style.zIndex = '60';
      this.style.width = '100%';

      const desktop = LINKS.map(([k, label, href]) =>
        `<a data-nav="${k}" href="${href}" style="font:500 14px/1 'Inter',sans-serif;color:#1A1A1A;white-space:nowrap;text-decoration:none">${label}</a>`
      ).join('');
      const mobile = LINKS.map(([k, label, href]) =>
        `<a data-navm="${k}" href="${href}" style="font:500 26px/1.3 'Inter',sans-serif;color:#1A1A1A;padding:16px 0;border-bottom:1px solid rgba(26,26,26,.08);text-decoration:none">${label}</a>`
      ).join('');

      root.append(frag(`
<header id="site-nav" style="background:transparent;transition:background .25s ease, box-shadow .25s ease, padding .25s ease;width:100%;max-width:1440px;margin:0 auto;padding:26px 128px;display:flex;align-items:center;gap:16px 24px;box-sizing:border-box">
<a href="index.html" class="nav-logo" style="display:flex;align-items:center;flex:1 1 0;min-width:0;justify-content:flex-start">
<img src="${logo()}" alt="Inncentives" style="width:233px;height:28px;display:block">
</a>
<nav class="nav-desktop" style="display:flex;align-items:center;justify-content:center;flex:none;gap:26px;white-space:nowrap">${desktop}</nav>
<div style="display:flex;align-items:center;gap:16px;flex:1 1 0;min-width:0;justify-content:flex-end">
<a href="#login" class="nav-login" style="font:500 14px/1 'Inter',sans-serif;color:rgba(42,49,128,.7);white-space:nowrap;text-decoration:none">Iniciar sesión</a>
<a href="#demo" class="nav-cta" style="font:600 12px/1 'Inter',sans-serif;color:#FFFFFF;background:#2A3180;border-radius:10px;padding:13px 20px;white-space:nowrap;box-shadow:0 12px 24px -14px rgba(42,49,128,.9);text-decoration:none">Agendar demo</a>
<button type="button" class="nav-burger" aria-label="Abrir menú" style="display:none;align-items:center;justify-content:center;width:36px;height:36px;flex:none;border:1px solid rgba(26,26,26,.14);border-radius:11px;background:#FFFFFF;cursor:pointer;padding:0">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
</button>
</div>
</header>
<div id="nav-panel" style="position:fixed;inset:0;z-index:200;background:#FFFFFF;display:none;flex-direction:column;padding:22px 24px 40px;box-sizing:border-box;overflow-y:auto">
<div style="display:flex;align-items:center;justify-content:space-between;gap:16px">
<a href="index.html" style="display:flex;align-items:center;flex:none"><img src="${logo()}" alt="Inncentives" style="width:180px;height:auto;display:block"></a>
<button type="button" data-close aria-label="Cerrar menú" style="display:flex;align-items:center;justify-content:center;width:46px;height:46px;flex:none;border:1px solid rgba(26,26,26,.14);border-radius:11px;background:#FFFFFF;cursor:pointer;padding:0">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
</button>
</div>
<nav style="display:flex;flex-direction:column;gap:4px;padding-top:34px">${mobile}</nav>
<div style="display:flex;flex-direction:column;gap:12px;padding-top:34px;margin-top:auto">
<a href="#demo" style="font:600 15px/1 'Inter',sans-serif;color:#FFFFFF;background:#2A3180;border-radius:11px;padding:18px 22px;text-align:center;text-decoration:none">Agendar demo</a>
<a href="#login" style="font:600 15px/1 'Inter',sans-serif;color:#2A3180;background:#FFFFFF;border:1px solid rgba(42,49,128,.18);border-radius:11px;padding:18px 22px;text-align:center;text-decoration:none">Iniciar sesión</a>
</div>
</div>`));

      root.querySelector('.nav-burger').addEventListener('click', this.toggle);
      root.querySelector('[data-close]').addEventListener('click', this.toggle);
      this.markActive();
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll);
      this.onScroll();
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }

    static get observedAttributes() { return ['active']; }
    attributeChangedCallback() { if (this._built) this.markActive(); }

    markActive() {
      const active = this.getAttribute('active') || 'inicio';
      this.shadowRoot.querySelectorAll('[data-nav]').forEach((a) => {
        const on = a.dataset.nav === active;
        a.style.fontWeight = on ? '700' : '500';
        a.style.color = on ? '#2A3180' : '#1A1A1A';
        a.style.textDecoration = on ? 'underline' : 'none';
        a.style.textUnderlineOffset = '6px';
        a.style.textDecorationThickness = '2px';
      });
      this.shadowRoot.querySelectorAll('[data-navm]').forEach((a) => {
        const on = a.dataset.navm === active;
        a.style.fontWeight = on ? '700' : '500';
        a.style.color = on ? '#2A3180' : '#1A1A1A';
      });
    }

    toggle = () => {
      const panel = this.shadowRoot.querySelector('#nav-panel');
      if (!panel) return;
      const open = panel.style.display !== 'flex';
      panel.style.display = open ? 'flex' : 'none';
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };

    onScroll = () => {
      const nav = this.shadowRoot.querySelector('#site-nav');
      if (!nav) return;
      const on = window.scrollY > 24;
      const wide = window.innerWidth >= 1024;
      nav.style.background = on ? 'rgba(255,255,255,.86)' : 'transparent';
      nav.style.backdropFilter = on ? 'saturate(180%) blur(14px)' : 'none';
      nav.style.webkitBackdropFilter = nav.style.backdropFilter;
      nav.style.boxShadow = on ? '0 1px 0 rgba(42,49,128,.10), 0 10px 30px -24px rgba(42,49,128,.5)' : 'none';
      nav.style.paddingTop = on ? '16px' : (wide ? '26px' : '20px');
      nav.style.paddingBottom = nav.style.paddingTop;
    };
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      const root = mount(this);
      this.style.width = '100%';
      root.append(frag(`
<footer id="site-footer" style="width:100%;max-width:1440px;margin:0 auto;padding:38px 128px 46px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap">
<span style="font:400 12.5px/1.5 'Inter',sans-serif;color:#1A1A1A">© 2026 Inncentives | San Pedro Garza García, Nuevo León, México</span>
<span style="font:700 12.5px/1.5 'Inter',sans-serif;color:#1A1A1A">ICM Solutions by Neitek</span>
</footer>`));
    }
  }

  if (!customElements.get('site-header')) customElements.define('site-header', SiteHeader);
  if (!customElements.get('site-footer')) customElements.define('site-footer', SiteFooter);
})();
