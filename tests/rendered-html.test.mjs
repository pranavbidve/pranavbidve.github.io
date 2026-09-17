import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Pranav Bidve \| AI\/ML Engineer<\/title>/i);
  assert.match(html, /Qosmic<\/h3>/);
  assert.match(html, /Founding AI Intern/);
  assert.doesNotMatch(html, /Qosmic AI|Founding AI Engineer/);
  assert.match(html, /Columbia University graduate/);
  assert.match(html, /Pranav-Bidve-Resume\.pdf/);
  assert.match(html, /download="Bidve Resume\.pdf"/);
  assert.match(html, /SLiM-Eval/);
  assert.match(html, /Overlapping Prakriti Detection/);
  assert.match(html, /mailto:pranavbidve12@gmail\.com/);
  assert.match(html, /src="\/images\/pranav-portrait\.jpg"/);
  for (const project of ["shopify", "partselect", "hexanote"]) {
    assert.ok(html.includes(`href="#project-${project}"`));
    assert.ok(html.includes(`id="dialog-${project}"`));
    assert.ok(html.includes(`aria-labelledby="title-${project}"`));
  }
  assert.match(html, /src="\/portfolio\.js"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("includes the portfolio's downloadable assets", async () => {
  await Promise.all([
    access(new URL("../public/Pranav-Bidve-Resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/fonts/syne-800.ttf", import.meta.url)),
    access(new URL("../public/images/shopify-report.png", import.meta.url)),
    access(new URL("../public/images/shopify-analysis.png", import.meta.url)),
    access(new URL("../public/images/hexanote-icon.svg", import.meta.url)),
    access(new URL("../public/images/pranav-portrait.jpg", import.meta.url)),
    access(new URL("../public/portfolio.js", import.meta.url)),
  ]);
});
