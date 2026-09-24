const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('Meridian keeps Vertex geometry separate and imports AP Human Geography sources', () => {
  assert.equal(fs.existsSync(path.join(root, 'geometry-adapter.js')), false);
  assert.equal(fs.existsSync(path.join(root, 'assets', 'canvas-geometry-pdfs')), false);
  assert.equal(fs.existsSync(path.join(root, 'assets', 'canvas-ap-human-geo')), true);
  assert.match(read('index.html'), /meridian-adapter\.js/);
  assert.match(read('index.html'), /Your geography workspace/);
  assert.match(read('index.html'), /canvas-ap-human-geo/);
});

test('Meridian registers Canvas-derived modules and remains branded independently', () => {
  assert.match(read('app.js'), /const MODULES = \[\];/);
  assert.match(read('meridian-adapter.js'), /aphg-1-1/);
  assert.match(read('meridian-adapter.js'), /getEnabledModules = \(\) =>/);
  assert.match(read('index.html'), /Meridian — AP Human Geography/);
  assert.match(read('index.html'), /assets\/meridian-mark\.png/);
});

test('Meridian Library exposes every collected Canvas document and slideshow PDF', () => {
  const html = read('index.html');
  const match = html.match(/data-public-files='([^']+)'/);
  assert.ok(match, 'public Library resource metadata is present');
  const resources = JSON.parse(match[1]);
  assert.equal(resources.length, 12);
  for (const resource of resources) {
    assert.equal(resource.type, 'pdf');
    assert.equal(fs.existsSync(path.join(root, resource.url)), true, resource.url);
  }
  assert.match(read('meridian-adapter.js'), /aphg-frq/);
  assert.match(read('meridian-adapter.js'), /2-4-lecture-slides\.pdf/);
});

test('Meridian uses its own tan foundation theme and session cookie', () => {
  assert.match(read('app-modifiers.css'), /#8b6a4a/);
  assert.match(read('api/_lib/premiumAuth.js'), /meridian_premium_session/);
  assert.match(read('manifest.webmanifest'), /"short_name": "Meridian"/);
});
