/* Meridian app adapter. Content modules intentionally remain empty until release. */
(() => {
  'use strict';

  const FOUNDATION = {
    brand: 'Meridian',
    context: 'AP Human Geography',
    title: 'Meridian — AP Human Geography',
    accent: '#8b6a4a'
  };

  function applyMeridianLabels(app) {
    document.title = FOUNDATION.title;
    document.documentElement.style.setProperty('--accent', FOUNDATION.accent);
    document.querySelectorAll('#brandName, .app-switcher-menu a.is-current span').forEach((node) => { node.textContent = FOUNDATION.brand; });
    ['subtitle', 'headerLevel', 'classSwitcherLabel'].forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.textContent = FOUNDATION.context;
    });
    const home = document.querySelector('#homeCard h1');
    if (home) home.textContent = 'Understand the world through place.';
    const intro = document.querySelector('#homeCard .home-intro');
    if (intro) intro.textContent = 'Meridian is the focused AP Human Geography study space. Choose a section, then build a clearer picture of the world.';
    document.querySelector('.dashboard-switcher')?.setAttribute('hidden', '');
    document.querySelector('.level-switch')?.setAttribute('hidden', '');
    document.querySelector('#spanish2Panel')?.setAttribute('hidden', '');
    document.querySelector('#practiceBehaviorSettings')?.setAttribute('hidden', '');
    document.querySelector('#accentToolbar')?.setAttribute('hidden', '');
    document.querySelector('#activeModuleChip')?.setAttribute('hidden', '');
    const enter = document.getElementById('enterPracticeBtn');
    if (enter) {
      enter.textContent = 'Modules coming soon';
      enter.disabled = true;
      enter.setAttribute('aria-label', 'Meridian modules coming soon');
    }
    const summary = document.getElementById('homeModuleSummary');
    if (summary) summary.textContent = 'No modules are enabled yet.';
    const settings = document.getElementById('moduleSettingsSection');
    if (settings) settings.innerHTML = '<div class="module-settings-heading"><strong>Meridian modules</strong><small>AP Human Geography modules will appear here as they are released. Your progress, settings, feedback, and session history stay in this browser.</small></div>';
    return app;
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    const app = window.SpanishPracticeApp;
    if (!app) return;
    window.MeridianApp = app;
    app.updateDocumentTitle = () => { document.title = FOUNDATION.title; };
    app.getEnabledModules = () => [];
    app.isModulePracticeEnabled = () => false;
    app.updateHomeSummary = () => { const node = document.getElementById('homeModuleSummary'); if (node) node.textContent = 'No modules are enabled yet.'; };
    app.runAutomatedChecks = () => {
      const results = [
        { ok: document.getElementById('brandName')?.textContent === FOUNDATION.brand, label: 'Meridian branding is installed' },
        { ok: app.getEnabledModules().length === 0, label: 'Meridian currently has no content modules' },
        { ok: !!document.getElementById('moduleSettingsSection'), label: 'Module settings surface exists' },
        { ok: !!document.getElementById('feedbackOverlay'), label: 'Feedback is available' }
      ];
      const output = document.getElementById('checksOutput');
      if (output) output.innerHTML = `${results.map((item) => `${item.ok ? '✓' : '✗'} ${item.label}`).join('<br>')}<br><small>Summary: ${results.filter((item) => item.ok).length}/${results.length} passed</small>`;
      return { pass: results.filter((item) => item.ok).length, total: results.length, results };
    };
    try { app.setLevel?.('spanish1', { historyMode: 'replace' }); } catch (_) {}
    applyMeridianLabels(app);
    // The legacy level renderer runs once after setLevel; re-apply the
    // Meridian context after that pass so the header never falls back to
    // Spanish copy.
    window.setTimeout(() => applyMeridianLabels(app), 80);
  }, 0));
})();
