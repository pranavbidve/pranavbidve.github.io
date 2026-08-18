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
  assert.doesNotMatch(html, /Founding AI Engineer at Qosmic AI/);
  assert.match(html, /Shopify Competitive Intelligence/);
  assert.match(html, /PartSelect Agent/);
  assert.match(html, /HexaNote/);
  assert.doesNotMatch(html, /Private repository/);
  assert.match(html, />GitHub ↗<\/a>/);
  assert.match(html, /A privacy first note taking system[\s\S]*real time device synchronization/);
  assert.match(html, /SLiM-Eval/);
  assert.match(html, /Overlapping Prakriti Detection/);
  assert.match(html, /Pranav-Bidve-Resume\.pdf/);
  assert.match(html, /Kordis[\s\S]*ML Intern/);
  assert.doesNotMatch(html, /Pranav Milind Bidve/);
  assert.doesNotMatch(html, />PB<span class="accent">\.<\/span>/);
  assert.match(html, /<h1>Pranav <span>Bidve<\/span><\/h1>/);
  assert.match(html, /AI\/ML Engineer/);
  assert.doesNotMatch(html, /Inference stream|signal-visual|signal-bars/);
  assert.match(html, /Founding AI Engineer<\/p><p class="experience-summary">Building an agent-powered/);
  assert.doesNotMatch(html, /Vellore Institute of Technology/);
  assert.doesNotMatch(html, /<object[^>]+Pranav-Bidve-Resume\.pdf/);
  assert.match(html, /download="Bidve Resume\.pdf"[^>]*>Download résumé/);
  assert.match(html, />Email me <span/);
  assert.doesNotMatch(html, /Shalini Mishra|Annapurna Jonnalagadda/);
  assert.doesNotMatch(html, />\s*pranavbidve12@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("includes the portfolio's downloadable assets", async () => {
  await Promise.all([
    access(new URL("../public/Pranav-Bidve-Resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
