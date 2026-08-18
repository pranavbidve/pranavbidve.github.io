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
  assert.match(html, /<title>Pranav Milind Bidve \| AI\/ML Engineer<\/title>/i);
  assert.match(html, /Founding AI Engineer at Qosmic AI/);
  assert.match(html, /Shopify Competitive Intelligence/);
  assert.match(html, /Agentic Commerce Assistant/);
  assert.match(html, /HexaNote/);
  assert.match(html, /SLiM-Eval/);
  assert.match(html, /Overlapping Prakriti Detection/);
  assert.match(html, /Pranav-Milind-Bidve-Resume\.pdf/);
  assert.match(html, /pranavbidve12@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("includes the portfolio's downloadable assets", async () => {
  await Promise.all([
    access(new URL("../public/Pranav-Milind-Bidve-Resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
