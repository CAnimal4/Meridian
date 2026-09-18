const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('Meridian foundation has no geometry adapter or Canvas curriculum', () => {
  assert.equal(fs.existsSync(path.join(root, 'geometry-adapter.js')), false);
  assert.equal(fs.existsSync(path.join(root, 'assets', 'canvas-geometry-pdfs')), false);
  assert.match(read('index.html'), /meridian-adapter\.js/);
  assert.match(read('index.html'), /Your geography workspace/);
  assert.match(read('index.html'), /Modules coming soon/);
});

test('Meridian foundation is module-empty and branded independently', () => {
  assert.match(read('app.js'), /const MODULES = \[\];/);
  assert.match(read('meridian-adapter.js'), /getEnabledModules = \(\) => \[\]/);
  assert.match(read('index.html'), /Meridian — AP Human Geography/);
  assert.match(read('index.html'), /assets\/meridian-mark\.png/);
});

test('Meridian uses its own tan foundation theme and session cookie', () => {
  assert.match(read('app-modifiers.css'), /#8b6a4a/);
  assert.match(read('api/_lib/premiumAuth.js'), /meridian_premium_session/);
  assert.match(read('manifest.webmanifest'), /"short_name": "Meridian"/);
});
