import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

const previewUrl = process.env.PORTFOLIO_PREVIEW_URL ?? "http://localhost:3000";
const productionUrl = "https://pranavbidve.github.io";

const response = await fetch(previewUrl);
if (!response.ok) {
  throw new Error(`Portfolio preview returned ${response.status}`);
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
  .replaceAll(previewUrl, productionUrl)
  .replace(
    "</head>",
    `<link rel="canonical" href="${productionUrl}/"/></head>`,
  );

await rm("_next", { recursive: true, force: true });
await mkdir("_next", { recursive: true });
await cp("dist/client/_next", "_next", { recursive: true });
await cp("public/Pranav-Milind-Bidve-Resume.pdf", "Pranav-Milind-Bidve-Resume.pdf");
await cp("public/og.png", "og.png");
await cp("public/favicon.svg", "favicon.svg");
await writeFile("index.html", html);

console.log("GitHub Pages snapshot created at index.html");
