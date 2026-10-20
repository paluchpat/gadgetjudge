import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds a GitHub Pages-ready static site", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>GadgetJudge — Small apps, thoughtfully made<\/title>/);
  assert.match(html, /https:\/\/gadgetjudge\.com\/gadgetjudge-social-card\.png/);
  assert.match(html, /<meta property="og:image:type" content="image\/png" \/>/);
  assert.match(html, /<meta property="og:image:width" content="1200" \/>/);
  assert.match(html, /<meta property="og:image:height" content="630" \/>/);
  assert.doesNotMatch(html, /codex-preview|chatgpt\.site/i);
});

test("includes the custom domain and public files", async () => {
  const [cname, ads, sourceAds, socialCard] = await Promise.all([
    readFile(new URL("../dist/CNAME", import.meta.url), "utf8"),
    readFile(new URL("../dist/app-ads.txt", import.meta.url), "utf8"),
    readFile(new URL("../app-ads.txt", import.meta.url), "utf8"),
    readFile(new URL("../dist/gadgetjudge-social-card.png", import.meta.url)),
  ]);

  assert.equal(cname.trim(), "gadgetjudge.com");
  assert.equal(ads, sourceAds);
  assert.ok(socialCard.length > 0);
});


test("ships a directly accessible support page with working local assets", async () => {
  const html = await readFile(new URL("../dist/support/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>App Support — GadgetJudge<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/gadgetjudge\.com\/support\/"/);
  assert.match(html, /<h1>App Support<\/h1>/);
  assert.match(html, /href="mailto:gadgetjudge@gmail\.com"/);
  assert.match(html, /Restore Remove Ads on iPhone or iPad/);
  assert.match(html, /Restore Purchases/);
  assert.match(html, /same Apple Account that made the purchase/);
  assert.match(html, /href="\/#apps"/);
  assert.match(html, /src="\.\.\/favicon\.svg"/);
  await readFile(new URL("../dist/favicon.svg", import.meta.url));
  const stylesheet = html.match(/rel="stylesheet"[^>]*href="(\.\.\/assets\/[^"]+\.css)"/);
  assert.ok(stylesheet, "support page includes its compiled stylesheet");
  await readFile(new URL(`../dist/support/${stylesheet[1]}`, import.meta.url));
  assert.doesNotMatch(html, /\/src\//);
});
