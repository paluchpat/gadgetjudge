import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { invitationFromFragment, preferredStore } from '../public/simplest-shopping-list/lists/invitation.js';

test('only canonical 256-bit fragment secrets produce a fixed allowlisted invitation URL', () => {
  for (let finalByte = 0; finalByte < 256; finalByte++) {
    const bytes = Buffer.alloc(32, finalByte);
    const token = bytes.toString('base64url');
    assert.equal(invitationFromFragment(`#token=${token}`), `https://gadgetjudge.com/simplest-shopping-list/lists/#token=${token}`);
  }
  const token = Buffer.alloc(32).toString('base64url');
  for (const input of [null, '', token, `?token=${token}`, `#token=${token}=`, `#token=${token}&x=1`, `#token=${token}&token=${token}`, `#token=${token.slice(0,42)}B`, `#token=${token}\n`, '#token=javascript:alert(1)', `#token=${token}%0a`]) {
    assert.equal(invitationFromFragment(input), null);
  }
});

test('platform preference retains choice; desktop and unknown have no guessed store', () => {
  assert.equal(preferredStore('Android 17'), 'google');
  assert.equal(preferredStore('iPhone OS 18_6'), 'apple');
  assert.equal(preferredStore('Macintosh', 5), 'apple');
  assert.equal(preferredStore('Macintosh', 0), null);
  assert.equal(preferredStore('Windows NT'), null);
});

test('landing contains no remote scripts, analytics, token storage or invitation request', async () => {
  const html = await readFile(new URL('../public/simplest-shopping-list/lists/index.html', import.meta.url), 'utf8');
  const script = await readFile(new URL('../public/simplest-shopping-list/lists/page.js', import.meta.url), 'utf8');
  assert.match(html, /name="referrer" content="no-referrer"/);
  assert.match(html, /connect-src 'none'/);
  assert.match(html, /script-src 'self'/);
  assert.doesNotMatch(html, /<script[^>]+src="https?:/);
  assert.doesNotMatch(script, /fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|document\.cookie|console\./);
  assert.match(html, /After installing, open this link again/);
  assert.match(html, /<details id="open-help" hidden>/);
  // A static landing never reports server-verified status or accepts membership.
  assert.doesNotMatch(html, /<form|type="submit"|invitation is valid|already joined/i);
  for (const store of html.matchAll(/href="(https:\/\/(?:apps\.apple\.com|play\.google\.com)[^"]+)"/g)) {
    assert.doesNotMatch(store[1], /token=|#token/);
  }
});


test('Apple association only claims the invitation route for the configured app', async () => {
  const association = JSON.parse(await readFile(new URL('../public/.well-known/apple-app-site-association', import.meta.url), 'utf8'));
  assert.deepEqual(association.applinks.details, [{
    appIDs: ['G3C67458RQ.com.gadgetjudge.simplestshoppinglist'],
    components: [{ '/': '/simplest-shopping-list/lists/' }, { '/': '/simplest-shopping-list/lists' }],
  }]);
});
