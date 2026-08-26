import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds a GitHub Pages-ready static site", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>GadgetJudge — Small apps, thoughtfully made<\/title>/);
  assert.match(html, /https:\/\/gadgetjudge\.com\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|chatgpt\.site/i);
});

test("includes the custom domain and public files", async () => {
  const [cname, ads, sourceAds] = await Promise.all([
    readFile(new URL("../dist/CNAME", import.meta.url), "utf8"),
    readFile(new URL("../dist/app-ads.txt", import.meta.url), "utf8"),
    readFile(new URL("../app-ads.txt", import.meta.url), "utf8"),
  ]);

  assert.equal(cname.trim(), "gadgetjudge.com");
  assert.equal(ads, sourceAds);
});
