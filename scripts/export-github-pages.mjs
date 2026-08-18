import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

const productionUrl = "https://pranavbidve.github.io";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", {
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
if (!response.ok) {
  throw new Error(`Portfolio render returned ${response.status}`);
}

const source = await response.text();
const cssFiles = await readdir("dist/client/_next/static/css");
const cssFile = cssFiles.find((file) => file.endsWith(".css"));
if (!cssFile) {
  throw new Error("Built portfolio CSS was not found");
}
const html = source
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replaceAll("/app/globals.css", `/_next/static/css/${cssFile}`)
  .replaceAll("http://localhost", productionUrl)
  .replace(
    "</head>",
    `<link rel="canonical" href="${productionUrl}/"/></head>`,
  );

await rm("_next", { recursive: true, force: true });
await mkdir("_next", { recursive: true });
await cp("dist/client/_next", "_next", { recursive: true });
await cp("public/Pranav-Bidve-Resume.pdf", "Pranav-Bidve-Resume.pdf");
await cp("public/og.png", "og.png");
await cp("public/favicon.svg", "favicon.svg");
await writeFile("index.html", html);

console.log("GitHub Pages snapshot created at index.html");
