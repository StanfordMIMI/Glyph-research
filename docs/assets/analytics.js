/* Public site identifier only; dashboard access is managed in GoatCounter. */
(() => {
  'use strict';
  // Count the published site, never local previews or its embedded atlas twice.
  if (location.hostname !== 'stanfordmimi.github.io' ||
      !location.pathname.startsWith('/Glyph-research/') ||
      window.top !== window.self ||
      navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return;

  window.goatcounter = {
    no_events: true,
    // Concept searches and deep-link parameters are not sent to analytics.
    path: () => location.pathname.replace(/index\.html$/, ''),
    referrer: () => {
      try { return document.referrer ? new URL(document.referrer).origin : ''; }
      catch (_) { return ''; }
    }
  };
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = 'https://robbieholland.goatcounter.com/count';
  document.head.appendChild(script);
})();
